import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../BoxPlan';
import * as S from './Slider.styled';

const Slider = ({ plans }) => {
  console.log(plans);
  return (
    <S.SliderBox spaceBetween="12px">
      {plans.map((plan) => {
        const { name, id, cycle: { triennially } } = plan[0];
        return (
          <Box
            key={id}
            name={name}
            price={triennially.priceOrder}
          />
        );
      })}
    </S.SliderBox>
  );
};

Slider.defaultProps = {
  plans: [],
};

Slider.propTypes = {
  plans: PropTypes.oneOf(PropTypes.array),
};

export default Slider;
