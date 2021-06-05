import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlansActions } from '../../store/plans/plans.duck';
import { LayoutGrid } from '../../components/structure';
import Slider from '../../components/contexts/Home/Slider';

const HomePage = () => {
  const dispatch = useDispatch();
  const { plans } = useSelector((state) => state.plansReducer);

  useEffect(() => {
    dispatch(PlansActions.getPlans());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Slider plans={plans} />
    </LayoutGrid>
  );
};

export default HomePage;
