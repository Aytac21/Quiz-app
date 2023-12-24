import React from "react";
import { View, Button, StyleSheet } from "react-native";

const LevelSelection = ({ route, navigation }) => {
  const { category } = route.params;
  const startQuiz = (level) => {
    navigation.navigate("QuizScreen", { category, level });
  };

  return (
    <View style={[styles.container, styles.level]}>
      <Button title="Beginner" onPress={() => startQuiz("Beginner")} />
      <Button title="Intermediate" onPress={() => startQuiz("Intermediate")} />
      <Button title="Advanced" onPress={() => startQuiz("Advanced")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  level: {
    gap: 10,
  },
  
});

export default LevelSelection;
