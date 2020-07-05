import React,{useState} from 'react';
import {StyleSheet,View,Button,TextInput,Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal,setGoal] = useState('');

    const goalInputHandler=(enteredText) =>{
        setGoal(enteredText);
      };

    const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal);
        setGoal('');
    }; 

    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" style={styles.input} 
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                </View>
                <View style={styles.buttonView}>
                    <Button title="ADD" onPress={addGoalHandler}/>
                </View>
            </View>    
        </View>
    </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        width:'80%', borderColor:'black', borderWidth:1, padding:10, margin:10
      },
      buttonContainer:{
          flexDirection : "row",
          justifyContent :"space-between",
          width:'60%'
      },
      buttonView:{
          width:'40%'
      }
});