import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.dark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    btnGray:{
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: Colors.gray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    smallTextLight: {
        fontSize: 32,
        color: Colors.white
    },
    smallTextDark:{
        fontSize: 32,
        color: Colors.black
    },
    row: {
        maxWidth: "100%",
        flexDirection: "row"
    },
    viewBottom: {
        position: "absolute",
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: Colors.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    },
    screenSecondNumber:{
        fontSize: 40,
        color: Colors.gray,
        fontWeight: "200",
        alignSelf: "flex-end"
    }
});

export default styles;