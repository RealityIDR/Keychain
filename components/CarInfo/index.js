import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CarInfo = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.speedContainer}>
                <Text style={styles.speed}>45</Text>
                <Text style={styles.speedUnit}>MPH</Text>
            </View>
            <View style={styles.seperatorContainer}>
                <View style={styles.seperator}></View>
            </View>
        </View>
    );
};

export default CarInfo;