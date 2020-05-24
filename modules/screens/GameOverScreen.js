import React from 'react';
import { View, Text, Button } from 'react-native';

//Components
import styles from '../Style.js';

 const GameOverScreen = props => {
  return (
    <View style = {styles.gameOverScreen}>
        <Text>The Game is Over!</Text>
        <Text>Number of Rounds: {props.roundsNumber}</Text>
        <Text>Number was:  {props.userNumber}</Text>
        <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
    );
}

export default GameOverScreen;