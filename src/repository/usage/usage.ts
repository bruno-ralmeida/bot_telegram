import { DataFormat } from '../../helpers';

const data: DataFormat[] = [
  {
    key: `algoritmo`,
    value: `
    A estrutra de um algoritmo é:
    \`\`\`javascript
    Inicio
      <declarações de variáveis>
      <comandos>
    Fim

    Inicio
    inteiro : x , y , soma ;
    leia( x , y ) ;
    soma <− x + y ;
    escreva( "A soma entre " , x , " e " , y , " ´e " , soma );
    Fim
    \`\`\`
    `,
  },
  {
    key: `variável Variação`,
    value: `Em portugol para se atribuir um valor a uma variável é utilizado "<-". Para declarar variáveis podemos seguir alguns exemplos:
    \`\`\`
    variavel [tipo] [nome] <- [expressão]
    variavel [tipo] [nome] <- [valor]
    [nome] <- [expressão]
    [tipo] [nome] <- [expressão]
    [tipo] [nome] <-[valor]

    inteiro : idade ;
    real : nota1 , nota2 , media;
    caracter : nome_aluno ;
    logico : maior ;
    \`\`\`  
    `,
  },
  {
    key: `if se`,
    value: `O comando se (if) permite que uma parte do programa seja executada apenas quando uma condição for verdadeira. A sintaxe do comando if é a seguinte:
    \`\`\`javascript
    se condição_do_se:  //Expressão booleana
    //bloco executado se a condição for verdadeira
      comando_1
      comando_2
      ...
      comando_m       // último comando do bloco
    comando_após_se
      \`\`\`
      `,
  },
  {
    key: `if-else`,
    value: `Em várias ocasiões é necessário executar blocos de forma alternativa.Nesses casos, podemos utilizar o comando if-else, cuja sintaxe é a seguinte:
    \`\`\`javascript
    if condição:
      // bloco contendo comandos a serem executados
      dentro_do_if_1
      dentro_do_if_2
      ...
      dentro_do_if_m
    else:
      dentro_do_else_1
      dentro_do_else_2
      ...
      dentro_do_else_n
    comando_apos_if
      \`\`\``,
  },
  {
    key: `for`,
    value: `O laço for é uma estrutura de repetição muito utilizada.
      É muito útil quando se sabe de antemão quantas vezes a repetição deverá ser executada.
      Este laço utiliza uma variável para controlar a contagem do loop, bem como seu incremento.
      Trata-se de um comando bem enxuto, já que própria estrutura faz a inicialização, incremento e encerramento do laço.
      Sintaxe:
      \`\`\`javascript
      for(valor_inicial; condição_final; valor_incremento)
       {
       instruções;
       }
       \`\`\``,
  },
  {
    key: `While`,
    value: `O exemplo abaixo mostra o uso do comando de repetição while:
    \`\`\`javascript
    int contador = 0;

    while( contador < 5 )
    {
      printf( "contador = %d", contador);
      contador += 1;
    }

    printf("ACABOU !!!!");
Saída:

    contador = 0
    contador = 1
    contador = 2
    contador = 3
    contador = 4
    ACABOU !!!!
    \`\`\`
    `,
  },
  {
    key: `Recursividade`,
    value: `O exemplo mais comum:
    \`\`\`javascript
    int fat(int n){
    if(n == 0) return 1;
    return n*fat(n-1);
    }
    Versão sem recursão:
    int fat(int n){
    int i = 0; int f = 1;
    for(i=1; i <=n; i++) f *= i;
    return f;
    }
    \`\`\`
    `,
  },
  {
    key: `Commitar commit`,
    value: `Atualizar o código do repositório com novas alterações. Seria semelhante a "salvar" o código do programador, fazendo uma espécie de checkpoint.`,
  },
  {
    key: `push`,
    value: `Atualizar o código do repositório com novas alterações. Seria semelhante a "salvar" o código do programador, fazendo uma espécie de checkpoint.`,
  },
  {
    key: `pull`,
    value: `Fazer download das alterações em determinada branch (ver significado) num repositório remoto em seu repositório local.`,
  },
  {
    key: `Debugar`,
    value: `Procurar por erros no código, analisando entradas e saídas.`,
  },
  {
    key: `deploy`,
    value: `É quando um sistema foi disponibilizado para uso, seja para testes ou produção.`,
  },
];
export default data;
