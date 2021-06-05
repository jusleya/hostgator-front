import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Title } from '../../structure';
import * as S from './BoxPlan.style';

const BoxPlan = ({ name }) => (
  <S.Box>
    <S.ContentBox>
      <Title modifiers={['blue', 'center']}>{name}</Title>
    </S.ContentBox>
    <S.ContentBox>
      <Flex spaceBetween="5px">
        <Text modifiers={['lineDecoration', 'normal']}>
          Test 1
        </Text>
        <Text modifiers={['bold']}>Test2</Text>
      </Flex>
    </S.ContentBox>
    <S.ContentBox noBorder>
      <Title modifiers={['blue', 'center']}>Test3</Title>
    </S.ContentBox>
  </S.Box>
);

BoxPlan.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BoxPlan;
