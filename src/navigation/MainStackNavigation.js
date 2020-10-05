import * as React from 'react';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';

export const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{title: 'Home screen'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{title: 'Index screen'}}
      />
    </Stack.Navigator>
  );
}
