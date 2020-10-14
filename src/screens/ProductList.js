import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import AppContainer from '../containers/AppContainer';
import MList from '../components/MFlatList';
import Item from '../components/ProductItem';

import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../_actions';

const ProductList = ({navigation}) => {

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const DATA = require('../mock/mockedProducts.json');

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('ProductDetail', {item: item})}
      />
    );
  };

  useEffect(() => {
    dispatch(productActions.getAll());
  }, []);

  return (
    <>
      {!products.items ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <AppContainer>
          <MList data={products.items} renderItem={renderItem} />
        </AppContainer>
      )}
    </>
  );
};

export default ProductList;
