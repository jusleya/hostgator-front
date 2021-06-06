import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { PlansActions } from '../../store/plans/plans.duck';
import { LayoutGrid, Text } from '../../components/structure';

import RadioButton from '../../components/contexts/Home/Payment';
import Slider from '../../components/contexts/Home/Slider';

const HomePage = () => {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const { plans } = useSelector((state) => state.plansReducer);
  const [optionPay, setOptionPay] = useState(1);

  useEffect(() => {
    dispatch(PlansActions.getPlans());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Text size="14px" textAlign="center" modifiers={['blueDarkest', 'normal']}>
        {formatMessage({ id: 'home.payIn' })}
      </Text>
      <RadioButton optionSelected={(selectOption) => setOptionPay(selectOption)} />
      <Slider plans={plans} optionPay={optionPay} />
      <Text size="12px" margin="6px 0 20px 0" textAlign="center" modifiers={['blueDark', 'normal']}>
        <u>{formatMessage({ id: 'home.conditions' })}</u>
      </Text>
    </LayoutGrid>
  );
};

export default HomePage;
