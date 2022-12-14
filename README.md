# Documentação

Esta documentação tem como objetivo explicar as partes que compõem o projeto e como realizar atividades básicas como criação de páginas, reducers, etc.

## Dependências

1. **typescript**: Adiciona tipagem ao JavaScript;
1. **next**: Framework baseado em rotas;
1. **next-pwa**: Facilita a implementação de PWA em um projeto que usa NextJS;
1. **next-redux-wrapper**: Conexão do Redux com o SSR do NextJS;
1. **axios**: Facilita a criação de requisições HTTP;
1. **husky**: Melhora e facilita a customização de Git Hooks;
1. **redux**: Permite criação de redux stores e inserção de middlewares;
1. **react-redux**: Conexão do Redux com React. Possibilita uso de hooks;
1. **redux-actions**: Criação simplificada de Redux Actions e Seções;
1. **redux-devtools-extension**: Permite o uso da Redux Devtools no Google Chrome para debugar a Redux Store em tempo real;
1. **redux-persist**: Permite a persistência de dados da Redux Store em cookies no navegador / PWA;
1. **redux-saga**: Permite a utilização de sagas para encadear a execução assíncrona de Redux Actions;
1. **styled-components**: Biblioteca de criação de componentes puramente visuais com padrão css-in-js;
1. **react-icons**: Biblioteca de ícones de diversas fontes.

## URL e Roteamento

Este projeto utiliza NextJS, que tem como objetivo facilitar os roteamentos do projeto.

De maneira geral a URL de qualquer local do projeto é composta da seguinte maneira:
`https://URL_DO_SITE.COM/nome_modulo/caminho_pagina`

### Criar novas páginas
Para criar novas páginas, basta criar um arquivo .ts com o nome da página (que irá ficar na url) dentro da pasta `src/pages`. 

Para mais detalhes: [https://nextjs.org/docs/routing/introduction](https://nextjs.org/docs/routing/introduction)

## Módulo (Modulo)

Módulos podem ser entendidos como o projeto em si, tais como "**Financeiro**", "**Faixa de Domínio**", "**Obras do Ceará**" etc.

Cada projeto foi inicialmente pensado para conter um módulo e suas devidas necessidades.

### Módulos Existentes

Atualmente os seguintes módulos estão funcionando a base do NextJS:
> 1. **Ponto**: Responsável por registrar os horários de entrada e saída dos funcionários.

<details>
<summary>Como modificar o Módulo</summary>

1. Acesse o arquivo `src/redux/Modulo/reducer.ts`;
1. Modifique as propriedades de initialState:
   - `moduleName`: Nome do módulo (do projeto em si);
   - `moduleIcon`: Ícone que representará o módulo; 
   - `sections`: Lista de Seções disponíveis (mais detalhes abaixo).
1. Acesse o arquivo `.env.development` e `.env.production`;
1. Modifique o valor da variável `NEXT_PUBLIC_SCOPE` para o nome do módulo; 
1. Acesse o arquivo `package.json`;
1. Modifique o valor da variável `name` para o nome do módulo.
</details>
<details>
<summary>Como configurar o PWA</summary>

1. Acesse o arquivo `public/manifest.json` e modifique as seguintes variáveis:
1. Utilizando o módulo de Financeiro como exemplo:
   - `start_url`: Valor definido na variável de escopo (ex.: "**/financeiro**"); 
   - `src`: Caminho para os ícones dentro da pasta `public` com o escopo como prefixo (ex.: "**/financeiro/icons/icon-192x192.png**");
   - `name`: Nome completo da aplicação (do projeto em si, ex.: "**Módulo de Gestão Financeira da SOP-CE**");;
   - `short_name`: Nome resumido da aplicação (ex.: "**Financeiro - SOP**");
   - `description`: Descrição da aplicação (ex.: "**Aplicação que gerencia e manipula dados financeiros relacionados à SOP.**").
</details>

## Seções (Sections)

Seções dividem as Páginas de acordo com o tipo de dados que mostram.

### Como criar uma Seção

1. Acesse a pasta `src/redux` e crie uma pasta com o nome da Seção;
1. Dentro dessa pasta, crie o arquivo `section.ts`;
1. Nesse arquivo crie uma variável com o nome da Seção com as seguintes propriedades:
   - `name`: Nome da seção;
   - `sectionIcon`: Ícone que representará a seção; 
   - `pages`: Lista de Páginas disponíveis (mais detalhes abaixo).
1. Adicione a interface **Section** encontrada  em `src/redux/Modulo/interfaces.ts` na variável criada.

Na mesma pasta de criação (`src/redux/SectionXXXX`) deverão ficar os arquivos de reducer, actions, saga e interfaces.

### Páginas (Pages)
Cada Seção pode ter N páginas, cada página segue a seguinte estrutura:
   - `name`: Label do item que aparecerá no menu;
   - `link`: Link do item que aparecerá no menu (**desconsiderar o escopo**);
   - `icon`: Ícone do item que aparecerá no menu;
   - `onMenu`: Booleano para indicar que o item estará visível  no menu.

Cada Página deve ser criada diretamente dentro da lista `pages` na sua Seção.
