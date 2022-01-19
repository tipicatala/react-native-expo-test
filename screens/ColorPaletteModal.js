import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';

import { COLORS } from '../constants';

const ColorPaletteModal = ({ setNewPalettes, navigation }) => {
  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colors: [],
  });

  console.log(newPalette);

  const isSwitchOn = ({ palette, colorName }) =>
    palette.colors.map((el) => el.colorName).includes(colorName);

  const handleValueChange = ({ item, palette }) => {
    const colorObj = { colorName: item.colorName, hexCode: item.hexCode };

    if (isSwitchOn({ palette, colorName: item.colorName })) {
      const newColors = newPalette.colors.filter(
        (color) => color.colorName !== item.colorName,
      );
      setNewPalette(({ paletteName }) => ({ paletteName, colors: newColors }));
    } else
      setNewPalette(({ colors, paletteName }) => ({
        paletteName,
        colors: [...colors, colorObj],
      }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name of your new palette</Text>
      <TextInput
        style={styles.input}
        onSubmitEditing={({ nativeEvent: { text } }) =>
          setNewPalette(({ colors }) => ({ colors, paletteName: text }))
        }
      />
      <Text style={styles.title}>Choose available colors:</Text>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.listItem]}>
            <View style={styles.nameWrapper}>
              <Text style={[styles.colorName]}>{item.colorName}</Text>
              <View style={[styles.box, { backgroundColor: item.hexCode }]} />
            </View>
            <Switch
              trackColor={{ false: 'white', true: 'white' }}
              thumbColor={
                isSwitchOn({ palette: newPalette, colorName: item.colorName })
                  ? 'teal'
                  : 'white'
              }
              ios_backgroundColor="white"
              value={isSwitchOn({
                palette: newPalette,
                colorName: item.colorName,
              })}
              onValueChange={() =>
                handleValueChange({ item, palette: newPalette })
              }
            />
          </View>
        )}
      />
      <TouchableOpacity onPress={() => {
        setNewPalettes(arr => [...arr, newPalette])
        navigation.goBack()
      }}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
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
  submitText: {
    padding: 15,
    color: 'teal',
    backgroundColor: 'white',
    alignSelf: 'center',
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
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'space-between',
  },
});

export default ColorPaletteModal;
