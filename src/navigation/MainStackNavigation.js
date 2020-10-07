import * as React from 'react';
import {Button, Text, Image} from 'react-native';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBackButton} from '@react-navigation/stack';

import {createDrawerNavigator} from '@react-navigation/drawer';

function LogoTitle() {
  return (
    <Image
      style={{width: 250, height: 50}}
      source={require('../assets/logo_cecotec.png')}
    />
  );
}
const Drawer = createDrawerNavigator();

export const Stack = createStackNavigator();

export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={({navigation, route}) => ({
          headerTitleStyle: {alignSelf: 'center'},
          title: 'Product List',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: 'grey',
          },
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Detail',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

// export function MainStackNavigation() {
//   return (
//     <Drawer.Navigator initialRouteName="ProductList">
//       <Drawer.Screen
//         name="ProductList"
//         component={ProductList}
//         options={{title: 'Product List'}}
//       />
//       <Drawer.Screen
//         name="ProductDetail"
//         component={ProductDetail}
//         options={{title: 'Product Detail'}}
//       />
//     </Drawer.Navigator>
//   );
// }
