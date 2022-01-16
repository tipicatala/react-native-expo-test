import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Here are some boxes of different colors</Text>
      </View>
      <View style={[styles.container, styles.cyan]}>
        <Text style={[styles.subTitle]}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={[styles.subTitle]}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={[styles.subTitle]}>Magenta: #d33682</Text>
      </View>
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
  cyan: { backgroundColor: '#2aa198' },
  blue: { backgroundColor: '#268bd2' },
  magenta: { backgroundColor: '#d33682' },
  subTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default App;
