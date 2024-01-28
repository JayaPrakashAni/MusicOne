import { StyleSheet} from 'react-native'
import React from 'react'
import WebViews from 'react-native-webview';

const TestView = () => {
  
        return <WebViews source={{ uri: 'https://reactnative.dev/docs/native-modules-ios' }} style={{ flex: 1 }} />;
      
 
}

export default TestView;

const styles = StyleSheet.create({})