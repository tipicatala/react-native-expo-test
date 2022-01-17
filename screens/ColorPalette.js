import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ColoredBox from '../components/ColoredBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.colorName}
      data={route.params.colors}
      renderItem={({ item }) => (
        <ColoredBox name={item.colorName} color={item.hexCode} />
      )}
      style={styles.root}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.header}>
            Here are some boxes of different colors
          </Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  root: { backgroundColor: 'white' },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ColorPalette;
