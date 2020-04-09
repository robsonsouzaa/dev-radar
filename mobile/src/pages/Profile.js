import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return <WebView style={styles.web} source={{ uri: `https://github.com/${githubUsername}`}}/>
}

const styles = StyleSheet.create({
  web: {
    flex: 1,
  }
})
export default Profile;