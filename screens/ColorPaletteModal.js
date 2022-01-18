import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Switch,
} from 'react-native';

import { COLORS } from '../constants';

const ColorPaletteModal = ({ setNewPalette, newPalette }) => {
  console.log(newPalette);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name of your new palette</Text>
      <TextInput style={styles.input} />
      <Text style={styles.title}>Choose available colors:</Text>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.listItem]}>
            <Text style={[styles.colorName]}>{item.colorName}</Text>
            <View style={[styles.box, { backgroundColor: item.hexCode }]} />
            <Switch
              style={styles.switch}
              thumbColor={'teal'}
              ios_backgroundColor="white"
              value={newPalette.colors.map(el => el.colorName).includes(item.colorName)}
              onValueChange={() =>
                setNewPalette(({ colors, name }) => ({ name, colors:  [ ...colors, { colorName: item.colorName, hexCode: item.hexCode }]}))
              }
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    flexGrow: 1,
    padding: 10,
    flexShrink: 1,
  },
  box: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 30,
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  colorName: {
    color: 'white',
    fontSize: 18,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

export default ColorPaletteModal;
