// prettier-ignore-start
import React from 'react';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Flex, Text, Title } from '../../structure';
import { Button } from '../../form';
import { IcInfo } from '../../../assets/icons';
import { PlanP, PlanM, PlanTurbo } from '../../../assets/images';
import * as S from './BoxPlan.style';

const BoxPlan = ({ id, name, price, optionPay }) => {
  const { formatMessage } = useIntl();
  const history = useHistory();
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

  const cycle = (value) => {
    switch (value) {
      case 1:
        return 'triennially';
      case 2:
        return 'annually';
      default:
        return 'monthly';
    }
  };
  const formatterToReal = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const valueSale = (value) => value * 0.4;
  const valueWithSale = (value) => value - valueSale(value);
  
  const valueToMonth = (value) => valueWithSale(value) / months(optionPay);

  return (
    <S.Box>
      <S.ContentBox center>
        {imagePlan(name)}
        <Title modifiers={['blueDarkest', 'center']}>{name}</Title>
      </S.ContentBox>

      <S.ContentBox center>
        <Flex spaceBetween="5px" justifyContent="center">
          <Text modifiers={['lineDecoration', 'normal']}>
            {formatterToReal(real)}
          </Text>
          <Text modifiers={['bold']}>
            {formatterToReal(valueWithSale(real))}
          </Text>
        </Flex>
        <Text modifiers={['center', 'normal']}>
          {formatMessage({ id: 'home.box.equivalent' })}
        </Text>
        <Flex justifyContent="center" alignItems="baseline">
          <Title
            size="35px"
            mb="25px"
            mt="5px"
            modifiers={['blueDarkest', 'center']}
          >
            {formatterToReal(valueToMonth(real))}
          </Title>
          <Text size="20px" modifiers={['blue', 'normal']}>
            {formatMessage({ id: 'home.box.month' })}
          </Text>
        </Flex>

<<<<<<< HEAD
        <Button
          onClick={() =>
            history.push(
              `/?a=add&pid=${id}&billingcycle=${cycle(
                optionPay,
              )}&promocode=PROMOHG40`,
            )
=======
        <Button onClick={() =>
            history.push(`
              /?a=add&pid=${id}&billingcycle=${cycle(
              optionPay
              )}&promocode=PROMOHG40
            `)
>>>>>>> ed0dc59c1008572c8d0890aca04ecca474ffe4af
          }
        />
        <Flex
          spaceBetween="5px"
          alignItems="center"
          justifyContent="center"
          marginTop="31px"
        >
          <Text size="15px" modifiers={['center', 'bold']}>
            {formatMessage({ id: 'home.box.oneYear' })}
          </Text>
          <IcInfo />
        </Flex>
        <Flex
          spaceBetween="4px"
          alignItems="center"
          justifyContent="center"
          marginTop="9px"
        >
          <Text size="14px" modifiers={['blueDarkest', 'normal']}>
            {formatMessage({ id: 'home.box.save' })}{' '}
            {formatterToReal(valueSale(real))}
          </Text>
          <S.SaleOff>{formatMessage({ id: 'home.box.off' })}</S.SaleOff>
        </Flex>
      </S.ContentBox>

      <S.ContentBox noBorder>
        <S.Border>
          <Text size="16px" lineHeight="32px" modifiers={['normal']}>
            {formatMessage({ id: 'home.box.oneSite' })}
          </Text>
        </S.Border>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          <b>{formatMessage({ id: 'home.box.gb' })}</b>{' '}
          {formatMessage({ id: 'home.box.storage' })}
        </Text>
        <S.Border>
          <Text size="16px" lineHeight="32px" modifiers={['normal']}>
            {formatMessage({ id: 'home.box.account' })}{' '}
            <b>{formatMessage({ id: 'home.box.unlimited' })}</b>
          </Text>
        </S.Border>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          {formatMessage({ id: 'home.box.create' })}{' '}
          <u>
            <b>{formatMessage({ id: 'home.box.free' })}</b>
          </u>
        </Text>
        <Text size="16px" lineHeight="32px" modifiers={['normal']}>
          {formatMessage({ id: 'home.box.certificate' })}{' '}
          <b>{formatMessage({ id: 'home.box.free' })}</b>{' '}
          {formatMessage({ id: 'home.box.https' })}
        </Text>
      </S.ContentBox>
    </S.Box>
  );
};

BoxPlan.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  optionPay: PropTypes.number.isRequired,
};

export default BoxPlan;
// prettier-ignore-end
