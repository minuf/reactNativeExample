import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

const MList = ({data, renderItem}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
});

export default MList;
