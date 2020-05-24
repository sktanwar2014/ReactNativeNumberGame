import React,{useState} from 'react';
import {View} from 'react-native';


//Components
import styles from './Style.js';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';


const Home = () => {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    
    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
    }

    const gameOverHandler = numOfRound => {
        setGuessRounds(numOfRound);
    }

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }
  
    let content = <StartGameScreen onStartGame ={startGameHandler} />;
    if(userNumber && guessRounds <= 0){
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    }else if(guessRounds > 0){
        content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
    }

    return (
    <View style={styles.screen}>
        <Header title={"Guess a Number"} />
        {content}
    </View>
  );
}

export default  Home;