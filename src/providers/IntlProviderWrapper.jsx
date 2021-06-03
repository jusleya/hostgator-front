import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import locales from '../locales';
import { flattenMessages } from '../lib/core/language';

const IntlProviderWrapper = ({ children }) => (
  <IntlProvider
    locale={'pt'}
    key={'pt'}
    messages={flattenMessages(locales.ptBr)}
  >
    {children}
  </IntlProvider>
);

IntlProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntlProviderWrapper;
