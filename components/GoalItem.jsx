import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    const deleteGoalHandler = () => {
        props.onDelete(props.value.id);
    }

  return (
    <TouchableOpacity activeOpacity={0.7} onLongPress={deleteGoalHandler}>
      <View style={styles.goal}>
        <Text style={{ fontSize: 20 }}>{props.value.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "blue",
    padding: 2,
    backgroundColor: "#ddffdd",
  },
});

export default GoalItem;
