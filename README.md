## How to setup

Clone this repo or downloads its zip file.

Run `yarn install` (recommended) or `npm install`.

To run scripts you can use either `yarn` or `npm` they both do same thing when running scrips.

## How to preview

Run `npm run start:server` in one console.

Run `npm run build` in another console.

## How to develop

Run `npm run start:server` in one console.

Run `npm start` in another console - this will build, serve built files, run linting and tests on watch. It
will also provide live reloading with HMR.

Browser will open a new tab with project running if it doesn't
go to `localhost:3000`.

To run test only `npm run test` or `npm run test:watch` or `npm run test:coverage`.

To run linting only `npm run lint` or `npm run lint:watch`.

To visualize projects dependencies `npm run analyze-bundle`

## Project structure

The structure is based on ideas by [Jack Hsu](http://jaysoo.ca/2016/02/28/organizing-redux-application/). In a nutshell:

The idea is that all logic which belongs to some feature should be in one place, that is: components, state,
business logic, styles, tests and so on. So as the project grows in size it's easy to navigate and it also enforces
good separation of concerns. It's also easier to refactor and remove what's not needed as the project grows.

```text
├─ src
   ├── common // this is where components, services, helpers etc. that are global to project go
   │   └── ...
   ├── main // there modules are joined into main blocks of what forms application
   │   ├── components
   │   │   └── ...
   │   ├── reducers
   │   │   └── index.js
   │   ├── sagas
   │   │   └── index.js
   │   ├── store
   │   │   └── configureStore.js
   │   └── styles
   │       ├── main.scss
   │       └── ...
   ├── modules // each feature is implemented as a module
   │   └── alphaCalculator
   │       ├── index.js // exposes public api of a module
   │       ├── actions.js
   │       ├── business.js
   │       ├── components
   │       │   └── index.js // exports all components
   │       ├── constants.js
   │       ├── containers
   │       │   └── index.js // exports all container
   │       ├── reducer.js
   │       ├── sagas.js
   │       ├── selectors.js
   │       ├── styles.scss
   │       └── __tests__
   │           └── ...
   ├── index.ejs
   └── index.js // this is where everything is finally initialized from main and common

```


## Possible improvements

 - Add routing.
 - Add `reselect` for data computation and caching.
 - Use `immutable.js` for state management.
 - Consider server side rendering.
 - Consider `Flow` or `TypeScript`.
 - Evaluate if it would be more beneficial to use `redux-observable` (RxJs) for async flow management 
 instead of sagas.
 - Describe in more detail how to manage project structure, also add guidelines for testing and styling.
  