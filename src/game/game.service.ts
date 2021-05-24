import { Injectable } from '@nestjs/common';
import { Context } from 'node:vm';
import { GameFormat } from 'src/helpers';
import { Categories } from 'src/repository/game/game';
import { Markup, Telegraf } from 'telegraf';
import { GameRepositoryService } from '../repository/game/gameRepository.service';

@Injectable()
export class GameService {
  private readonly alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  private readonly gameRepository = new GameRepositoryService();
  private gameMenuCategories: string[] = [];
  private questionsTrigger: string[] = [];

  private questions: GameFormat[];
  private options: string[] = [];
  private questionIndex = 0;
  private points = 0;

  constructor(private readonly bot: Telegraf) {
    this.bot = bot;

    for (const key in Categories) {
      const questions = this.gameRepository.fetchContentFromGameBase(
        Categories[key]
      );
      for (let index = 0; index < questions.length; index++) {
        const question = questions[index];

        question.options.map((op, i) => {
          const letter = this.alphabet[i].toUpperCase();
          this.questionsTrigger.push(
            `${question.category} ${String(index + 1).padStart(
              3,
              '0'
            )} - ${letter}`
          );
        });
      }

      this.gameMenuCategories.push(Categories[key]);
    }
    //User response
    this.bot.hears(this.questionsTrigger, async (ctx) => {
      const userResponse = ctx.match.input;

      const options = this.questions[this.questionIndex].options;
      const awnser = this.questions[this.questionIndex].answer;
      const position = options.indexOf(awnser);

      const rightAnswer = `${
        this.questions[this.questionIndex].category
      } ${String(this.questionIndex + 1).padStart(3, '0')} - ${this.alphabet[
        position
      ].toUpperCase()}`;

      if (userResponse == rightAnswer) {
        this.points += 400;
        await ctx.reply(`ACERTOUUUUU ⚽️ -  PONTUAÇÃO: ${this.points}`);
      } else await ctx.reply(`Errouuu 🤧 -  PONTUAÇÃO: ${this.points}`);

      //Validar se é a ultima questão
      this.questionIndex++;

      const questionInfo = `${
        this.questions[this.questionIndex].category
      } ${String(this.questionIndex + 1).padStart(3, '0')}`;

      this.options = [];
      this.questions[this.questionIndex].options.map((op, i) => {
        const letter = this.alphabet[i].toUpperCase();
        this.options.push(`${questionInfo} - ${letter}`);
      });

      const question = this.questions[this.questionIndex].question;
      const msg = `${questionInfo} - ${question}\n\n${this.questions[
        this.questionIndex
      ].options.map(
        (op, i) => `  ${this.alphabet[i].toUpperCase()} - ${op}\n\n`
      )}        
      `;

      await ctx.reply(msg, Markup.keyboard(this.options));
    });

    //Game categories
    this.bot.hears(this.gameMenuCategories, async (ctx) => {
      const category = ctx.match.input;

      this.questions = this.gameRepository.fetchContentFromGameBase(category);

      const question = this.questions[this.questionIndex].question;
      const options = this.questions[this.questionIndex].options;

      const questionInfo = `${category} ${String(
        this.questionIndex + 1
      ).padStart(3, '0')}`;

      const msg = `${questionInfo} - ${question}\n\n${options.map(
        (op, i) => `  ${this.alphabet[i].toUpperCase()} - ${op}\n\n`
      )}        
      `;

      options.map((op, i) => {
        const letter = this.alphabet[i].toUpperCase();
        this.options.push(`${questionInfo} - ${letter}`);
      });

      await ctx.reply(msg, Markup.keyboard(this.options));
      console.log(this.questionsTrigger);
    });
  }

  async startGame(ctx: Context) {
    await this.showGameCategories(ctx);
  }

  private async showGameCategories(ctx: Context) {
    return await ctx.reply(
      'Selecione uma categoria:',
      Markup.keyboard(this.gameMenuCategories).resize()
    );
  }
}
