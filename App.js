import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = ({ newPalettes }) => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      children={(props) => <Home {...props} newPalettes={newPalettes} />}
    />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.paletteName })}
    />
  </MainStack.Navigator>
);

const App = () => {
  const [newPalettes, setNewPalettes] = useState([]);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          options={{ headerShown: false }}
          children={() => <MainStackScreen newPalettes={newPalettes} />}
        />
        <RootStack.Screen
          name="Modal"
          children={(props) => (
            <ColorPaletteModal
              {...props}
              setNewPalettes={setNewPalettes}
              newPalettes={newPalettes}
            />
          )}
          options={{ presentation: 'modal' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
