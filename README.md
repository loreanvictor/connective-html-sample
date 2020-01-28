# connective-html-sample
A sample project for CONNECTIVE HTML. You can use this as a starter project for your CONNECTIVE HTML projects:

1. clone this project.
2. correct git origin and package name.
3. `npm i`
4. `npm start`
5. open browser on `localhost:3000`

## Folder Structure

The project is configured to compile and serve everything within `src/` folder, with the project entry file being `index.tsx`. 
All the bundles and assets will be served via `dist/` folder.
You can structure your code however you see fit within the `src/` folder.
You can reconfigure the source and distribution folders by editting `tsconfig.json` or `webpack.conf.ts`.

## Stack

- [Webpack](https://github.com/webpack/webpack) is used for bundling for development and production.
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) is used as development server.
- [Typescript](https://github.com/microsoft/TypeScript) is used as the main transpiler, both for the actual code and also for parsing webpack configurations.
