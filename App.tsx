import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Navbar from './src/components/navbar';
import FlightItem from './src/components/flight-item';
import Flights from './src/api/flights.json';

interface Props {
  //
}

const itineraries = Flights.itineraries;
const legs = Flights.legs;

const DATA = () => {
  let _itineraries = [];
  for (let i = 0; i < itineraries.length; i++) {
    let _legs = [];
    for (let j = 0; j < legs.length; j++) {
      if (itineraries[i].legs.includes(legs[j].id)) _legs.push(legs[j]);
    }
    _itineraries.push({...itineraries[i], _legs});
  }
  return _itineraries;
};

export default function App(props: Props) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <Navbar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...DATA()]}
        renderItem={(item: ListRenderItemInfo<any>, index: number) => (
          <FlightItem {...item.item} />
        )}
        keyExtractor={(_, index) => `${index}`}
        contentContainerStyle={{
          backgroundColor: '#f2f1f4',
          paddingBottom: 70,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#FFF',
  },
});
