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
    quizLink: 't.me/QuizBot?start=NZAJSHj5',
  },
  {
    category: Categories.FRONTEND,
    quizLink: 'Sem Link',
  },
  {
    category: Categories.DEVOPS,
    quizLink: 't.me/QuizBot?start=GtJsyTJc',
  },
  {
    category: Categories.MOBILE,
    quizLink: 'Sem Link',
  },
  {
    category: Categories.MOBILE,
    quizLink: 'Sem Link',
  },
  {
    category: Categories.UIUX,
    quizLink: 'Sem Link',
  },
];

export default data;
