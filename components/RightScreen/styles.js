import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '67.5%',
        height: '100%',
        right: '0%',
    },
    application: {
        width: "100%",
        height: "100%",
    },
    widget: {
        position: 'absolute',
        width: '95%',
        height: '13%',
        backgroundColor: '#1D1D1D',
        right: 22.5,
        bottom: '10%',
        borderTopLeftRadius: 10,
        borderRadius: 10,
    }
});

export default styles;