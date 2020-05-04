import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';

const Style = createGlobalStyle`
  body {
      background-color: #f9f9f9;
      color: #000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.5s;
  }
`;

const ApplicationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const App = () => (
  <ApplicationWrapper>
    <Style />
    <Header />
    <Timeline />
    <Footer />
  </ApplicationWrapper>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
