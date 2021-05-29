## Projeto de extesão USJT 2021-01 🤖📕

Neste projeto, o objetivo é desenvolver um Bot Telegram capaz de responder dúvidas básicas de programação. Os alunos terão uma aula de introdução ao desenvolvimento de Bots. O Bot desenvolvido irá responder dúvidas simples, em função de uma base de dados estática. Os alunos devem pesquisar e utilizar um mecanismo mais sofisticado como o [IBM Watson Assistant](https://developer.ibm.com/articles/introduction-watson-assistant/).

> ### Integrantes 💼

##### 1. Bruno Rocha de Almeida 👨🏾‍💻🧛🏾‍♂️

- 🎓 81819312
- ✉️ brunoalmeida.9312@aluno.saojudas.br

##### 2. Camila Monteiro Appolinário 👩🏻‍💻🤖

- 🎓 818233069
- ✉️ camilaappolinario.3069@aluno.saojudas.br

##### 3. Camilla Regina Freitas Silva 👩🏻‍💻🦹🏻‍♀️

- 🎓 819119143
- ✉️ camillasilva.9143@aluno.saojudas.br

##### 4. Gabriel Cardoso da Silva 👨🏻‍💻👨🏻‍💼

- 🎓 818136132
- ✉️ gabrielsilva.6132@aluno.saojudas.br

##### 5. Jan Nicolas Tenorio Vieira Lima 👨🏻‍💻🧞‍♂️

- 🎓 819142318
- ✉️ janlima.2318@aluno.saojudas.br

##### 6. Leticia Silva Lopes 👩🏻‍💻❄️

- 🎓 821132168
- ✉️ leticialopes.8263@aluno.saojudas.br

##### 7. Murillo Bilches Navarro 👨🏻‍💻🧙‍♂️

- 🎓 818143772
- ✉️ murillonavarro.3772@aluno.saojudas.br

##### 8. Wagner Alves de Melo 👨🏻‍💻🧛🏻‍♂️

- 🎓 818137692
- ✉️ wagnermelo.7692@aluno.saojudas.br

> #### Apresentação 📽️

<img src="public/../public/images/sophia.png" width="350px" >

[Vídeo Sophia]()

> #### Tecnologias utilizadas 💡

- [Node.Js v14.x](https://nodejs.org/en/download/)
- [Nest.js 7.6.0](https://nestjs.com/)
- [IBM - Watson Assitant](https://www.ibm.com/br-pt/cloud/watson-assistant)
- [IBM - Natural Language Undersanding](https://www.ibm.com/br-pt/cloud/watson-natural-language-understanding)

> #### Funções
>
> A `Sophia` possuí funções como

- `Conversar comigo` Onde você pode questionar sobre dúvidas referentes a programação (Conceitos/Uso).
- `Carreira` - Mostramos um guia de sugestão sobre o que estudar de acordo com a categoria selecionada.
- `Links úteis` - Nessa sessão compartilhamos links que podem te ajudar no decorrer da carreira.
- `Game` - Um jogo de pergunta e resposta onde utilizamos o [`@quizbot`](https://telegram.org/tour/quizbot), atualmente em 5 categorias (Back-end, Front-end, DevOps, Mobile, UI/UX).

> #### Inciando projeto.

É necessário criar um bot utilizado a ferramenta `@BotFather` do telegram, além disso criar uma conta no `IBM Cloud` para utilizar ferramentas do `Watson` e `Natural Language Undersanding`.
Para iniciar o projeto é necessário incluir as configurações de ambiente em um arquivo `.env`.

```
ASSISTANT_VERSION=
ASSISTANT_ID=
ASSISTANT_API_KEY=
ASSISTANT_URL=

NLU_VERSION=
NLU_API_KEY=x
NLU_URL=

TELEGRAM_TOKEN=
```

Feito a configuração de ambiente é necessário rodar o camando:

```
npm install
```

ou

```
yarn
```

Após instalar as dependencias basta subir o projeto com:

```
npm start
```

ou

```
yarn start
```
