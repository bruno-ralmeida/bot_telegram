## Projeto de extesão USJT 2021-01 🤖📕

> #### Tecnologias utilizadas 🎨

- [Node.Js v14.x](https://nodejs.org/en/download/)
- [Nesjs 7.6.0](https://nestjs.com/)
- [IBM - Watson Assitant](https://www.ibm.com/br-pt/cloud/watson-assistant)
- [IBM - Natural Language Undersanding](https://www.ibm.com/br-pt/cloud/watson-natural-language-understanding)

> #### Funções
>
> A `Sophia` possuí funções como

- `Conversar comigo` Onde você pode questionar sobre dúvidas referentes a programação (Conceitos/Uso).
- `Carreira` - Mostramos um guia de sugestão sobre o que estudar.
- `Links úteis` - Nessa sessão compartilhamos links que podem te ajudar no decorrer da carreira.
- `Game` - Um jogo de pergunta e resposta, atualmente em 5 categorias (Back-end, Front-end, DevOps, Mobile, UI/UX).

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
