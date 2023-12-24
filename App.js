import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CategorySelection from "./screens/CategorySelection";
import LevelSelection from "./screens/LevelSelection";
import QuizScreen from "./screens/QuizScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="LevelSelection" component={LevelSelection} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
