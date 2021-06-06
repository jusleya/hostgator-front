import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import * as S from './Button.styled';

const Button = ({ onClick }) => {
  const { formatMessage } = useIntl();

  return (
    <S.Button onClick={onClick}>
      {formatMessage({ id: 'button.hire' })}
    </S.Button>
  );
};

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
