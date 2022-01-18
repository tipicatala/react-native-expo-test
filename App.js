import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

const App = () => {
  const [newPalette, setNewPalette] = useState({
    name: '',
    colors: [],
  });
  
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Modal"
          children={() => (
            <ColorPaletteModal
              setNewPalette={setNewPalette}
              newPalette={newPalette}
            />
          )}
          options={{ presentation: 'modal', setNewPalette, newPalette }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
