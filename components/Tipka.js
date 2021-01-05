import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Boje from '../constants/boje'

const Tipka = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={stil.tipka}>
                <Text style={stil.naslov}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stil = StyleSheet.create({
    tipka: {
        backgroundColor: Boje.glavna,
        paddingVertical: 10,
        paddingHorizontal: 22,
        borderRadius: 12,
        justifyContent: "space-between"
    },
    naslov: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 14
    }
});

export default Tipka
