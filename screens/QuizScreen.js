import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import quizData from "../data";

const QuizScreen = ({ route, navigation }) => {
  const { category, level } = route.params || {};
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const categoryData = quizData.find((item) => item.category === category);
    const levelData = categoryData
      ? categoryData.levels.find((item) => item.title === level)
      : null;
    const questionsData = levelData ? levelData.questions : [];
    setQuestions(questionsData);
  }, [category, level]);

  const handleAnswer = (option) => {
    if (isButtonDisabled) {
      return;
    }

    setIsButtonDisabled(true);

    const correctAnswer = questions[currentQuestion].correctAnswer;

    setSelectedAnswer(option);

    if (option === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setIsButtonDisabled(false);
        setAnswerStatus(null);
        setSelectedAnswer(null);
      }, 500);
    } else {
      setIsButtonDisabled(true);
    }
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setIsButtonDisabled(false);
      setAnswerStatus(null);
      setSelectedAnswer(null);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleFinish = () => {
    const correctAnswers = questions.filter(
      (question) => question.correctAnswer === selectedAnswer
    );
    alert(
      `Quiz Finished!\nYour Score: ${score}/${
        questions.length
      }\nCorrect Answers:\n${correctAnswers
        .map((q) => q.correctAnswer)
        .join(", ")}`
    );
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(option)}
          disabled={isButtonDisabled}
          style={[
            styles.button,
            answerStatus === "correct" &&
              option === questions[currentQuestion].correctAnswer &&
              styles.correctButton,
            answerStatus === "incorrect" &&
              option === selectedAnswer &&
              styles.incorrectButton,
          ]}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.navigationButtons}>
        {!isButtonDisabled && (
          <TouchableOpacity onPress={handleNext} style={styles.navButton}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
        {isButtonDisabled && (
          <TouchableOpacity onPress={handleFinish} style={styles.navButton}>
            <Text>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightblue",
    borderRadius: 5,
    alignItems: "center",
  },
  correctButton: {
    backgroundColor: "green",
  },
  incorrectButton: {
    backgroundColor: "red",
  },
  navigationButtons: {
    flexDirection: "row",
    marginTop: 20,
  },
  navButton: {
    padding: 10,
    margin: 5,
    backgroundColor: "lightgray",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default QuizScreen;
