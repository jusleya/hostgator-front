import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Flex, Text, Title } from '../../structure';
import { IcInfo } from '../../../assets/icons';
import * as S from './BoxPlan.style';

const BoxPlan = ({ name, price }) => {
  const { formatMessage } = useIntl();
  const real = parseFloat(price);

  const formatterToReal = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const valueSale = (value) => value * 0.40;
  const valueToMonth = (value) => value / 36;

  return (
    <S.Box>
      <S.ContentBox>
        <Title modifiers={['blue', 'center']}>{name}</Title>
      </S.ContentBox>
      <S.ContentBox>
        <Flex spaceBetween="5px" justifyContent="center">
          <Text modifiers={['lineDecoration', 'normal']}>
            {formatterToReal(real)}
          </Text>
          <Text modifiers={['bold']}>{formatterToReal(real - valueSale(real))}</Text>
        </Flex>
        <Text modifiers={['center', 'normal']}>
          {formatMessage({ id: 'home.box.equivalent' })}
        </Text>
        <Title size="35px" mb="25px" mt="5px" modifiers={['blue', 'center']}>
          {formatterToReal(valueToMonth(real))}
        </Title>
        <Flex spaceBetween="5px" alignItems="center" justifyContent="center">
          <Text size="15px" modifiers={['center', 'bold']}>
            {formatMessage({ id: 'home.box.oneYear' })}
          </Text>
          <IcInfo />
        </Flex>
      </S.ContentBox>
      <S.ContentBox noBorder>
        <Title modifiers={['blue', 'center']}>Test3</Title>
      </S.ContentBox>
    </S.Box>
  );
};

BoxPlan.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BoxPlan;
