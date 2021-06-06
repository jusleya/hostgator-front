import React from 'react';
import { useIntl } from 'react-intl';
// import PropTypes from 'prop-types';

import * as S from './Button.styled';

const Button = () => {
  const { formatMessage } = useIntl();

  return (
    <S.Button>
      {formatMessage({ id: 'button.hire' })}
    </S.Button>
  );
};

export default Button;
