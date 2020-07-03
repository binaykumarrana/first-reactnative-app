import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Button,TextInput,FlatList} from 'react-native';

export default function App() {
  const [enteredGoal,setGoal] = useState('');
  const [courseGoals,setCourseGoal] = useState([]);

  const goalInputHandler=(enteredText) =>{
    setGoal(enteredText);
  };

  const var1 = 0;
  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...courseGoals,
      {key:Math.random(),value:enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList 
       keyExtractor={(item, index) => String(index)}
      data={courseGoals} 
      renderItem={ itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      padding:48
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    input:{
      width:'80%', borderColor:'black', borderWidth:1, padding:10
    },
    listItem:{
      padding:10,
      margin:10,
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1
    }
});
