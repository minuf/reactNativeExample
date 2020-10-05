import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import AppContainer from '../containers/AppContainer';

const ProductDetail = ({route, navigation}) => {
  const {itemId} = route.params;
  return (
    <>
      <AppContainer>
        <Button
          title="Go To Product list"
          onPress={() => navigation.navigate('ProductList')}
        />
        <Text>itemId: {JSON.stringify(itemId)}</Text>
      </AppContainer>
    </>
  );
};

export default ProductDetail;
