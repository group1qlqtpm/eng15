# Require

- nodejs

# Plugin support VS Code (Recommendation) for development

- Auto Close Tag
- Auto Rename Tag
- Bracket Pair Colorizer
- Code Spell Checker
- Color Highlight
- GitLens
- Highlight Matching Tag
- indent-rainbow
- Material Icon Theme
- npm Intellisense
- One Dark Pro
- Path Intellisense
- Prettier
- Reactjs code snippets
- Turbo Console Log
- vscode-styled-components
  Please config auto format on save by: ctrl + / => type Format On Save => Enable

# Development and hints

- npm install
- npm start

Instead of using css file, we use style-component for friendly purpose with react js coding style.
Please use absolute path when import package or file on different folder, i configured by order:
. node*module/* --- example: import React from 'react';
. src/\_ --- example: import routes from 'config/routes';

# Install new dependencies

npm install --save {new package}

# App structure

- src/index.js
  The main file
  Config redux and router middleware here
- components
  Custom html tag and re-use component like header, footer, etc.
- config
  Config routes, api, role, ...
- containers
  Main app here
  Each folder of containers representing for a route or a page
  Remember to add Loadable.js file for code-splitting purpose
- my-redux
  Init redux by database model or business model
  Please remember to combine the reducer of this model to storeBuilder.js
- utils
  All of your utilities please code in this folder
  For example: api calling, common input validation, ...

# Tech stack

- Antd - https://ant.design/
- React - https://reactjs.org/
- Redux Thunk - https://github.com/reduxjs/redux-thunk
- Styled-components - https://www.styled-components.com/

# Guide

Step 1: Determine routes of a page (config/routes.js)
Step 2: Determine routes api and redux (config/apiUrl.js, my-redux/)
Step 3: Create a container, routing from containers/app to the Loadable of this container, then code UI
Step 4: Connect redux to this containers and call action to get DATA from API and do business logic
