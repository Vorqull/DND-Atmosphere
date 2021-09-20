import React from "react";
import {Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SearchBar} from "react-native-elements"

import {QueueInfoContext} from "../components/QueueInfoContext";
import MiniPlayer from "../components/MiniPlayer";

export default function SoundboardsScreen({navigation}: any) {
    const {queueInfo, setQueueInfo} = React.useContext(QueueInfoContext);

    function navToSoundboard(){
        navigation.navigate("Soundboard");
    }

    //Partially temporary, need to get data from database instead
    let soundboards = [];
    let row = [];
    const soundboardNum = 20;
    for (let i = 0; i < soundboardNum; i++) {
        row.push({
            title: "Tavern",
            source: require("../assets/images/tavern.jpg"),
            key: i,
        });
        if (i%2===1 || i === soundboardNum-1) { 
            soundboards.push(row);
            row = [];
        }
    }

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.heading}>Soundboards</Text>

                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search..."
                    />
                </View>

                <ScrollView style={styles.scroll}>
                    {soundboards.map(row => 

                        <View style={styles.row} key={"r" + row[0].key}>
                            {row.map(playlist => 

                                <TouchableOpacity style={styles.touchable} onPress={navToSoundboard} key={playlist.key}>
                                    <ImageBackground 
                                        source={playlist.source}
                                        style={styles.imageBackground}
                                        imageStyle={styles.image}>
                                        
                                        <Text style={styles.imageText}>{playlist.title}</Text>
                                        
                                    </ImageBackground>
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                </ScrollView>
            </View>

            {queueInfo.mpActive && <MiniPlayer navigation={navigation}/>}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#121212",
    },
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
    heading: {
        color: "#F4963F",
        fontSize: 36,
        marginTop: 35,
    },
    touchable: {
        borderRadius: 100, //Doesn't work for some reason :( tried it on image as well
    },
    imageBackground: {
        width: 150,
        height: 150,
        marginRight: 10,
        marginLeft: 0,
        justifyContent: "flex-end", 
        borderRadius: 30,
    },
    image: {
        borderRadius: 20,
    },
    imageText: {
        color: "white",
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5,
    },
    row: {
        //backgroundColor: "red", //This is good for debugging
        width: "100%",
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "flex-start", //Center is better for different screen sizes but looks weird for odd numbers of soundboards
    },
    searchBar: {
        backgroundColor: "white",
        marginBottom: 35,
        borderRadius: 10,
        paddingLeft: 5,
    },
    scroll: {
        //backgroundColor: "yellow",
    }
})