import react from "react";
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const TaskbarButton = (props) => {

    const { source, onPress, imageWidth, imageHeight } = props;

    const style = imageWidth ? {width: imageWidth, height: imageHeight} : styles.image;

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={() => console.warn('Yes')}
                >
                <Image style={style} source={source} />
            </TouchableOpacity>
        </View>
    );
};

export default TaskbarButton;