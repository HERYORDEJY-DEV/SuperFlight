import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  //
}

export default function Navbar(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 210,
    height: 25,
    tintColor: '#396fc0',
  },
  container: {
    paddingHorizontal: 20,
    height: 45,
    elevation: 3,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
});
