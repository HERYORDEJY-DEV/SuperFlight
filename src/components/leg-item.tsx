import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {format as dateFormat} from 'date-fns';
import {toHoursAndMinutes} from '../utils/data-formate';

interface Props {
  id: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: string;
  arrival_time: string;
  stops: string;
  airline_name: string;
  airline_id: string;
  duration_mins: string;
}

export default function LegItem(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={{
            uri: `https://logos.skyscnr.com/images/airlines/favicon/${props.airline_id}.png`,
          }}
          style={styles.icon}
        />
        <View style={styles.subLeft}>
          <View>
            <Text style={styles.startTime}>
              {dateFormat(new Date(props.departure_time), 'hh:mm')}
            </Text>
            <Text style={styles.startLocation}>{props.departure_airport}</Text>
          </View>
          <Text style={styles.arrow}>➞</Text>
          <View>
            <Text style={styles.stopTime}>
              {dateFormat(new Date(props.arrival_time), 'HH:mm')}
            </Text>
            <Text style={styles.stopLocation}>{props.arrival_airport}</Text>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.flightTime}>
          {toHoursAndMinutes(Number(props.duration_mins))}
        </Text>
        <Text
          style={[
            styles.flightType,
            {color: Boolean(props.stops) ? 'red' : '#00a698'},
          ]}>
          {Boolean(props.stops) ? `${props.stops} Stop` : 'Direct'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  subLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  right: {justifyContent: 'space-between'},
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    // display: 'none',
  },
  startTime: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    color: '#272636',
  },
  startLocation: {fontSize: 20, textAlign: 'left', color: '#837d91'},
  stopTime: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
    color: '#272636',
  },
  stopLocation: {fontSize: 20, textAlign: 'left', color: '#837d91'},
  flightTime: {
    fontSize: 16,
    textAlign: 'center',
    // lineHeight: 16,
    color: '#b2aebd',
  },
  flightType: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 30,
    color: '#00a698',
  },
  arrow: {marginHorizontal: 10},
});
