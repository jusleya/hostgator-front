import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import { IcLogo } from '../../../assets/icons';

import * as S from './LayoutGrid.style';

const LayoutGrid = ({ children }) => (
  <S.Grid>
    <S.Navbar>
      <IcLogo />
    </S.Navbar>
    <Banner />
    <S.Main>
      <div>{children}</div>
    </S.Main>
  </S.Grid>
);

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutGrid;
