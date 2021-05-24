import { GameFormat } from '../../helpers';

export enum Categories {
  BACKEND = 'Back-End',
  FRONTEND = 'Front-End',
  DEVOPS = 'DevOps',
  MOBILE = 'Mobile',
  UIUX = 'UI/UX',
}

const data: GameFormat[] = [
  {
    category: Categories.BACKEND,
    question: 'O que são arrays?',
    options: [
      'São estruturas de dados homogêneas que possibilitam o armazenamento de grupos de valores do mesmo tipo, em uma única variável.',
      'São variáveis específicas para armazenamento de números inteiros.',
      'Trata-se de uma forma de planejamento do algoritmo.',
      'São formas de estruturar ou organizar dados na memória RAM do computador, de modo que você possa utilizar estes dados de uma forma mais eficiente.',
    ],
    answer:
      'São estruturas de dados homogêneas que possibilitam o armazenamento de grupos de valores do mesmo tipo, em uma única variável.',
  },
  {
    category: Categories.BACKEND,
    question: 'Onde as variáveis ficam armazenadas?',
    options: [
      'No programa/software.',
      'Na memória RAM do computador.',
      'No banco de dados.',
      'No banco de dados, no software e na memória RAM.',
    ],
    answer: 'Na memória RAM do computador.',
  },
  {
    category: Categories.BACKEND,
    question: 'O que signficia "Concatenar',
    options: [
      'Trata-se de um conjunto de caracteres.',
      'Configura o tipo de uma variável.',
      'Dividir duas variáveis.',
      'Unir dados de modo lógico ou manter ligação ou conexão entre eles.',
    ],
    answer:
      'Unir dados de modo lógico ou manter ligação ou conexão entre eles.',
  },
  {
    category: Categories.BACKEND,
    question:
      'Marque a opção que melhor define o conceito de Lógica na área da tecnologia',
    options: [
      'Organização e planejamento das intruções, em um algoritmo, a fim de viabilizar a implantação de um programa/software',
      'O encadeamento coerente de alguma coisa que obedece a certas convenções e regras',
      'Significa encadear uma série de instruções para que se possa chegar à solução de um problema',
      'Maneira rigorosa de raciocinar',
    ],
    answer:
      'Organização e planejamento das intruções, em um algoritmo, a fim de viabilizar a implantação de um programa/software',
  },
  {
    category: Categories.BACKEND,
    question:
      'Marque a opção correta que define a estrutura de repetição \'PARA-ATE\' (Em inglês, "FOR"):',
    options: [
      'Caso o resultado seja falso o programa encerra essa estrutura e volta para o fluxo do programa',
      'Estrutura de repetição que realiza um teste lógico no final da estrutura, executando ao menos uma vez o conjunto de instruções antes de verificar a condição testada',
      'Estrutura de repetição quando já existe um término determinado ou limites fixos',
      'Estrutura de repetição que realiza um teste lógico no início da estrutura e sempre que o teste lógico resultar em VERDADEIRO, os comandos associados a esta estrutura são executados',
    ],
    answer:
      'Estrutura de repetição quando já existe um término determinado ou limites fixos',
  },

  {
    category: Categories.DEVOPS,
    question: 'O que é DevOps',
    options: [
      'Filosofia que tem como principal objetivo aumentar a produtividade da equipe de codificação.',
      'Consiste no alinhamento dos diferentes times de TI, englobando processos visando acelerar as entregas em produção com qualidade.',
      'Ferramenta de desenvolvimento de código que aumenta a produtividade do código gerado.',
      'Prática de Engenharia de Software que visa integrar as diferentes metodologias de desenvolvimento de Software.',
    ],
    answer:
      'Consiste no alinhamento dos diferentes times de TI, englobando processos visando acelerar as entregas em produção com qualidade.',
  },
  {
    category: Categories.DEVOPS,
    question: `Considere as afirmações:
              I - O modelo tradicional para a entrega de software favorece a percepção do cliente no que consiste a qualidade
              II - Processos manuais estão amplamente sujeitos a erros, ocasionam atrasos e não respondem corretamente e de modo rápido às questões de negócio
              III - DevOps faz com que as equipes possam construir, testar, liberar e manter as aplicações com mais frequência e mais eficiência.
              Quais as afirmações que estão corretas?`,
    options: [
      'Somente a afirmação I está correta.',
      'Somente as afirmações I e II estão corretas.',
      'Todas as afirmações estão corretas.',
      'Somente as afirmações II e III',
    ],
    answer: 'Somente as afirmações II e III',
  },
  {
    category: Categories.DEVOPS,
    question: 'O Manifesto Agile afirma que:',
    options: [
      'Processo e ferramentas vêm antes dos indivíduos que os utilizam.',
      'Você precisa documentar totalmente novos recursos antes de criá-los.',
      'Responder as mudanças é mais importante do que seguir um plano.',
    ],
    answer: 'Responder as mudanças é mais importante do que seguir um plano.',
  },
  {
    category: Categories.DEVOPS,
    question: 'Um sprint é:',
    options: [
      'Uma quantidade fixa de tempo que uma equipe tem para concluir um conjunto de tarefas.',
      'Outro nome para um painel de tarefas.',
      'O tempo que sua equipe reserva para trabalhar em bugs',
    ],
    answer:
      'Uma quantidade fixa de tempo que uma equipe tem para concluir um conjunto de tarefas.',
  },
  {
    category: Categories.DEVOPS,
    question:
      'Por que os projetos desenvolvidos com a metodologia de desenvolvimento Agile são bem sucedidos do que os desenvolvidos com a metodologia Cascata?',
    options: [
      'Porque as versões de lote pequeno, que são caracteríscas de projetos Agile, aumentam as oportunidades de obter conhecimento.',
      'Porque o escopo de projetos Cascata permanece flexível, enquanto o escopo dos projetos Agile é normalmente fixo e mais realista.',
      'Porque os esforços de estimativa em projetos Cascata normalmente são mais precisos do que aqueles em projetos Agile.',
    ],
    answer:
      'Porque as versões de lote pequeno, que são caracteríscas de projetos Agile, aumentam as oportunidades de obter conhecimento.',
  },

  {
    category: Categories.FRONTEND,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.FRONTEND,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.FRONTEND,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.FRONTEND,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.FRONTEND,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },

  {
    category: Categories.MOBILE,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.MOBILE,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.MOBILE,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.MOBILE,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.MOBILE,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },

  {
    category: Categories.UIUX,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.UIUX,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.UIUX,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.UIUX,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
  {
    category: Categories.UIUX,
    question: '',
    options: ['', '', '', ''],
    answer: '',
  },
];

export default data;
