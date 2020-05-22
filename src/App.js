import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider, Header } from 'react-native-elements';

export default function DentariaApp() {
  return (
    <ThemeProvider>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'DENTARIA', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Button
        title="PATIENT"
        type="outline"
      />
      <Button
        title="DENTIST"
        type="outline"
      />
    </ThemeProvider>
  );
}
