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
    value: `Em linguagem C usamos o operador = para fazer uma atribuição.
      Exemplo:
      X = 10;
      Este comando atribui o valor 10 para a variável X.`,
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
];
export default data;
