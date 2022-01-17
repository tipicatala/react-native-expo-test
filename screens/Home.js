import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { shemes } from './colorsShemes';

import PalettePreview from './PalettePreview';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.paletteName}
        data={shemes}
        renderItem={({ item }) => (
          <View style={styles.sheme}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ColorPalette', {
                  paletteName: item.paletteName,
                  colors: item.colors,
                });
              }}
            >
              <Text style={styles.header}>{item.paletteName}</Text>
              <PalettePreview colors={item.colors} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheme: {
    padding: 20,
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
