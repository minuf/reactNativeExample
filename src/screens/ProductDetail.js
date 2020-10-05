import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

const ProductDetail = ({navigation}) => {
  return (
    <>
      {/* <Text style={styles.header}>HomeScreen</Text> */}
      <Button
        title="Go To Product list"
        onPress={() => navigation.navigate('ProductList')}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
});

export default ProductDetail;
