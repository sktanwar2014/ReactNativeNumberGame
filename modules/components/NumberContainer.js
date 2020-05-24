import React from 'react';
import { View, Text } from 'react-native';

//Components
import styles from '../Style.js';

 const Input = props => {
  return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

export default Input;