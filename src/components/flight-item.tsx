import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LegItem from './leg-item';
import {Itineraries} from '../types/flights';

interface Props extends Itineraries {
  //
}

export default function FlightItem(props: Props) {
  return (
    <View style={styles.container}>
      {props._legs?.map(item => (
        <LegItem
          {...item}
          key={`${props.id}-${props.agent} -${Math.random()}`}
        />
      ))}
      <View style={styles.bottom}>
        <View>
          <Text style={styles.price}>{props.price}</Text>
          <Text style={styles.agent}>{props.agent}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#FFF',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // marginTop: 10,
  },
  button: {
    backgroundColor: '#00a698',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 40,
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 35,
    // lineHeight: 28,
    fontWeight: 'bold',
    color: '#272636',
  },
  agent: {
    fontSize: 20,
    color: '#837d91',
    lineHeight: 20,
  },
});
