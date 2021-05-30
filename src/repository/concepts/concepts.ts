import { DataFormat } from '../../helpers';

const data: DataFormat[] = [
  {
    key: `Algoritmo`,
    value: `Em matemática e ciência da computação, um algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema. Segundo Dasgupta, Papadimitriou e Vazirani, "algoritmos são procedimentos precisos, não ambíguos, mecânicos, eficientes e corretos`,
  },
  {
    key: `Lógica de Programação`,
    value: `Programação lógica é um paradigma de programação que faz uso da lógica matemática. John McCarthy [1958] foi o primeiro a publicar uma proposta de uso da lógica matemática para programação`,
  },
  {
    key: `API - Interface de programação de aplicações`,
    value: `As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas. Por exemplo, apps desenvolvidos para celulares Android e iPhone (iOS) são criados a partir de padrões definidos e disponibilizados pelas APIs de cada sistema operacional.`,
  },
  {
    key: `Variável`,
    value: `Na programação, uma variável é um objeto capaz de reter e representar um valor ou expressão. Enquanto as variáveis só "existem" em tempo de execução, elas são associadas a "nomes", chamados identificadores, durante o tempo de desenvolvimento.`,
  },
  {
    key: `Estrutura de seleção ( if / se )`,
    value: `Estrutura de seleção é, na ciência da computação, uma estrutura de desvio do fluxo de controle presente em linguagens de programação que realiza diferentes computações ou ações dependendo se a seleção é verdadeira ou falsa, em que a expressão é processada e transformada em um valor booleano.`,
  },
  {
    key: `Estrutura de repetição ( loop / for / while / laço )`,
    value: `Na maioria das linguagens de programação de computadores, um loop while é uma instrução de fluxo de controle que permite que o código seja executado repetidamente com base em uma determinada condição booleana. O loop while pode ser considerado uma declaração if de repetição.`,
  },
  {
    key: `Array ( Vetor / Arranjo )`,
    value: `Em programação de computadores, um arranjo (array) é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave.`,
  },
  {
    key: `Código Fonte`,
    value: `Criado em um editor de textos, contendo os comandos da linguagem de programação. Serve como entrada para o compilador.`,
  },
  {
    key: `Código Objeto`,
    value: `Criado pela conversão do código-fonte em linguagem de máquina. É gerado pelo compilador. Só é criado quando não há erros no código-fonte.`,
  },
  {
    key: `Operadores aritméticos`,
    value: `São aqueles que estudamos na escola, aquelas funções básicas de somar, subtrair, multiplicar, dividir, por exemplo.`,
  },
  {
    key: `Operadores de relação`,
    value: `Operadores relacionais são utilizados para comparar valores, o resultado de uma expressão relacional é um valor booleano (verdadeiro ou falso). Os operadores relacionais são: igual, diferente, maior, menor, maior ou igual, menor ou igual.`,
  },
  {
    key: `Operadores Lógicos`,
    value: `Os operadores lógicos são usados para representar situações lógicas que não podem ser representadas por operadores aritméticos. Também são chamados conectivos lógicos por unirem duas expressões simples numa composta. Podem ser operadores binários, que operam em duas sentenças ou expressões, ou unário que opera numa sentença só.`,
  },
  {
    key: `Int`,
    value: `Variável número do tipo inteiro, positivo ou negativo.`,
  },
  {
    key: `Float`,
    value: `Variável numérica do tipo decimal.`,
  },
  {
    key: `Double`,
    value: `Variável numérica do tipo decimal de precisão dupla.`,
  },
  {
    key: `Char`,
    value: `Variável que representa um caractere do tipo texto.`,
  },
  {
    key: `String`,
    value: `Variável que representa um conjunto de caracteres do tipo texto.`,
  },
  {
    key: `Boolean`,
    value: `Variável booleana, ou seja, que pode representar somente dois valores, verdadeiro ou falso.`,
  },
  {
    key: `Constantes`,
    value: `Ao contrário das variáveis, que podemos alterar o valor conforme a necessidade do algoritmo a ser desenvolvido, as constantes precisam ser inicializadas e não podem ter o seu valor alterado.`,
  },
  {
    key: `Matriz`,
    value: `Uma matriz é uma coleção de variáveis de mesmo tipo, acessíveis com um único nome e armazenados contiguamente na memória.`,
  },
  {
    key: `Back-end`,
    value: `Programador que trabalha com a lógica da aplicação, armazenamento e segurança de todos os dados gerados.`,
  },
  {
    key: `Backup`,
    value: `Cópia de dados de um dispositivo de armazenamento a outro para evitar perda dos dados originais.`,
  },
  {
    key: `Bit`,
    value: `É a menor unidade de medida de dados que pode ser armazenada ou transmitida no universo computacional. Um bit tem um único valor, zero ou um, com valor de verdadeiro ou de falso.`,
  },
  {
    key: `Branch`,
    value: `Ramificações de um repositório (ver significado). Cada branch tem a mesma base, mas podem ter alterações diferentes entre si. É comum que o objetivo final em um projeto seja que todas as branches sejam unidas a uma branch principal.`,
  },
  {
    key: `Bug`,
    value: `Erro no código que pode estar causando um comportamento indesejado na aplicação.`,
  },
  {
    key: `Cache`,
    value: `É uma memória pequena, porém muito rápida. Um espaço de armazenamento dedicado a guardar informações que são utilizadas com frequência. É comum que alguns sites utilizem os navegadores para guardar informações em cache.`,
  },
  {
    key: `Cluster`,
    value: `Arquitetura de sistema capaz combinar vários computadores para trabalharem em conjunto para que, em muitos aspectos, eles possam ser vistos como um único sistema.`,
  },
  {
    key: `Cookies`,
    value: `Pequenos arquivos enviados por um site para o navegador do usuário, que ficam armazenados no computador. Eles são feitos para guardar dados específicos de um cliente ou website, para serem acessados futuramente pelo servidor web de maneira mais rápida.`,
  },
  {
    key: `Framework`,
    value: `Se trata de uma estrutura base, uma espécie de plataforma de desenvolvimento, que contém ferramentas, guias, sistemas e componentes que agilizem o processo de desenvolvimento de soluções, auxiliando os especialistas em seus trabalhos.`,
  },
  {
    key: `Git`,
    value: `Sistema de controle de versão de arquivos. Nele é possível que diversas pessoas contribuam simultaneamente editando e criando novos arquivos sem o risco que as alterações sejam sobrescritas.`,
  },
  {
    key: `Hardware`,
    value: `Refere-se a objetos nos quais você pode realmente tocar, como discos, unidades de disco, telas, teclados, impressoras, placas e chips. Hardware é todo componente físico, interno ou externo do seu computador ou outro dispositivo, que determina do que um dispositivo é capaz e como você pode usá-lo. Embora dependa de um software para funcionar (e vice-versa), o hardware é um elemento a parte e igualmente importante.`,
  },
  {
    key: `HTTPS / HTTP ( Hyper Text Transfer Protocol )`,
    value: `É um protocolo, ou seja, uma determinada regra que permite ao seu computador trocar informações com um servidor que abriga um site. Porém, o HTTP não é segura e se torna propícias a pessoas mal intencionadas a interceptar os dados transmitidos. Por isso, existe o HTTPS (Hyper Text Transfer Protocol Secure), que insere uma camada de proteção na transmissão de dados entre seu computador e o servidor. Essa camada adicional permite que os dados sejam transmitidos por meio de uma conexão criptografada, aumentando significativamente a segurança dos dados.`,
  },
  {
    key: `Indentação`,
    value: `Uma espécie de “organização do código”, que facilita a leitura dele. Na indentação, a digitação dos códigos do programa ficam afastados por espaço da margem e dispostos hierarquicamente.`,
  },
  {
    key: `Intranet`,
    value: `É uma rede interna de computadores semelhante à Internet, porém é de uso exclusivo de uma determinada organização, ou seja, somente os computadores da empresa podem acessá-la.`,
  },
  {
    key: `IP ( Internet Protocol / Protocolo de Internet)`,
    value: `Se trata de um endereço único que diferencia cada dispositivo conectado à internet. Esse protocolo funciona de forma semelhante ao CPF de uma pessoa física, permitindo que conexões e dispositivos sejam identificados a partir de uma sequência numérica. Cada aparelho ou dispositivo possui um IP fixo, enquanto a conexão com a internet gera IPs dinâmicos, também conhecido como IP externo.`,
  },
  {
    key: `LAN ( Local Area Network / Rede Local)`,
    value: `É uma rede local que tem por finalidade a troca de dados dentro um mesmo espaço físico. Se trata de uma conexão de dispositivos dentro de uma área específica. O limitador da rede LAN é uma faixa de IP restrita à mesma, com uma máscara de rede comum.`,
  },
  {
    key: `Lib ( library / Biblioteca )`,
    value: `É um conjunto de funcionalidades ou programas que podem ser utilizados no desenvolvimento de projetos maiores.`,
  },
  {
    key: `Linguagem de alto nível`,
    value: `É a linguagem de programação que tem um nível de abstração elevado, se aproximando à linguagem humana.`,
  },
  {
    key: `Loop`,
    value: ` Repetição de um trecho de código, geralmente associado a um erro na execução do programa.`,
  },
  {
    key: `POO ( Programação Orientada a Objetos )`,
    value: `É um paradigma de Programação que  tenta aproximar a vida real da programação, tornando mais intuitivo e fácil de entender, além de poder repartir ainda mais o código, dividindo-o cada vez melhor.`,
  },
  {
    key: `Pull Request`,
    value: `Solicitação para que alguma alteração feita em uma branch (ver significado) específica em dado repositório, seja merjada (ver significado de Merjar) numa outra branch. Essa solicitação usualmente é avaliada através de Code Review e pode precisar sofrer alterações antes que o merge ocorra. Também é conhecido como Merge Request.`,
  },
  {
    key: `Query`,
    value: `Processo de extração de dados de um banco de dados. Em outras palavras, se trata de um pedido de uma informação ou de um dado para um banco de dados e sua apresentação em uma forma adequada ao uso. A linguagem padrão para gerenciamento de bancos de dados é a SQL (Structured Query Language). Atenção: SQL é diferente do MySQL! Enquanto o primeiro é a linguagem da query, o segundo é o software que usa essa mesma linguagem.`,
  },
  {
    key: `Refatorar`,
    value: `Reescrever uma parte do código de forma mais simples ou elegante.`,
  },
  {
    key: `Repositório`,
    value: `Local de armazenamento de pacotes ou projetos de software. Geralmente são controlados por algum sistema de versionamento, como o Git. Podem ser locais ou remotos.`,
  },
  {
    key: `Repositórios locais`,
    value: `São os repositórios armazenados no computador da pessoa que o está utilizando.`,
  },
  {
    key: `Rollback`,
    value: `Voltar atrás em relação a um código liberado anteriormente.`,
  },
  {
    key: `Software`,
    value: `É uma coleção de dados ou instruções que informam a um sistema como ele deve trabalhar. Nada mais é do que um programa que você acessa no celular, tablet, computador ou qualquer outro dispositivo eletrônico. Pode ir desde sistemas operacionais, como Windows, macOS, iOS e Android aos apps que você usa todos os dias.`,
  },
  {
    key: `URL`,
    value: `Refere-se ao endereço de um recurso na rede como a internet. Entenda a URL como o endereço que você compartilha com os outros para que cheguem até o seu site ou blog.`,
  },
  {
    key: `Versionar`,
    value: `Criar uma nova versão do software. O processo de versionamento ajuda a documentar inclusões, alterações e exclusões de funcionalidades e registra quando cada função foi ao ar, sendo possível resgatar versões anteriores em caso de erros no processo de publicação. Geralmente utiliza-se 3 números. Exemplo: 3.2.41.`,
  },
  {
    key: `VPN`,
    value: `VPN é uma rede de comunicação privada construída sobre a infraestrutura de uma rede pública. Essa é uma forma de conectar dois computadores através de uma rede pública, como a Internet. Mas a VPN fornece autenticação e confidencialidade na transmissão de dados, além de protocolos criptografados, o que as torna mais seguras e confiáveis.`,
  },
  {
    key: `Web`,
    value: `Sistema de informações ligadas através de texto, vídeo, som e outras animações digitais que permitem ao usuário acessar conteúdos através da internet.`,
  },
  {
    key: `Sintaxe`,
    value: `Uma linguagem de programação normalmente tem uma sintaxe rígida, que é o conjunto de regras que determina quais combinações de símbolos e palavras-chaves podem ser utilizadas.`,
  },
  {
    key: `Semântica`,
    value: `Além da sintaxe, uma linguagem de programação deve definir uma semântica inambígua, isso é, a linguagem de programação deve definir o que significa cada uma das frases permitidas.`,
  },
  {
    key: `Compilação`,
    value: `Uma vez que temos um algoritmo escrito em uma linguagem de programação, ainda precisamos de um processo chamado de compilação, que é responsável por converter nosso programa de uma linguagem de programação de alto nível para a linguagem de montagem.`,
  },
  {
    key: `Função`,
    value: `A ideia básica de uma função, implementada em alguma linguagem de programação, é encapsular um código que poderá ser invocado/chamado por qualquer outro trecho do programa. Seu significado e uso são muito parecidos com o de funções matemáticas, ou seja, existe um nome, uma definição e posterior invocação à função.`,
  },
  {
    key: `Escopo`,
    value: `Em Ciência da Computação escopo é um contexto delimitante aos quais valores e expressões estão associados. Linguagens de programação têm diversos tipos de escopos. O tipo de escopo vai determinar quais tipos de entidades este pode conter e como estas são afetadas, em outras palavras, a sua semântica.`,
  },
  {
    key: `Recursividade`,
    value: `Em ciência da computação, a recursividade é a definição de uma sub-rotina (função ou método) que pode invocar a si mesma.`,
  },
  {
    key: `Polimorfismo`,
    value: `Definimos Polimorfismo como um princípio a partir do qual as classes derivadas de uma única classe base são capazes de invocar os métodos que, embora apresentem a mesma assinatura, comportam-se de maneira diferente para cada uma das classes derivadas.`,
  },
  {
    key: `Herança`,
    value: `A Herança possibilita que as classes compartilhem seus atributos, métodos e outros membros da classe entre si. Para a ligação entre as classes, a herança adota um relacionamento esquematizado hierarquicamente.`,
  },
  {
    key: `Encapsulamento`,
    value: `O encapsulamento é um dos pilares da orientação a objetos. Por meio dele, é possível simplificar bastante a programação, bem como proteger informações sigilosas ou sensíveis. Dominar esse conceito é fundamental, uma vez que com ele é possível deixar o código mais legível, funcional e reutilizável.`,
  },
  {
    key: `Estruturas de Decisão`,
    value: `As estruturas de decisão (também conhecidas como Estruturas Condicionais) exigem que o programador especifique uma ou mais condição a ser testada pelo programa, juntamente com uma instrução (ou conjunto) a ser executada se o resultado do teste for verdadeiro, e, opcionalmente, outra instrução ou conjunto de instruções caso o resultado do teste seja falso.`,
  },
  {
    key: `C# (C Sharp)`,
    value: `O C# é uma linguagem de programação muito popular, sendo uma excelente escolha devido a sua baixa curva de aprendizado e simplicidade (mas sem deixar de ser uma linguagem poderosa). Além disso, ela é a linguagem principal do .NET Framework, o framework para desenvolvimento da Microsoft.`,
  },
  {
    key: `JavaScript`,
    value: `JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. Você pode apostar que o JavaScript provavelmente está envolvido.`,
  },
  {
    key: `REST`,
    value: `REST significa Representational State Transfer. Em português, Transferência de Estado Representacional. Trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplicações se comuniquem.`,
  },
  {
    key: `HTML`,
    value: `Criada pelo britânico Tim Berners-Lee, o acrônimo HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto.  O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. Portanto, ele serve para dar significado e organizar as informações de uma página na web. Sem isso, o navegador não saberia exibir textos como elementos ou carregar imagens e outros conteúdos.`,
  },
  {
    key: `switch`,
    value: `É uma forma de reduzir a complexidade de vários if … else encadeados.

    É muito utilizado, principalmente para uso em estruturas de menu.
    
    O conteúdo de uma variável é comparado com um valor constante, e caso a comparação seja verdadeira, um determinado comando é executado.`,
  },
  {
    key: `While`,
    value: `Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. Com ele, a execução das instruções vai continuar até que uma condição seja verdadeira. A condição a ser analisada para a execução do laço de repetição deverá retornar um valor booleano.`,
  },
  {
    key: `For`,
    value: `A instrução for se caracteriza por obrigar o programador a definir, explicitamente em seu cabeçalho, a quantidade de vezes [ciclos] que será executado. A quantidade de ciclos é determinado pela quantidade de elementos contido na lista declarada junto com a instrução for. Dessa forma, será executado um ciclo para cada elemento isoladamente.`,
  },
  {
    key: `Foreach`,
    value: `O foreach é um recurso que possibilita executar um conjunto de comandos para cada elemento presente em uma coleção (Array, List, Stack, Queue e outras). Portanto, diferentemente do while e do for, não precisamos definir uma condição de parada. Isso é definido de forma implícita, pelo tamanho da coleção.`,
  },
  {
    key: `O que é linguagem de programação?`,
    value: `É por onde o hardware (máquina) e o programador se comunicam. 

    É uma linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas.
    
    A linguagem de programação permite que um programador crie programas a partir de um conjunto de ordens, ações consecutivas, dados e algoritmos.`,
  },
  {
    key: `O que é banco de dados?`,
    value: `O banco de dados é a organização e armazenagem de informações sobre um domínio específico. De forma mais simples, é o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura.`,
  },
  {
    key: `O que é DevOps?`,
    value: `Devops é um termo criado para descrever um conjunto de práticas para integração entre as equipes de desenvolvimento de softwares, operações (infraestrutura ou sysadmin) e de apoio envolvidas (como controle de qualidade) e a adoção de processos automatizados para produção rápida e segura de aplicações e serviços. O conceito propõe novos pensamentos sobre o trabalho para a valorização da diversidade de atividades e profissionais envolvidos e atitudes colaborativas. É um processo que torna possível o desenvolvimento ágil de aplicações em um modelo de gestão de infraestrutura definido sob regras rígidas e burocráticas.`,
  },
];

export default data;
