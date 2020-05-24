import React, { useState } from 'react';
import {
  View, 
  Text, 
  TextInput, 
  Button, 
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';


//Components
import styles from '../Style.js';
import Card from '../components/Card.js';
import Colors from '../constants/colors.js';
import Input from '../components/Input.js';
import NumberContainer from '../components/NumberContainer.js';


 const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  let confirmedOutput;



  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  
  const resetInputHandler = () => {
    setConfirmed(false);
    setEnteredValue('');
  }

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  }

  if(confirmed){
    confirmedOutput = 
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={()=>{props.onStartGame(selectedNumber)}} />
      </Card>
  }
  
  return (
    <TouchableWithoutFeedback 
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.startScreen}>
          <Text style={styles.title}>Start a New Game!</Text>
          <Card style={styles.inputContainer}>
              <Text >Select a Number</Text>
              <Input
                blurOnSubmit
                autoCapitalize = "none"
                autoCorrect = {false}
                keyboardType = "number-pad"
                maxLength = {2}
                value = {enteredValue}
                onChangeText ={numberInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button 
                    title="Reset" 
                    onPress={resetInputHandler} 
                    color={Colors.accent} 
                  />
                </View>
                <View style={styles.button}>
                  <Button 
                    title="Confirm" 
                    onPress={confirmInputHandler}  
                    color={Colors.primary} 
                  />
                </View>
              </View>
          </Card>
          {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGameScreen;
