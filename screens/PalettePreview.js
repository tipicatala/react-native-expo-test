import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({ colors }) => {
  return (
    <FlatList
      keyExtractor={(_, i) => i}
      data={colors.slice(0, 5)}
      horizontal
      contentContainerStyle={styles.colorList}
      renderItem={(color) => (
        <View style={[styles.color, { backgroundColor: color.item.hexCode }]} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  colorList: { marginTop: 5, justifyContent: 'center', width: '100%' },
  color: {
    width: 15,
    height: 15,
  },
});

export default PalettePreview;
