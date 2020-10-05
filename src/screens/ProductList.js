import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

const ProductList = ({navigation}) => {
  return (
    <>
      {/* <Text style={styles.header}>IndexScreen</Text> */}
      <Button
        title="Go To DetailScreen"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
});

export default ProductList;
