import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.item]}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: props.item.imageUri,
          }}
        />
        {props.item.stock < 1 && <Text style={styles.noStockTag}>AGOTADO</Text>}

        <Text style={styles.price}>
          {props.item.price} {'\u20AC'}
        </Text>
        <View style={styles.discountContainer}>
          <Text style={styles.oldPrice}>{props.item.oldPrice}</Text>
          <Text style={styles.discount}> {props.item.discount}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 50,
  },
  noStockTag: {
    fontSize: 22,
    color: 'red',
    alignSelf: 'center',
  },
  item: {
    // padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: '#666',
    fontSize: 24,
    marginBottom: 40,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  price: {
    color: '#666',
    fontSize: 30,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
  },
  oldPrice: {
    color: '#666',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 20,
    color: 'red',
  },
});

export default Item;
