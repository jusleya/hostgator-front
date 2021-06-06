## Solução
Este projeto é referente ao teste técnico para vaga de Front-end da empresa Hostgator. Foi proposta a implementação de uma aplicação client-side, que faça uma consulta a API para obter os preços e nome de determinados planos.

Para implementação do projeto foi utilizado: ReactJs, Redux, Styled-components, Redux-saga, Redux-sauce, Duck Pattern, HTML e CSS. NPM e YARN foram empregados para execução e instalação de bibliotecas necessárias.

Existem três pastas principais no projeto:
- assets, encontram-se as imagens e fontes utilizadas;
- components, encontram-se os components utilizados divididos em 3 pastas: contexts (componentes encontrados nas pages), form (componentes destinados a formulários) e structure (componentes destinados a estrutura do site);
- constants, foram declaradas as principais constantes utilizadas;
- lib e providers, configurações aplicadas para execução do projeto;
- locales, destinada a importação de JSON com os principais textos;
- pages, códigos destinados as telas;
- services, configuração de conexão com a API;
- store, códigos de requisição;
- styles, estilos globais e tema do sistema.


## Organização
```
├── src
│   ├── assets
│   │   └── fonts
│   │   └── icons
│   │   └── images
│   ├── components
│   │   └── contexts
│   │   └── form
│   │   └── structure
│   ├── constants
│   ├── lib
│   │   └── core
│   ├── locales
│   │   └── core
│   │   └── pages
│   ├── pages
│   │   └── Home
│   ├── providers
│   ├── services
│   ├── store
│   │   └── plans
│   ├── styles
│   │   └── tokens

```

## Para Execução do Projeto

``` bash
# Instalar as dependências
yarn

# Execução [http://localhost:3000](http://localhost:3000)
yarn start

```

## Bibliotecas utilizadas
Esta aplicação utiliza:
- ReactJs (para construir a interface do app);
- react-router-dom (auxilia na construção das rotas);
- Bulma (framework utilizada para interface);
- Axios (para conexão com a API).
