import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text, Title } from '../../structure';
import * as S from './BoxPlan.style';

const BoxPlan = ({ titlePlan }) => (
  <S.Box>
    <S.ContentBox>
      <Title modifiers={['blue', 'center']}>{titlePlan}</Title>
    </S.ContentBox>
    <S.ContentBox>
      <Flex spaceBetween="5px">
        <Text modifiers={['lineDecoration', 'normal']}>
          {titlePlan}
        </Text>
        <Text modifiers={['bold']}>{titlePlan}</Text>
      </Flex>
    </S.ContentBox>
    <S.ContentBox noBorder>
      <Title modifiers={['blue', 'center']}>{titlePlan}</Title>
    </S.ContentBox>
  </S.Box>
);

BoxPlan.propTypes = {
  titlePlan: PropTypes.string.isRequired,
};

export default BoxPlan;
