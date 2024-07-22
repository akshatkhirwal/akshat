import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SignupPage from './components/SignupPage'; 
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;