import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../_actions';

import DialogExample from '../../_nativeModules/DialogExample';

const HeaderCart = ({empty = false}) => {

  const products = useSelector(state => state.cart);

    function onPress() {
        if (products.items && products.items.length > 0) {
            // alert("cart: " + products.items.length);
            DialogExample.show('Cart: ' + products.items.length);

        }
    }

    if (empty)
        return (
            <View style={styles.empty} />
        );
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <FontAwesomeIcon icon={ faShoppingCart } color={'white'} size={30}/>
                <Text style={styles.text}>{products.items && products.items.length > 0 && products.items.length}</Text>
            </View>
        </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    empty: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    container: {
        position: 'relative',
        flex: 1,
        width: 50,
        height: 50,
        alignSelf: 'center',
        paddingTop: 15,
    },
    text: {
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 17,
        paddingRight: 15,
        color: 'red',
        fontWeight: 'bold',
    }
  });
  
  export default HeaderCart;