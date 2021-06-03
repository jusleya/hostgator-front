import React from 'react';
import PropTypes from 'prop-types';
// import Menu from '../Menu';

import * as S from './LayoutGrid.style';

const LayoutGrid = ({ children }) => (
  <S.Grid>
    <S.Navbar>Navbar</S.Navbar>
    <S.Banner>Banner</S.Banner>
    <div>{children}</div>
  </S.Grid>
);

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutGrid;
