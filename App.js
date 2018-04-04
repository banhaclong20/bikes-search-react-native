import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import List from './src/components/List';
import Header from './src/components/Header';
import Card from './src/ui/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text="List of Bikes" />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
