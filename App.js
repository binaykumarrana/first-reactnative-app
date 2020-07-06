import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,  View , Button,FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals,setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length ==0){
      return;
    }
    setCourseGoal(currentGoals => [...courseGoals,
      {
        id:Math.random(),
        value:goalTitle}
      ]);
      setIsAddMode(false);
  };

  const removeGoalHandler = goalId =>{
      setCourseGoal(courseGoals =>{
        return courseGoals.filter((goal) => goal.id!==goalId)
      });
  };

  const cancelGoal = () =>{
      setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoal}/>
      <FlatList 
       keyExtractor={(item, index) => String(item.id)}
      data={courseGoals} 
      renderItem={ itemData => 
      <GoalItem 
          id={itemData.item.id}
          onDelete={removeGoalHandler} 
          title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      padding:48
    }
});
