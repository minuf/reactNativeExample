import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

const AppContainer = memo(({navigation, children}) => {
  return <View style={styles.container}>{children}</View>;
});

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
});

export default AppContainer;
