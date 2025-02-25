# Walnut Hill Farm Website

## Installing and Running

`whf-site` is a React application that is deployed to ADD WEBSITE URL.

### Prerequisites

- [Node.js](https://nodejs.org/en) (using version 20.10)
- [Yarn](https://yarnpkg.com/)

### Run Development Mode

```
yarn install
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Run Production Mode

```
yarn build
yarn preview
```

Runs the app in the development mode.\
Open [http://localhost:4173](http://localhost:5173) to view it in your browser.

## Deployment

Merge the lastest `dev` branch into the `prod` branch and netlify will take care of the rest.

Currently deploys on [netlify](https://lucky-fairy-4801fb.netlify.app/)

## Formatters

NGD Frontend uses [ESLint](https://eslint.org/) (a linter for code quality rules) and [Prettier](https://prettier.io/) (a code formatter that styles all the code in the same way). To run:

`yarn lint`: Runs ESLint and will display all errors and warnings in the console

`yarn lint:fix`: Runs ESLint and fixes any problems that can be automatically fixed

`yarn format`: Runs Prettier and will display all errors and warnings in the console

`yarn format:fix`: Runs Prettier and automatically formats all the files

There is a pre-commit hook that runs `yarn lint` and `yarn format`, that will prevent commits that don't match the coding standards of the project. If using VSCode, there are several extentions to automatically format on save such as [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
