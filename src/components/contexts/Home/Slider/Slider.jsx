import React from 'react';
import PropTypes from 'prop-types';
// import Box from '../../BoxPlan';

const Slider = ({ products }) => {
  console.log(products);
  return (
    <div>
      {/* {products.map(({ name }) => <Box titlePlan={name} />)} */}
    </div>
  );
};

Slider.defaultProps = {
  products: [],
};

Slider.propTypes = {
  products: PropTypes.oneOf(PropTypes.array),
};

export default Slider;
