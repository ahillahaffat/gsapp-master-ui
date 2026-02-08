import React from 'react';
import ReactDOM from 'react-dom/client';
import { Studio } from 'sanity';
import config from '../sanity.config';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle: any = createGlobalStyle`
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Studio config={config} />
  </React.StrictMode>
);
