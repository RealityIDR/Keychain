import { Alert, Linking } from 'react-native';
var SendIntentAndroid = require("react-native-send-intent");

export default { 
    civic: {
        source: require('../../assets/images/civicicon.png'),
    },

    spotify: {
        source: require('../../assets/images/spotifylogo.png'),
        onPress: () => Linking.openURL('spotify://app'),
        
        /* () => SendIntentAndroid.isAppInstalled('com.spotify.music').then((isInstalled) => {
            if (isInstalled) {
                SendIntentAndroid.openApp('com.spotify.music').then((wasOpened) => {
                });
                console.log("is installed true");
            }
            else {
                Alert.alert('App not installed')
            }
        }), */
        imageWidth: '70%',
        imageHeight: '70%',
    },

    lock: {
        source: require('../../assets/images/lock.png'),
        imageWidth: '55%',
        imageHeight: '65%',
    }
};