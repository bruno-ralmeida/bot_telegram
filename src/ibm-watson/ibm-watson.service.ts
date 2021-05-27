import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { IamAuthenticator } from 'ibm-watson/auth';
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import AssistantV2 from 'ibm-watson/assistant/v2';
import { TelegrafService } from '../telegraf/telegraf.service';
import { WikipediaService } from '../wikipedia/wikipedia.service';
import { ConceptsService } from '../repository/concepts/concepts.service';
import { UsageService } from '../repository/usage/usage.service';
import { Context } from 'node:vm';

@Injectable()
export class IbmWatsonService {
  private assistant: AssistantV2;
  private nlu: NaturalLanguageUnderstandingV1;
  private msg = '';

  private readonly conceptsService = new ConceptsService();
  private readonly usageService = new UsageService();

  constructor(
    @Inject(forwardRef(() => TelegrafService))
    private readonly telegrafService: TelegrafService,
    private readonly wikipediaService: WikipediaService
  ) {
    const assistantVersion = process.env.ASSISTANT_VERSION;
    const assistantUrl = process.env.ASSISTANT_URL;
    const assistantApiKey = process.env.ASSISTANT_API_KEY;

    this.assistant = new AssistantV2({
      version: assistantVersion,
      authenticator: new IamAuthenticator({
        apikey: assistantApiKey,
      }),
      serviceUrl: assistantUrl,
    });

    const nluVersion = process.env.NLU_VERSION;
    const nluUrl = process.env.NLU_URL;
    const nluApiKey = process.env.NLU_API_KEY;

    this.nlu = new NaturalLanguageUnderstandingV1({
      version: nluVersion,
      authenticator: new IamAuthenticator({
        apikey: nluApiKey,
      }),
      serviceUrl: nluUrl,
    });
  }

  async analyzeText(userInput: string) {
    try {
      const params = {
        text: userInput,
        features: {
          categories: {
            limit: 2,
          },
          keywords: {},
          concepts: {},
          entities: {},
        },
        language: 'pt',
      };

      const analyzeText = await this.nlu.analyze(params);

      const analyzeIntent = await this.assistant.messageStateless({
        assistantId: process.env.ASSISTANT_ID,
        input: {
          message_type: 'text',
          text: userInput,
        },
      });

      const { keywords, concepts, categories } = analyzeText.result;
      const { intents } = analyzeIntent.result.output;

      return { keywords, concepts, categories, intents };
    } catch (error) {
      throw new Error('Não foi possível analisar o texto');
    }
  }

  async searchWikipedia(content: string): Promise<string> {
    try {
      const result = await this.wikipediaService.fetchContentFromWikipedia(
        content
      );
      const { extract } = result;
      let msg: string;

      extract
        ? (msg = `Ainda não sei nada sobre isso, porém realizei uma busca na Wikipédia: \n ${extract}`)
        : (msg = `Ainda não sei nada sobre isso.`);

      return msg;
    } catch (err) {
      throw new Error('Não foi possível localizarj os dados.');
    }
  }

  async watsonResponse(ctx: Context) {
    try {
      const userInput = ctx.update.message.text;
      const analyzeTextResult = await this.analyzeText(userInput);
      const { keywords, concepts, categories, intents } = analyzeTextResult;
      let intent = 'not-classified';
      if (intents.length > 0) intent = intents[0].intent;

      if (intent === 'greeting') {
        return ctx.reply('Olá');
      }

      let content = '';

      if (keywords.length <= 0 && concepts.length <= 0) {
        userInput
          .normalize('NFD')
          .replace(/([\u0300-\u036f]|[^\s-0-9a-zA-Z])/g, '')
          .replace(
            /\b(o|que|qual|como|e|eh|de|uma|um|declarar|atribuir|valor)\b/gi,
            ''
          )
          .split(' ')
          .map((op) => {
            if (op != '') {
              content = op;

              if (intent === 'doubts-about-technology') {
                this.msg = this.conceptsService.fetchContentFromConceptsBase(
                  content
                );
              }

              if (intent === 'doubts-about-usage') {
                this.msg = this.usageService.fetchContentFromUsageBase(content);
              }
            }
          });
      }

      if (keywords.length > 0) content = keywords[0].text;
      else if (concepts.length > 0) content = concepts[0].text;

      if (intent === 'doubts-about-concepts') {
        this.msg = this.conceptsService.fetchContentFromConceptsBase(content);
      }

      if (intent === 'doubts-about-usage') {
        this.msg = this.usageService.fetchContentFromUsageBase(content);
      }

      if (this.msg === '' && intent !== 'not-classified') {
        this.msg = await this.searchWikipedia(content);
      }

      // if (
      //   intent === 'not-classified' &&
      //   intent !== 'doubts-about-technology' &&
      //   intent !== 'doubts-about-usage'
      // ) {
      //   this.msg =
      //     'Desculpe, não consegui classificar como uma dúvida referente a programação.';
      // }

      return await ctx.reply(this.msg);
    } catch (err) {
      console.log(err.message);
    }
  }
}
