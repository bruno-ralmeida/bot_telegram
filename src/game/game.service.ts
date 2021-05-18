import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { Markup } from 'telegraf';

@Injectable()
export class GameService {
  pontos = 0;
  constructor(private readonly bot: Telegraf) {
    this.bot = bot;
  }

  loadGame() {
    const primeiroMenu = Markup.keyboard([
      ['Conversar comigo', 'Carreira', 'Links Úteis', 'Games'],
    ]).resize();
    //.extra();

    this.bot.start(async (ctx) => {
      const nome = ctx.update.message.from.first_name;
      await ctx.reply(
        `Olá, ${nome}! O meu nome é Sophia e hoje estou aqui para lhe ajudar! Para começarmos, vou lhe passar todas as opções que temos, e peço para que selecione a desejada!
    Ah, e caso queira voltar ao menu inicial, é só escrever meu nome!`,
        primeiroMenu,
      );
    });

    this.bot.hears(/sophia/i, async (ctx) => {
      const nome = ctx.update.message.from.first_name;
      await ctx.reply(
        `Oie, ${nome}! Voltei! Vou lhe passar os menus novamente!`,
        primeiroMenu,
      );
    });

    this.bot.hears('Games', async (ctx) => {
      await ctx.reply(
        `Escolha qual título você quer jogar`,
        await Markup.keyboard([
          'Front-End',
          'Back-End',
          'Mobile',
          'UX/UI',
          'DevOps',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears('Jogar mais', async (ctx) => {
      await ctx.reply(
        `Escolha qual título você quer jogar.`,
        await Markup.keyboard([
          'Front-End',
          'Back-End',
          'Mobile',
          'UX/UI',
          'DevOps',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    const msgVoltarMenu =
      'Protinho, voltamos ao menu de início, o que deseja fazer agora?';

    this.bot.hears('Voltar ao menu', async (ctx) => {
      await ctx.reply(msgVoltarMenu, primeiroMenu);
    });

    this.bot.hears('Front-End', async (ctx) => {
      // await ctx.reply(gamesMenus)
    });

    this.bot.hears('Back-End', async (ctx) => {
      await ctx.reply(`Vamos ao jogo!`);
      await ctx.reply(
        `Back-End 1. O que são arrays?
    a) São estruturas de dados homogêneas que possibilitam o armazenamento de grupos de valores do mesmo tipo, em uma única variável.
    b) São variáveis específicas para armazenamento de números inteiros
    c) Trata-se de uma forma de planejamento do algoritmo
    d) São formas de estruturar ou organizar dados na memória RAM do computador, de modo que você possa utilizar estes dados de uma forma mais eficiente`,
        await Markup.keyboard([
          'Back-End 1. A',
          'Back-End 1. B',
          'Back-End 1. C',
          'Back-End 1. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    const exercicio2BKE = `Back-End 2. Onde as variáveis ficam armazenadas?
a) No programa/software
b) Na memória RAM do computador
c) No banco de dados
d) No banco de dados, no software e na memória RAM`;

    this.bot.hears('Back-End 1. A', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio2BKE,
        await Markup.keyboard([
          'Back-End 2. A',
          'Back-End 2. B',
          'Back-End 2. C',
          'Back-End 2. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['Back-End 1. B', 'Back-End 1. C', 'Back-End 1. D'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio2BKE,
          await Markup.keyboard([
            'Back-End 2. A',
            'Back-End 2. B',
            'Back-End 2. C',
            'Back-End 2. D',
          ])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    const exercicio3BKE = `Back-End 3. O que signficia "Concatenar"?
a) Trata-se de um conjunto de caracteres
b) Configura o tipo de uma variável
c) Dividir duas variáveis
d) Unir dados de modo lógico ou manter ligação ou conexão entre eles`;

    this.bot.hears('Back-End 2. B', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio3BKE,
        await Markup.keyboard([
          'Back-End 3. A',
          'Back-End 3. B',
          'Back-End 3. C',
          'Back-End 3. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['Back-End 2. A', 'Back-End 2. C', 'Back-End 2. D'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio3BKE,
          await Markup.keyboard([
            'Back-End 3. A',
            'Back-End 3. B',
            'Back-End 3. C',
            'Back-End 3. D',
          ])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    const exercicio4BKE = `Back-End 4. Marque a opção que melhor define o conceito de Lógica na área da tecnologia:
a) Organização e planejamento das intruções, em um algoritmo, a fim de viabilizar a implantação de um programa/software
b) O encadeamento coerente de alguma coisa que obedece a certas convenções e regras
c) Significa encadear uma série de instruções para que se possa chegar à solução de um problema
d) Maneira rigorosa de raciocinar`;

    this.bot.hears(['Back-End 3. D'], async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio4BKE,
        await Markup.keyboard([
          'Back-End 4. A',
          'Back-End 4. B',
          'Back-End 4. C',
          'Back-End 4. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['Back-End 3. A', 'Back-End 3. B', 'Back-End 3. C'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, , até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio4BKE,
          await Markup.keyboard([
            'Back-End 4. A',
            'Back-End 4. B',
            'Back-End 4. C',
            'Back-End 4. D',
          ])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    const exercicio5BKE = `Back-End 5. Marque a opção correta que define a estrutura de repetição 'PARA-ATE' (Em inglês, "FOR"):
a) Caso o resultado seja falso o programa encerra essa estrutura e volta para o fluxo do programa
b) Estrutura de repetição que realiza um teste lógico no final da estrutura, executando ao menos uma vez o conjunto de instruções antes de verificar a condição testada
c) Estrutura de repetição quando já existe um término determinado ou limites fixos
d) Estrutura de repetição que realiza um teste lógico no início da estrutura e sempre que o teste lógico resultar em VERDADEIRO, os comandos associados a esta estrutura são executados`;

    this.bot.hears(['Back-End 4. A'], async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio5BKE,
        await Markup.keyboard([
          'Back-End 5. A',
          'Back-End 5. B',
          'Back-End 5. C',
          'Back-End 5. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['Back-End 4. B', 'Back-End 4. C', 'Back-End 4. D'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio5BKE,
          await Markup.keyboard([
            'Back-End 5. A',
            'Back-End 5. B',
            'Back-End 5. C',
            'Back-End 5. D',
          ])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    this.bot.hears(['Back-End 5. C'], async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! Até agora você tem ${this.pontos}xp!.
    Agora que você finalizou o jogo de perguntas de Back-End, você deseja voltar ao menu inicial ou jogar mais?`,
        await Markup.keyboard(['Voltar ao menu', 'Jogar mais'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['Back-End 5. A', 'Back-End 5. B', 'Back-End 5. D'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, mas até agora você acumulou ${this.pontos}xp.
    Agora que você finalizou o jogo de perguntas de Back-End, você deseja voltar ao menu inicial ou jogar mais?`,
          await Markup.keyboard(['Voltar ao menu', 'Jogar mais'])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    this.bot.hears('UX-UI', async (ctx) => {
      // await ctx.reply(gamesMenus)
    });

    this.bot.hears('DevOps', async (ctx) => {
      await ctx.reply(`Vamos ao jogo!`);
      await ctx.reply(
        `DevOps 1. O que é DevOps?
    a) Filosofia que tem como principal objetivo aumentar a produtividade da equipe de codificação.
    b) Consiste no alinhamento dos diferentes times de TI, englobando processos visando acelerar as entregas em produção com qualidade.
    c) Ferramenta de desenvolvimento de código que aumenta a produtividade do código gerado.
    d) Prática de Engenharia de Software que visa integrar as diferentes metodologias de desenvolvimento de Software`,
        await Markup.keyboard([
          'DevOps 1. A',
          'DevOps 1. B',
          'DevOps 1. C',
          'DevOps 1. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    const exercicio2DOPs = `DevOps 2. Considere as afirmações:
    I - O modelo tradicional para a entrega de software favorece a percepção do cliente no que consiste a qualidade
    II - Processos manuais estão amplamente sujeitos a erros, ocasionam atrasos e não respondem corretamente e de modo rápido às questões de negócio
    III - DevOps faz com que as equipes possam construir, testar, liberar e manter as aplicações com mais frequência e mais eficiência.
    Quais as afirmações que estão corretas?
    
    a) Somente a afirmação I está correta
    b) Somente as afirmações I e II estão corretas
    c) Todas as afirmações estão corretas
    d) Somente as afirmações II e III`;

    this.bot.hears('DevOps 1. B', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio2DOPs,
        await Markup.keyboard([
          'DevOps 2. A',
          'DevOps 2. B',
          'DevOps 2. C',
          'DevOps 2. D',
        ])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['DevOps 1. A', 'DevOps 1. C', 'DevOps 1. D'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio2DOPs,
          await Markup.keyboard([
            'DevOps 2. A',
            'DevOps 2. B',
            'DevOps 2. C',
            'DevOps 2. D',
          ])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    const exercicio3DOPs = `DevOps 3. O Manifesto Agile afirma que:
a) Processo e ferramentas vêm antes dos indivíduos que os utilizam.
b) Você precisa documentar totalmente novos recursos antes de criá-los.
c) Responder as mudanças é mais importante do que seguir um plano.`;

    this.bot.hears('DevOps 2. D', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio3DOPs,
        await Markup.keyboard(['DevOps 3. A', 'DevOps 3. B', 'DevOps 3. C'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(
      ['DevOps 2. A', 'DevOps 2. B', 'DevOps 2. C'],
      async (ctx) => {
        await ctx.reply(
          `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
        );
        await ctx.reply(
          exercicio3DOPs,
          await Markup.keyboard(['DevOps 3. A', 'DevOps 3. B', 'DevOps 3. C'])
            .resize()
            .oneTime(),
          //.extra(),
        );
      },
    );

    const exercicio4DOPs = `DevOps 4. Um sprint é:
a) Uma quantidade fixa de tempo que uma equipe tem para concluir um conjunto de tarefas.
b) Outro nome para um painel de tarefas.
c) O tempo que sua equipe reserva para trabalhar em bugs`;

    this.bot.hears('DevOps 3. C', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio4DOPs,
        await Markup.keyboard(['DevOps 4. A', 'DevOps 4. B', 'DevOps 4. C'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(['DevOps 3. A', 'DevOps 3. B'], async (ctx) => {
      await ctx.reply(
        `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio4DOPs,
        await Markup.keyboard(['DevOps 4. A', 'DevOps 4. B', 'DevOps 4. C'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    const exercicio5DOPs = `DevOps 5. Por que os projetos desenvolvidos com a metodologia de desenvolvimento Agile são bem sucedidos do que os desenvolvidos com a metodologia Cascata?
a) Porque as versões de lote pequeno, que são caracteríscas de projetos Agile, aumentam as oportunidades de obter conhecimento.
b) Porque o escopo de projetos Cascata permanece flexível, enquanto o escopo dos projetos Agile é normalmente fixo e mais realista.
c) Porque os esforços de estimativa em projetos Cascata normalmente são mais precisos do que aqueles em projetos Agile.`;

    this.bot.hears('DevOps 4. A', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! E agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio5DOPs,
        await Markup.keyboard(['DevOps 5. A', 'DevOps 5. B', 'DevOps 5. C'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(['DevOps 4. B', 'DevOps 4. C'], async (ctx) => {
      await ctx.reply(
        `Infelizmente você errou a questão e não ganhou this.pontos, até agora você tem ${this.pontos}xp. Vamos a próxima questão!`,
      );
      await ctx.reply(
        exercicio5DOPs,
        await Markup.keyboard(['DevOps 5. A', 'DevOps 5. B', 'DevOps 5. C'])
          .resize()
          .oneTime(),
        //.extra(),
      );
    });

    this.bot.hears('DevOps 5. A', async (ctx) => {
      this.pontos += 400;
      await ctx.reply(
        `Parabéns! Você acertou e ganhou 400xp! Até agora você tem ${this.pontos}xp!.
    Agora que você finalizou o jogo de perguntas de Back-End, você deseja voltar ao menu inicial ou jogar mais?`,
        Markup.keyboard(['Voltar ao menu', 'Jogar mais']).resize().oneTime(),
        //.extra(),
      );
    });

    this.bot.hears(['DevOps 5. B', 'DevOps 5. C'], async (ctx) => {
      await ctx.reply(
        `Infelizmente você errou a questão e não ganhou this.pontos, mas até agora você acumulou ${this.pontos}xp.
    Agora que você finalizou o jogo de perguntas de Back-End, você deseja voltar ao menu inicial ou jogar mais?`,
        Markup.keyboard(['Voltar ao menu', 'Jogar mais']).resize().oneTime(),
        //.extra(),
      );
    });
  }
}
