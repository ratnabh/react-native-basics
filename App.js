import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode,setAddmode]=useState(false)

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setAddmode(false)
  };
  const removeGoalHandler = (id) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((item) => item.id !== id);
    });
  };
  const cancelGoal=()=>{
    setAddmode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setAddmode(true)}/>
      <View>
        <GoalInput onAddGoal={addGoalHandler} visible={addMode} onCancel={cancelGoal}/>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(data) => (
            <GoalItem title={data.item.value} id={data.item.id} onDelete={removeGoalHandler} />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
