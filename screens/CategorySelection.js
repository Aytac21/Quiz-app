import React from "react";
import { View, Button, StyleSheet } from "react-native";

const CategorySelection = ({ navigation }) => {
  const startQuiz = (category) => {
    navigation.navigate("LevelSelection", { category });
  };

  return (
    <View style={[styles.container, styles.category]}>
      <Button title="HTML" onPress={() => startQuiz("HTML")} />
      <Button title="CSS" onPress={() => startQuiz("CSS")} />
      <Button title="React" onPress={() => startQuiz("React")} />
      <Button title="JavaScript" onPress={() => startQuiz("JavaScript")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    gap: 10,
  },
});

export default CategorySelection;
