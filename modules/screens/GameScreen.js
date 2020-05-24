import React, {useState, useRef, useEffect} from 'react';
import {View, Button, Text, Alert} from 'react-native';


//Components
import styles from '../Style.js';
import NumberContainer from '../components/NumberContainer.js';
import Card from '../components/Card.js';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = props => {
    const {userChoice, onGameOver} = props;

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    

    useEffect(() => {
        if(currentGuess === userChoice){
            props.onGameOver(rounds);
        }
    },[userChoice, currentGuess, onGameOver]);

    const nextGuessHandler = direction => {
        console.log(direction, currentGuess, userChoice)
        if((direction === 'lower' && currentGuess < userChoice) || 
           (direction === 'greater' && currentGuess > userChoice))
        {
            Alert.alert("Don't lie!", "You know that this is wrong...",[
                {text: 'Sorry!', style:'cancel'}
            ])
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(rounds + 1);
    }

  return (
    <View style={styles.gameScreen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.gameScreenButtonContainer}>
            <Button 
                title="LOWER" 
                onPress={nextGuessHandler.bind(this, 'lower')}
            />            
            <Button 
                title="GREATER" 
                onPress={nextGuessHandler.bind(this, 'greater')}
            />
        </Card>
    </View>
  );
}

export default  GameScreen;