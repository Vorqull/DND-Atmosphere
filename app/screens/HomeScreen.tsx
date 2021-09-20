import React from "react";
import {Button, SafeAreaView, StyleSheet} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

export default function HomeScreen({navigation}: StackScreenProps<any>) {

    const navToSettings = () => {
        navigation.navigate("Settings")
    }

    return (
        <SafeAreaView style={styles.background}>
            <Button title={"Go to settings"} onPress={navToSettings}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "purple",
    }
})