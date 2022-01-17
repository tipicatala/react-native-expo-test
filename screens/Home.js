import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { shemes } from './colorsShemes';

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
              <FlatList
                keyExtractor={(_, i) => i}
                data={item.colors.slice(0, 5)}
                horizontal
                contentContainerStyle={styles.colorList}
                renderItem={(color) => (
                  <View
                    style={[
                      styles.color,
                      { backgroundColor: color.item.hexCode },
                    ]}
                  />
                )}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: { marginTop: 5, justifyContent: 'center', width: '100%' },
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
  color: {
    width: 15,
    height: 15,
  },
});

export default Home;
