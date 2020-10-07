import React, {useState, useEffect} from 'react';
import {Button, ActivityIndicator} from 'react-native';
import AppContainer from '../containers/AppContainer';
import MList from '../components/MFlatList';
import Item from '../components/ProductItem';

const ProductList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const DATA = require('../mock/mockedProducts.json');

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('ProductDetail', {item: item})}
        style={{backgroundColor}}
      />
    );
  };

  useEffect(() => {
    if (DATA != null) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [DATA]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <AppContainer>
          <MList data={DATA} renderItem={renderItem} />
        </AppContainer>
      )}
    </>
  );
};

export default ProductList;
