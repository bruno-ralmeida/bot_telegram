import { links } from 'wikipedia/dist/page';
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
    link:
      'https://www.cursoemvideo.com/  ou  https://www.youtube.com/user/cursosemvideo',
  },
  {
    category: LinksCategories.VIDEOS,
    description:
      'Código Fonte TV - Execlente para dúvidas do dia a dia e dúvidas de carreira',
    link: 'https://www.youtube.com/user/codigofontetv',
  },
  {
    category: LinksCategories.VIDEOS,
    description: 'Filipe Deschamps - Canal de tecnologia',
    link: 'https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw',
  },
  {
    category: LinksCategories.BOOKS,
    description: 'Livros gratuitos publicados no repositório do GitHub.',
    link:
      'https://github.com/iuricode/recursos-gratuitos/blob/master/pages/materiais-gratuitos-para-estudos.br.md#-livros',
  },
  {
    category: LinksCategories.RESOURCES,
    description: 'Recursos gratuitos de código aberto',
    link: 'https://free-for.dev/',
  },
  {
    category: LinksCategories.RESOURCES,
    description:
      'Animações, Emojis, Fontes, Icones, Ilustrações e vetores, Imagens, Logos e Paleta de cores publicados no repositório do GitHub.',
    link:
      'https://github.com/iuricode/recursos-gratuitos/blob/master/pages/materiais-gratuitos-para-sites.br.md#-imagens',
  },
  {
    category: LinksCategories.RESOURCES,
    description:
      'Ferramentas de desenvolvimento, IDEs e editores de código, Linguagens de programação e Hospedagem',
    link:
      'https://github.com/iuricode/recursos-gratuitos/blob/master/pages/materiais-gratuitos-para-devs.br.md#-ferramentas-de-desenvolvimento',
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
    link: 'https://github.com/florinpop17/app-ideas',
  },
  {
    category: LinksCategories.IDEAS,
    description: 'Desafios para desenvolvedores Front-end',
    link: 'https://github.com/felipefialho/frontend-challenges',
  },
];

export default data;
