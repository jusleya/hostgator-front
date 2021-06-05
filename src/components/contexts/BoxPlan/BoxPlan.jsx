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

  // {real.toLocaleString('pt-br', { minimumFractionDigits: 2 })}

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
        <S.Border>
          <Text size="16px" lineHeight="32px" modifiers={['normal']}>
            {formatMessage({ id: 'home.box.oneSite' })}
          </Text>
        </S.Border>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          <b>{formatMessage({ id: 'home.box.gb' })}</b>
          {' '}
          {formatMessage({ id: 'home.box.storage' })}
        </Text>
        <S.Border>
          <Text size="16px" lineHeight="32px" modifiers={['normal']}>
            {formatMessage({ id: 'home.box.account' })}
            {' '}
            <b>{formatMessage({ id: 'home.box.unlimited' })}</b>
          </Text>
        </S.Border>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          {formatMessage({ id: 'home.box.create' })}
          {' '}
          <u><b>{formatMessage({ id: 'home.box.free' })}</b></u>
        </Text>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          {formatMessage({ id: 'home.box.certificate' })}
          {' '}
          <b>{formatMessage({ id: 'home.box.free' })}</b>
          {' '}
          {formatMessage({ id: 'home.box.https' })}
        </Text>
      </S.ContentBox>
    </S.Box>
  );
};

BoxPlan.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BoxPlan;
