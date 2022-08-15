import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '32.5%',
        height: '100%',
        backgroundColor: '#1D1D1D',
        left: 0,
        position: 'absolute',
    },

    seperatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    seperator: {
        height: 2,
        width: '90%',
        backgroundColor: 'grey',
        top: 35,
        borderRadius: 5,
    },

    speedContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },

    speed: {
        fontSize: 65,
        top: 35,
        color: 'white',
        paddingHorizontal: 10,
    },

    speedUnit: {
        fontSize: 20,
        top: 80,
        color: 'white',
    }
});

export default styles;