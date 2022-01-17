import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColoredBox from './components/ColoredBox';

const App = () => {
  const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        keyExtractor={(item) => item.colorName}
        data={COLORS}
        renderItem={({ item }) => (
          <ColoredBox name={item.colorName} color={item.hexCode} />
        )}
        ListHeaderComponent={<View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
      </View>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
