import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import AppContainer from '../containers/AppContainer';
import MList from '../components/MFlatList';
import Item from '../components/ProductItem';

const ProductList = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);

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
    // Mock some data load time. 1seg
    if (DATA != null) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [DATA]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <AppContainer>
          <MList data={DATA} renderItem={renderItem} />
        </AppContainer>
      )}
    </>
  );
};

export default ProductList;
