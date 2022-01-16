import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColoredBox from './components/ColoredBox'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Here are some boxes of different colors</Text>
      </View>
      <ColoredBox name='Cyan' color='#2aa198' />
      <ColoredBox name='Blue' color='#268bd2' />
      <ColoredBox name='Magenta' color='#d33682' />
      <ColoredBox name='Orange' color='#cb4b16' />
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
  }
})

export default App;
