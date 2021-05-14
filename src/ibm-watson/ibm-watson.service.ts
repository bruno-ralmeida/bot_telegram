import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { IamAuthenticator } from 'ibm-watson/auth';
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import AssistantV2 from 'ibm-watson/assistant/v2';
import { TelegrafService } from '../telegraf/telegraf.service';
import { WikipediaService } from '../wikipedia/wikipedia.service';
import { Context } from 'node:vm';

@Injectable()
export class IbmWatsonService {
  assistant: AssistantV2;
  nlu: NaturalLanguageUnderstandingV1;

  constructor(
    @Inject(forwardRef(() => TelegrafService))
    private readonly telegrafService: TelegrafService,
    private readonly wikipediaService: WikipediaService,
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
        content,
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
      //Lógica para buscar na base ou wikipedia -- case?

      if (intents[0].intent === 'greeting') {
        return this.telegrafService.showMessage(ctx, 'Olá, eu sou a Sophia!');
      }

      let content: string;
      concepts.length > 0
        ? (content = concepts[0].text)
        : (content = keywords[0].text);

      const wikipediaResponse = await this.searchWikipedia(content);

      this.telegrafService.showMessage(
        ctx,
        `${JSON.stringify(categories)} 
        \n ${JSON.stringify(intents)} 
        \n ${wikipediaResponse}`,
      );
    } catch (err) {
      console.log(err.message);
    }
  }
}
