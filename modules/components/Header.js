import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components
import styles from '../Style.js';

 const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

export default Header;