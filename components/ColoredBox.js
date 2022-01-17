import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColoredBox = ({ name, color }) => {
  const textColor = {
    color: parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
  }
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={[styles.subTitle, textColor]}>
        {name}: {color}
      </Text>
    </View>
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
  subTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14,
  },
});

export default ColoredBox;
