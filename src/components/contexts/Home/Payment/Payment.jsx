import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './Payment.styled';

const Payment = ({ optionSelected }) => {
  const [selectOption, setSelectOption] = useState(1);

  useEffect(() => {
    if (selectOption) {
      optionSelected(selectOption);
    }
  }, [selectOption]);

  return (
    <S.PaymentOptions>
      <S.OptionContainer isChecked={selectOption === 1}>
        <S.Option
          id={1}
          value={1}
          type="radio"
          name={'payment'}
          checked={selectOption === 1}
          onChange={() => setSelectOption(1)}
        />
        <span>3 anos</span>
      </S.OptionContainer>
      <S.OptionContainer isChecked={selectOption === 2}>
        <S.Option
          id={2}
          value={2}
          type="radio"
          name={'payment'}
          onChange={() => setSelectOption(2)}
        />
        <span>1 ano</span>
      </S.OptionContainer>
      <S.OptionContainer noMargin isChecked={selectOption === 3}>
        <S.Option
          id={3}
          value={3}
          type="radio"
          name={'payment'}
          onChange={() => setSelectOption(3)}
        />
        <span>1 mês</span>
      </S.OptionContainer>
    </S.PaymentOptions>
  );
};

Payment.defaultProps = {
  optionSelected: 0,
};

Payment.propTypes = {
  optionSelected: PropTypes.func,
};

export default Payment;
