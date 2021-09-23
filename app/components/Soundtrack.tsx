import React from "react";
import {Button, SafeAreaView, StyleSheet, View, TouchableOpacity, ImageBackground, Text} from "react-native";

export const Soundtrack = ({onTrackPress,
                               title,
                               trackObject,
                               playlistObject,
                               queue,
                               queueInfo,
                               setQueue,
                               setQueueInfo,
                               navigation}: any) => {


    return (
        <TouchableOpacity onPress={() => onTrackPress(
            trackObject,
            playlistObject,
            queue,
            queueInfo,
            setQueue,
            setQueueInfo,
            navigation
        )} style={styles.soundtrack}>
            <Text style={styles.trackTitle}>{title}</Text>
            <Text style={styles.trackArtist}>Artist Name</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    soundtrack: {
        width: "100%",
        height: 70,
        borderColor: "white",
        borderTopWidth: 3,
    },
    trackTitle: {
        color: "white",
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10,
    },
    trackArtist: {
        color: "white",
        fontSize: 16,
        fontStyle: "italic",
        marginTop: 2,
        marginLeft: 10,
    },
})