import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Form } from './components/form';
import { Filter } from './components/filter';
import { Dashboard } from './components/dashboard';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #515154;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #1D1D1F;
  }

  h2 {
    font-size: 24px;
    color: #1D1D1F;
  }

  button,
  a {
    font-family: inherit;
    color: inherit;
    font-size: 15px;
    color: #1D1D1F;
    font-weight: 600;
    background-color: none;
    text-decoration: none;
    border: none;
  }
`;

export const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 24px;
`;

export const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <Form />
      <Filter />
      <Dashboard />
    </AppStyled>
  );
};
