import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterdGoal, setEnterdGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputHandler = async (enterdText) => {
    await setEnterdGoal(enterdText);
    if (enterdGoal) return setIsValid(true);
  };

  const addGoal = () => {
    if (!enterdGoal) return setIsValid(false);
    props.addGoalHandler(enterdGoal);
    setEnterdGoal("");
  };

  return (
    <Modal style={styles.modal} visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a goal"
          onChangeText={goalInputHandler}
          value={enterdGoal}
          style={styles.input}
        />
        {!isValid && (
          <Text style={{ color: "red" }}>Please enter something</Text>
        )}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoal} disabled={!isValid} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.visiblityHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderBottomColor: "darkturquoise",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
