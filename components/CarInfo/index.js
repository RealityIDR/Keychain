import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';

const CarInfo = (props) => {

    const watchPosition = () => {
        try {
          const watchID = Geolocation.watchPosition(
            (position) => {
              let pos = JSON.stringify(position);
              let posArray = pos.split(',');
              posArray = (posArray[2]);
              posArray = posArray.slice(18);
              setPosition(posArray);
            },
            (error) => Alert.alert('WatchPosition Error', JSON.stringify(error))
          );
          setSubscriptionId(watchID);
        } catch (error) {
          Alert.alert('WatchPosition Error', JSON.stringify(error));
        }
      };
    
      const clearWatch = () => {
        subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
        setSubscriptionId(null);
        setPosition(null);
      };
    
      const [position, setPosition] = useState(null);
      const [subscriptionId, setSubscriptionId] = useState(null);
      useEffect(() => {
        watchPosition();
    
        return () => {
          clearWatch();
        };
        
    }, []);
    

    return (
        <View style={styles.container}>
            <View style={styles.speedContainer}>
                <Text style={styles.speed}>{position}</Text>
                <Text style={styles.speedUnit}>MPH</Text>
            </View>
            <View style={styles.seperatorContainer}>
                <View style={styles.seperator}></View>
            </View>
        </View>
    );
};

export default CarInfo;