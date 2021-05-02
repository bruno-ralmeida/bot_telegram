import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { IamAuthenticator } from 'ibm-watson/auth';
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import AssistantV2 from 'ibm-watson/assistant/v2';
import { TelegrafService } from '../telegraf/telegraf.service';
import { WikipediaService } from '../wikipedia/wikipedia.service';

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

    const nluVersion = process.env.NLU_VERSION;
    const nluUrl = process.env.NLU_URL;
    const nluApiKey = process.env.NLU_API_KEY;

    this.assistant = new AssistantV2({
      version: assistantVersion,
      authenticator: new IamAuthenticator({
        apikey: assistantApiKey,
      }),
      serviceUrl: assistantUrl,
    });

    this.nlu = new NaturalLanguageUnderstandingV1({
      version: nluVersion,
      authenticator: new IamAuthenticator({
        apikey: nluApiKey,
      }),
      serviceUrl: nluUrl,
    });
  }
  watsonResponse(ctx) {
    const userInput = ctx.update.message.text;
    const analyzeParams = {
      text: userInput,
      features: {
        categories: {
          limit: 2,
        },
        keywords: {},
      },
      language: 'pt',
    };
    this.nlu
      .analyze(analyzeParams)
      .then((analysisResults) => {
        const keywords = analysisResults.result.keywords;
        const categories = analysisResults.result.categories;
        keywords.map((keyword) => {
          this.wikipediaService
            .fetchContentFromWikipedia(keyword.text)
            .then((res) => {
              if (res.extract !== undefined) {
                ctx.reply(
                  `Desculpe, ainda não sei nada sobre isso, porém realizei uma busca no Wikipedia: \n ${res.extract}`,
                );
              } else {
                ctx.reply('Desculpe, ainda não sei nada sobre isso.');
              }
            });
        });
        categories.map((c) => {
          ctx.reply(c.label);
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
    this.assistant
      .messageStateless({
        assistantId: process.env.ASSISTANT_ID,
        input: {
          message_type: 'text',
          text: userInput,
        },
      })
      .then((res) => {
        this.telegrafService.showMessage(ctx, res);
      });
  }
}
