import * as React from 'react';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBackButton} from '@react-navigation/stack';

export const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{title: 'Product List'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
          // headerTintColor: 'red',
          // headerBackImage: {tintColor: 'red'},
          /* headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                // Do something
              }}
            />
          ), */
        }}
      />
    </Stack.Navigator>
  );
}
