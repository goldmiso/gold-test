import * as React from 'react';
import { WebView } from 'react-native-webview';

android:usesCleartextTraffic="true"

export default function App() {
  return (
    <WebView
      
      source={{ uri: 'http://www.misotok.co.kr' }}
    />
  );
}