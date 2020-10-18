import React, { useEffect, useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Modal } from "react-native";
const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  const goalInputHandler = (text) => {
    setGoal(text);
  };
  const addGoalHandler = () => {
    props.onAddGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          autoCorrect={false}
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
  },
  button:{
    width: "30%"
  }
});
export default GoalInput;
