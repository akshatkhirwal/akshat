import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from './components/Button'; 

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => Alert.alert('Button Pressed!')}
        style={styles.customButton}
        textStyle={styles.customButtonText}
      />
      <Button
        title="Another Button"
        onPress={() => Alert.alert('Another Button Pressed!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  customButton: {
    backgroundColor: '#28a745',
    marginBottom: 20,
  },
  customButtonText: {
    fontSize: 18,
  },
});

export default App;