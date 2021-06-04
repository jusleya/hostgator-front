import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../components/contexts/BoxPlan';
import { ProductsActions } from '../../store/products/products.duck';
import { LayoutGrid } from '../../components/structure';

const HomePage = () => {
  const dispatch = useDispatch();
  const productsA = useSelector((state) => state.products);
  console.log(productsA);

  useEffect(() => {
    dispatch(ProductsActions.getProducts());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Box titlePlan="Plano P" />
    </LayoutGrid>
  );
};

export default HomePage;
