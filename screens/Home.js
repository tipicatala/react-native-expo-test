import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import PalettePreview from './PalettePreview';

const Home = ({ navigation, newPalettes }) => {
  const [shemes, setShemes] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);

  const getShemes = async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palette = await result.json();

    if (result.ok) setShemes(palette);
  };

  const handleRefresh = async () => {
    setIsRefresh(true);
    await getShemes();
    setIsRefresh(false);
  };

  useEffect(() => {
    getShemes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Modal');
            }}
            style={styles.modalTitleWrapper}
          >
            <Text style={styles.modalTitle}>Add your own color sheme 💞</Text>
          </TouchableOpacity>
        }
        refreshing={isRefresh}
        onRefresh={handleRefresh}
        keyExtractor={(item) => item.paletteName}
        data={[...newPalettes,...shemes ]}
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
  modalTitle: {
    color: 'pink',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalTitleWrapper: {
    marginTop: 20,
  },
});

export default Home;
