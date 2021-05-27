import { CareersCategories } from '../../helpers';

interface GameFormat {
  category: CareersCategories;
  quizLink: string;
}

const data: GameFormat[] = [
  {
    category: CareersCategories.BACKEND,
    quizLink: 't.me/QuizBot?start=NZAJSHj5',
  },
  {
    category: CareersCategories.FRONTEND,
    quizLink: 'Sem Link',
  },
  {
    category: CareersCategories.DEVOPS,
    quizLink: 't.me/QuizBot?start=GtJsyTJc',
  },
  {
    category: CareersCategories.MOBILE,
    quizLink: 'Sem Link',
  },
  {
    category: CareersCategories.MOBILE,
    quizLink: 'Sem Link',
  },
  {
    category: CareersCategories.UIUX,
    quizLink: 'Sem Link',
  },
];

export default data;
