import { LinksCategories } from '../../helpers';

export interface LinksFormat {
  category: LinksCategories;
  description: string;
  link: string;
}

const data: LinksFormat[] = [
  {
    category: LinksCategories.VIDEOS,
    description:
      'Curso em Vídeo - Cursos gratuitos e com certificado, conteúdo excelente para os iniciantes.',
    link: 'shorturl.at/lrwGJ',
  },
  {
    category: LinksCategories.VIDEOS,
    description: 'Código Fonte TV - Canal de tecnologia',
    link: 'shorturl.at/tvzQW',
  },
  {
    category: LinksCategories.VIDEOS,
    description: 'Filipe Deschamps - Canal de tecnologia',
    link: 'shorturl.at/defNR',
  },
  {
    category: LinksCategories.BOOKS,
    description: 'Livros gratuitos publicados no repositório do GitHub.',
    link: 'shorturl.at/kvCKZ',
  },
  {
    category: LinksCategories.RESOURCES,
    description:
      'Animações, Emojis, Fontes, Icones, Ilustrações e vetores, Imagens, Logos e Paleta de cores publicados no repositório do GitHub.',
    link: 'shorturl.at/jpsY8',
  },
  {
    category: LinksCategories.RESOURCES,
    description:
      'Ferramentas de desenvolvimento, IDEs e editores de código, Linguagens de programação e Hospedagem',
    link: 'shorturl.at/wES49',
  },
  {
    category: LinksCategories.RESOURCES,
    description: 'Inspiração de layouts',
    link: 'https://dribbble.com/',
  },
  {
    category: LinksCategories.RESOURCES,
    description: 'Guia de CSS',
    link: 'https://css-tricks.com/',
  },
  {
    category: LinksCategories.RESOURCES,
    description:
      'Whimiscal - Ferramenta de apoio para desenvolvimento de brainstorming, fluxos de usuários e diagramas',
    link: 'https://whimsical.com/',
  },
  {
    category: LinksCategories.IDEAS,
    description:
      'Ideias de aplicativos para colocar em pratica todos os conceitos estudados',
    link: 'shorturl.at/yEL07',
  },
  {
    category: LinksCategories.IDEAS,
    description: 'Desafios para desenvolvedores Front-end',
    link: 'shorturl.at/cnzS8',
  },
];

export default data;
