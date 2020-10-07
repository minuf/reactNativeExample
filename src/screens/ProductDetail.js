import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import AppContainer from '../containers/AppContainer';

const ProductDetail = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <>
      <AppContainer>
        <Button
          title="Go To Product list"
          onPress={() => navigation.navigate('ProductList')}
        />
        <Text>itemId: {item.id}</Text>
        <Text>name: {item.title}</Text>
      </AppContainer>
    </>
  );
};

export default ProductDetail;
