import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../BoxPlan';
import * as S from './Slider.styled';

const Slider = ({ plans }) => {
  console.log(plans);
  return (
    <S.SliderBox spaceBetween="12px">
      {plans.map((plan) => (<Box key={plan[0].id} name={plan[0].name} />))}
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
