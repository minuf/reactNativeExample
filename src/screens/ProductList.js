import React, {useState} from 'react';
import {Button} from 'react-native';
import AppContainer from '../containers/AppContainer';
import MList from '../components/MFlatList';
import Item from '../components/ProductItem';

const ProductList = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <>
      <AppContainer>
        <Button
          title="Go To DetailScreen"
          onPress={() => {
            navigation.navigate('ProductDetail', {itemId: 6});
          }}
        />
        <MList data={DATA} renderItem={renderItem} />
      </AppContainer>
    </>
  );
};

export default ProductList;
