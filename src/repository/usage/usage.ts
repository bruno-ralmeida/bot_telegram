import { DataFormat } from '../../helpers';

const data: DataFormat[] = [
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
  {
    key: `variável`,
    value: `A Sintax de atribuição de uma variável em portugol é assim:
    variavel inteiro idade <- 18
    variavel real peso <- 23.14
    logico repetente
    texto nome <- "Antonio" , apelido <- "Sousa"
    caracter sexo`,
  },
  {
    key: `if`,
    value: `O comando if permite que uma parte do programa seja executada apenas quando uma condição for verdadeira. A sintaxe do comando ìf é a seguinte:
      if condição_do_if: 
          # bloco executado se a condição for verdadeira
         comando_1
          comando_2
         ...
          comando_m       # último comando do bloco
      comando_após_if`,
  },
  {
    key: `if-else`,
    value: `Em várias ocasiões é necessário executar blocos de forma alternativa. Nesses casos, podemos utilizar o comando if-else, cuja sintaxe é a seguinte:
      if condição:
          # bloco contendo comandos a serem executados
         dentro_do_if_1
         dentro_do_if_2
         ...
          dentro_do_if_m
         else:
          dentro_do_else_1
         dentro_do_else_2
         ...
          dentro_do_else_n
      comando_apos_if`,
  },
  {
    key: `for`,
    value: `O laço for é uma estrutura de repetição muito utilizada.
      É muito útil quando se sabe de antemão quantas vezes a repetição deverá ser executada.
      Este laço utiliza uma variável para controlar a contagem do loop, bem como seu incremento.
      Trata-se de um comando bem enxuto, já que própria estrutura faz a inicialização, incremento e encerramento do laço.
      Sintaxe:
      for(valor_inicial; condição_final; valor_incremento)
       {
       instruções;
       }`,
  },
  {
    key: `While`,
    value: `O exemplo abaixo mostra o uso do comando de repetição while:

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
    ACABOU !!!!`,
  },
  {
    key: `Recursividade`,
    value: `O exemplo mais comum:
    int fat(int n){
    if(n == 0) return 1;
    return n*fat(n-1);
    }
    Versão sem recursão:
    int fat(int n){
    int i = 0; int f = 1;
    for(i=1; i <=n; i++) f *= i;
    return f;
    }`,
  },
  {
    key: `switch`,
    value: `O exemplo mais comum:
    Escolha (Variável)
Inicio
   Caso (Valor1): 
      Instruções;
   
   Caso (Valor2): 
     Instruções;
   
   Caso (ValorN): 
     Instruções;
Fim;`,
  },
];
export default data;
