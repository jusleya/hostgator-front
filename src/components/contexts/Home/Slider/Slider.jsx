import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../BoxPlan';
import * as S from './Slider.styled';

const Slider = ({ plans, optionPay }) => (
  <S.SliderBox spaceBetween="12px">
    {plans.map((plan) => {
      const { name, id, cycle: { triennially, annually, monthly } } = plan[0];
      const typePayment = (value) => {
        switch (value) {
          case 1:
            return triennially;
          case 2:
            return annually;
          default:
            return monthly;
        }
      };

      return (
        <Box
          key={id}
          id={id}
          name={name}
          optionPay={optionPay}
          price={typePayment(optionPay).priceOrder}
        />
      );
    })}
  </S.SliderBox>
);

Slider.defaultProps = {
  plans: [],
};

Slider.propTypes = {
  plans: PropTypes.oneOf(PropTypes.array),
  optionPay: PropTypes.number.isRequired,
};

export default Slider;
