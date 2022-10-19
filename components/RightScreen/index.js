import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';
import Navigation from '../Navigation';

const RightScreen = (props) => {
    
    const [app, setApp] = useState(<Navigation />);
 
    return (
        <View style={styles.container}>
            {app}
            <View style={styles.widget}></View>
        </View>
    );
};

export default RightScreen;