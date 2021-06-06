import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Flex, Text, Title } from '../../structure';
import { Button } from '../../form';
import { IcInfo } from '../../../assets/icons';
import { PlanP, PlanM, PlanTurbo } from '../../../assets/images';
import * as S from './BoxPlan.style';

const BoxPlan = ({ name, price, optionPay }) => {
  const { formatMessage } = useIntl();
  const real = parseFloat(price);

  const imagePlan = (value) => {
    switch (value) {
      case 'Plano P':
        return <PlanP />;
      case 'Plano M':
        return <PlanM />;
      default:
        return <PlanTurbo />;
    }
  };

  const months = (value) => {
    switch (value) {
      case 1:
        return 36;
      case 2:
        return 12;
      default:
        return 1;
    }
  };
  const formatterToReal = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const valueSale = (value) => value * 0.40;
  const valueWithSale = (value) => value - valueSale(value);
  const valueToMonth = (value) => valueWithSale(value) / months(optionPay);

  // {real.toLocaleString('pt-br', { minimumFractionDigits: 2 })}

  return (
    <S.Box>
      <S.ContentBox hasImg>
        {imagePlan(name)}
        <Title modifiers={['blue', 'center']}>{name}</Title>
      </S.ContentBox>

      <S.ContentBox>
        <Flex spaceBetween="5px" justifyContent="center">
          <Text modifiers={['lineDecoration', 'normal']}>
            {formatterToReal(real)}
          </Text>
          <Text modifiers={['bold']}>{formatterToReal(valueWithSale(real))}</Text>
        </Flex>
        <Text modifiers={['center', 'normal']}>
          {formatMessage({ id: 'home.box.equivalent' })}
        </Text>
        <Title size="35px" mb="25px" mt="5px" modifiers={['blue', 'center']}>
          {formatterToReal(valueToMonth(real))}
        </Title>
        <Button />
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
  optionPay: PropTypes.number.isRequired,
};

export default BoxPlan;
