import React from 'react';
import { StyleSheet } from 'react-native';

//Components
import Colors from './constants/colors.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height : 90,
    paddingTop : 36,
    backgroundColor :Colors.primary,
    alignItems : 'center',
    justifyContent : 'center'
  },
  headerTitle: {
      color :'black',
      fontSize : 18,
  },
  screen:{
      flex: 1,
  },
  startScreen: {
      flex : 1,
      padding: 10,
      alignItems: 'center',
  },
  title:{
      fontSize: 20,
      marginVertical: 10,
  },
  inputContainer: {
    width:300,
    maxWidth: '80%',
    alignItems:'center',
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity  : 0.26,
    backgroundColor: 'white',
    elevation : 5,
    padding : 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent : 'space-between',
    paddingHorizontal: 15,
  },
  card:{ 
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    shadowRadius: 6,
    shadowOpacity  : 0.26,
    backgroundColor: 'white',
    elevation : 8,
    padding : 20,
    borderRadius: 10,
  },
  button:{
    width: 100,
  },
  input:{
    height : 30,
    borderBottomColor : 'gray',
    borderBottomWidth : 1,
    marginVertical : 10,
    textAlign:'center',
    width : 50,
  },
  summaryContainer: {
      margin: 20,
      alignItems : 'center',
  },
  number: {
      fontSize: 22,
      color : Colors.accent,
  },
  numberContainer: {
    borderWidth : 2,
    borderColor : Colors.accent,
    padding : 10,
    borderRadius : 10,
    marginVertical : 10,
    alignItems : 'center',
    justifyContent : 'center',
  },
  gameScreen: {
      flex: 1,
      padding : 10,
      alignItems : 'center',
  },
  gameScreenButtonContainer: {
      maxWidth: '80%',
      width: 300,
      marginTop : 20,
      justifyContent: 'space-around',
      flexDirection: 'row',
  },
  gameOverScreen:{
      flex: 1,
      justifyContent : 'center',
      alignItems:'center'
  }

});

export default styles;