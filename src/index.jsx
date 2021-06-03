import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import IntlProviderWrapper from './providers/IntlProviderWrapper';
import theme from './styles/theme';
import Routes from './routes';
import { store } from './store';
import GlobalStyles from './styles/global';
import './assets/fonts/Montserrat/style.css';

ReactDOM.render(
  <Provider store={store}>
    <IntlProviderWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </IntlProviderWrapper>
  </Provider>,
  document.getElementById('root'),
);
