import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';


//Components
import styles from '../Style.js';

 const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
  );
}

export default Card;
