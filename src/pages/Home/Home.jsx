import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlansActions } from '../../store/plans/plans.duck';
import { LayoutGrid } from '../../components/structure';
import RadioButton from '../../components/contexts/Home/Payment';
import Slider from '../../components/contexts/Home/Slider';

const HomePage = () => {
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plansReducer);
  const [optionPay, setOptionPay] = useState(1);

  useEffect(() => {
    dispatch(PlansActions.getPlans());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <RadioButton optionSelected={(selectOption) => setOptionPay(selectOption)} />
      <Slider plans={plans} optionPay={optionPay} />
    </LayoutGrid>
  );
};

export default HomePage;
