import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [CourseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) return;
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { id: Math.random().toString(), text: enteredGoalText }
    ]);
    setEnteredGoalText('');
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => 
    currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>

        <TextInput 
        style={styles.textInput} 
        placeholder='Your Course Goal!'
        onChangeText={goalInputHandler} 
        value={enteredGoalText} />

        <Button 
        title='Add Goal' 
        onPress={addGoalHandler} 
        color='#4a90e2' />

      </View>

      <View style={styles.goalsContainer}>
        {CourseGoals.map((goal) => (
          <View key={goal.id} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.text}</Text>
            <Button 
            title='Delete' 
            onPress={() => deleteGoalHandler(goal.id)} 
            color='#e74c3c'/>
          </View>
        ))}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer : {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#fefefe'
  },
  
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 2,
    borderColor: '#4a90e2',
    paddingBottom: 8,
  },

  textInput : {
    borderWidth: 1,
    borderColor: '#4a90e2',
    width: '70%',
    marginRight: 8,
    padding: 13,
    borderRadius: 5,
    backgroundColor: '#e6f0ff',
  },
  
  goalsContainer : {
    flex: 5,
  },

  goalItem : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,  
    backgroundColor: '#d1f2eb',
    borderRadius: 5,
  },

  goalText : {
    maxWidth: '80%',
    color: '#0d3b2e',
    fontWeight: '500'
  },
});