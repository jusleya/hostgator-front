import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../components/contexts/BoxPlan';
import { ProductsActions } from '../../store/products/products.duck';
import { LayoutGrid } from '../../components/structure';
import Slider from '../../components/contexts/Home/Slider';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(ProductsActions.getProducts());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Slider products={products} />
      <Box titlePlan="Plano P" />
    </LayoutGrid>
  );
};

export default HomePage;
