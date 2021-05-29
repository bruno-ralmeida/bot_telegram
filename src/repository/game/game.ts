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
    quizLink: 't.me/QuizBot?start=85OOCqdA',
  },
  {
    category: CareersCategories.DEVOPS,
    quizLink: 't.me/QuizBot?start=GtJsyTJc',
  },
  {
    category: CareersCategories.UIUX,
    quizLink: 't.me/QuizBot?start=9iFKUObZ',
  },
];

export default data;
