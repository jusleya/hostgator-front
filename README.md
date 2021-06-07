## Solution
This project is related to the technical test of selection process for the Hostgator company's front-end. The challenge was to implement a client-side application, which makes an API query to obtain the prices and names of certain plans.

To implement the project were used: ReactJs, Redux, Styled-components, Redux-saga, Redux-sauce, Duck Pattern, JavaScript, HTML and CSS. NPM and YARN were employed to run and install the necessary libraries.

The project consists of nine folders:
- assets, the images and fonts used;
- components, the components used are divided into 3 folders: contexts (components found on pages), form (components for forms) and structure (components for the structure of the site);
- constants, the constants that were declared;
- lib and providers, settings applied for project execution;
- locales, import JSON with the main texts;
- pages, codes for screens;
- services, API connection configuration;
- store, requisition codes;
- styles, global styles and system theme.

## Organization
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

## Execution

``` bash
# Install dependencies
yarn

# Execution [http://localhost:3000](http://localhost:3000)
yarn start

```

## Libraries
- ReactJs;
- Redux;
- redux-saga;
- reduxsauce;
- react-router-dom;
- PrpTypes;
- Styled-components;
- Axios;
