import { Alert, Linking } from 'react-native';
var SendIntentAndroid = require("react-native-send-intent");

export default { 
    civic: {
        source: require('../../assets/images/civicicon.png'),
    },

    spotify: {
        source: require('../../assets/images/spotifylogo.png'),
        onPress: () => Linking.openURL('spotify://app'),
        imageWidth: '70%',
        imageHeight: '70%',
    },

    lock: {
        source: require('../../assets/images/lock.png'),
        imageWidth: '55%',
        imageHeight: '65%',
    },

    youtube: {
        source: require('../../assets/images/youtubelogo.png'),
        onPress: () => Linking.openURL('https://www.youtube.com'),
        imageWidth: '80%',
        imageHeight: '80%',
    }
};