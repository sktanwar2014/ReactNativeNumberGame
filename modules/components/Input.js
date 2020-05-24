import React from 'react';
import { TextInput } from 'react-native';

//Components
import styles from '../Style.js';

 const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input}} />
    );
}

export default Input;