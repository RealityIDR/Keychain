import react from "react";
import { View, Text, Image } from "react-native";
import TaskbarButton from "../TaskbarButton";
import buttons from '../TaskbarButton/buttons';

import styles from './styles';

const Taskbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TaskbarButton 
                source={buttons.civic.source} 
                />
            </View>
            <View style={styles.button}>
                <TaskbarButton 
                source={buttons.spotify.source} 
                onPress={buttons.spotify.onPress}
                imageWidth={buttons.spotify.imageWidth}
                imageHeight={buttons.spotify.imageHeight}
                />
            </View>
            <View style={styles.button}>
                <TaskbarButton 
                source={buttons.youtube.source} 
                onPress={buttons.youtube.onPress}
                imageWidth={buttons.youtube.imageWidth}
                imageHeight={buttons.youtube.imageHeight}
                />
            </View>
            <View style={styles.button}>
                <TaskbarButton 
                source={buttons.maps.source} 
                onPress={buttons.maps.onPress}
                imageWidth={buttons.maps.imageWidth}
                imageHeight={buttons.maps.imageHeight}
                />
            </View>
            <View style={styles.button}>
                <TaskbarButton 
                source={buttons.lock.source} 
                onPress={buttons.lock.onPress}
                imageWidth={buttons.lock.imageWidth}
                imageHeight={buttons.lock.imageHeight}
                />
            </View>
        </View>
    );
};

export default Taskbar;