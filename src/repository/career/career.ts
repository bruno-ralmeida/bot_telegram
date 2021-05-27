import { CareersCategories } from '../../helpers';

export interface carrerFormat {
  category: CareersCategories;
  text: string;
}

const data: carrerFormat[] = [
  {
    category: CareersCategories.BACKEND,
    text: `O back-end developer programa a camada da aplicação responsável pela lógica, servidores e mecanismos. Basicamente, é quem faz o seu site de busca devolver o assunto pesquisado ao usuário. Veja como você pode iniciar sua jornada nessa área:
    Escolha uma linguagem de programação back-end! Há diversas opções para você: Java, JavaScript, C#, PHP, Python, Rust, Go e Ruby. Veja qual se encaixa melhor nos seus objetivos. Ou, se você não souber por onde começar e adorar desenvolvimento web e mobile, dê uma olhadinha em JavaScript. 
    Leia sobre sistemas operacionais, comandos de shell básicos, gerenciamento de processos, threads, I/O Management e comunicação interprocessos. 
    Aplicativos de controle de versão e repositórios servem para armazenar as mudanças feitas no seu projeto, dando assim acesso a versões anteriores da sua aplicação caso algum rollback seja necessário. O Git e o GitHub são ótimas ferramentas para isso.
    Busque sobre bancos de dados relacionais (como PostgreSQL, MySQL e MariaDB) e bancos de dados não-relacionais (como MongoDB). Veja também sobre índices e normalização.
    A utilização de APIs agrega valor para a aplicação de qualquer desenvolvedor back-end. Dentre as mais úteis estão API REST, Authentication e suas variantes e JSON APIs. Faça uma pesquisa dedicada sobre elas e mais outras para encontrar as APIs que são interessantes para o seu projeto.
    Entender sobre web segurança é crucial para desenvolver aplicações confiáveis e saber como evitar exploits. Para isso, estude sobre protocolos de segurança utilizados na internet (como HTTPS e CORS) e sobre algoritmos hashing. 
    Todo site verdadeiramente bom foi testado para garantir a melhor experiência do usuário. Incorpore essa cultura no seu processo de desenvolvimento estudando sobre integration testing, unit testing e functional testing. 
    Por último, mas não menos importante, entenda a diferença (e as vantagens) da arquitetura de microsserviços e a arquitetura monolítica ao estudar estes e outros padrões arquiteturais, como SOA e Serverless. Também é uma boa oportunidade para aprender um pouco sobre virtualização e conteinerização utilizando o Docker. 
    Ah, e se você conseguir dar uma olhada em como motores de busca funcionam e o que é a tal de ElasticSearch, vai ser ótimo também!
    E aí, gostou do plano? Agora é hora de colocar a mão na massa 🚀.
    `,
  },
  {
    category: CareersCategories.FRONTEND,
    text: `O front-end developer programa a camada da aplicação que é visível para o usuário, como o design de telas, botões de pesquisa, tamanho de imagens e cor do background. Veja como você pode iniciar sua jornada nessa área:
    HMTL, CSS e JavaScript são as principais linguagens que um profissional de front-end utiliza no dia a dia. Comece pela sintaxe e comandos básicos de cada uma e faça projetos para solidificar seus conhecimentos. Sobre HTML, pesquise sobre forms, validações, convenções e boas práticas. Para CSS, dê uma olhada em tipos de layouts, design responsivo e media queries. Já para JavaScript, busque por manipulação de DOM, Fetch API/Ajax, ES6+ e JavaScript modular. Também é recomendável aprender TypeScript.
    Aplicativos de controle de versão e repositórios servem para armazenar as mudanças feitas no seu projeto, dando assim acesso a versões anteriores da sua aplicação caso algum rollback seja necessário. O Git e o GitHub são ótimas ferramentas para isso. 
    Em seguida, aprenda sobre package managers (como yarn e npm), task runners (como npm scripts) e sobre empacotadores de módulo (como WebPack). 
    Escolha um framework para ampliar seus conhecimentos: React.js (invista em Redux ou MobX), Angular (RxJS ou NgRx) ou Vue.js (VueX). Todos estes possuem pontos positivos e negativos, mas você deve escolher o que for atender melhor ao seu projeto ou, no início, o que parecer mais fácil. 
    Quando já estiver craque, dê uma olhada em SSR (Server Side Rendering) específico para o framework escolhido e SSG (Static Site Generators) para otimizar sua página.
    Para se aprofundar com CSS, pesquise sobre styled components, CSS Modules, styled JSX e Emotion. O CSS também possui frameworks, como Reactstrap, Material UI e Bootstrap.
    E aí, gostou do plano? Agora é hora de colocar a mão na massa 🚀
    `,
  },
  {
    category: CareersCategories.MOBILE,
    text: `O desenvolvedor Android é responsável por criar aplicativos para smartphones que utilizam o sistema operacional Android. Veja como você pode iniciar sua jornada nessa área:
    O primeiro passo é escolher uma linguagem: Kotlin ou Java. Apesar de ser possível utilizar ambas em uma mesma aplicação, a Google anunciou que Kotlin é a favorita para desenvolvimento a partir de 2019.
    Depois, instale o Android Studio e aprenda o básico de Kotlin, de POO (Programação Orientada a Objetos), de estruturas de dados e algoritmos. Ah, entender o que é e como usar o Gradle será fundamental na sua jornada de desenvolvedor Android!
    Aplicativos de controle de versão e repositórios servem para armazenar as mudanças feitas no seu projeto, dando assim acesso a versões anteriores da sua aplicação caso algum rollback seja necessário. O Git e o GitHub são ótimas ferramentas para isso.
    Agora que você já tem uma base sólida, comece a desenvolver sua aplicação! Vou listar aqui alguns conceitos para você ler e ter em mente, mas lembre-se que a maioria deles você irá aprender ao longo do desenvolvimento. São eles:
    Como usar Activities e Activies Lifecycles
    Construir interfaces flexíveis usando Fragments
    Debuggar usando o Android Studio Debugger
    Segurança para aplicações Android
    Testes com aplicações Android (JUnit e Espresso)
    Configurações de aplicativos
    Como utilizar Intents
    Como utilizar Components
    Entender Context
    Aprender sobre multithreading no Android e como utilizá-lo em suas aplicações
    Bibliotecas de terceiros (GSON e Glide)
    E aí, gostou do plano? Agora é hora de colocar a mão na massa 🚀
    `,
  },
  {
    category: CareersCategories.DEVOPS,
    text: `DevOps é uma cultura de integração das equipes de desenvolvimento, de operações e de apoio envolvidas na produção de software. Pessoas dessa área são responsáveis por gerir sistemas e automatizar processos. Veja como você pode iniciar sua jornada nessa área:
    O primeiro passo é escolher uma linguagem: Go, Python, Ruby, Node.js, Rust ou C++. Escolha a que tiver mais afinidade, afinal o importante aqui é ganhar algum conhecimento sobre programação para que você inicie suas automações. Se não tiver preferência, vá com Go.
    Leia sobre sistemas operacionais, gerenciamento de processos, threads, I/O Management, comunicação entre processos e sistemas de arquivos. Também neste assunto, estude sobre como gerenciar servidores em sistemas operacionais como o Ubuntu. Aprenda sobre bash scripting, monitoramento de processos, comandos básicos de shell e sobre como cada um desses conceitos se diferenciam a depender do sistema operacional. 
    Pesquise também sobre protocolos de comunicação da web atuais, como HTTP, HTTPS, FTP, dentre outros. Entender como configurar um servidor cache, servidor proxy reverso e forward proxy, balanceador de carga ou um firewall será importante para manter seus sistemas seguros e bem formulados. Além disso, estude sobre web servers como Nigix ou Istio.
    Em seguida, busque pelo conceito de infraestrutura como código (Infrastructure as Code), o que são containers e como usar o Docker, gerenciamento de configuração (utilizando Ansible), o que é orquestração de containers com Kubernetes e provisionamento. Ah, dê uma olhada em como monitorar sua infraestrutura e suas aplicações também!
    Por fim, analise quais são os provedores de cloud mais adequados para o seu projeto e o que são cloud design patterns. 
    E aí, gostou do plano? Agora é hora de colocar a mão na massa 🚀
    `,
  },
  {
    category: CareersCategories.UIUX,
    text: '',
  },
];

export default data;
