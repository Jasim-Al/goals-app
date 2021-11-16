import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const addGoalHandler = (goal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), title: goal },
    ]);
    visiblityHandler();
  };

  const visiblityHandler = () => setIsVisible(!isVisible);

  const deleteGoalHandler = (id) => {
   setGoals(currentGoals => {
     return currentGoals.filter(goal => goal.id !== id)
   });
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={()=>setIsVisible(!isVisible)}/>
      <GoalInput addGoalHandler={addGoalHandler} visiblityHandler={visiblityHandler} isVisible={isVisible}/>
      {goals && (
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem value={itemData.item} onDelete={deleteGoalHandler}/>}
          inverted
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
