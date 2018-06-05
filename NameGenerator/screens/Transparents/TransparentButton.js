import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransparentButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={props.onPress}
        >
            <View style={styles.buttonStyle}/>
                <View style={{flexDirection: 'row', marginTop: -62, marginRight: 40}}>
                <Text style={styles.buttonTextStyle}>{props.Title}</Text>
                <Ionicons
                    name={props.iconName}
                    size={40}
                    style={styles.iconStyle}
                />
            </View>
        </TouchableOpacity>
    );
}

export default TransparentButton;

const styles = StyleSheet.create({
    buttonStyle: {
        height: '80%',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        backgroundColor: 'white',
        opacity: 0.35,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
    },
    buttonTextStyle: {
        fontSize: 22,
        fontFamily: 'sans-serif-light',
        fontWeight: '100',
        color: 'white',
        marginLeft: 40,
        flex: 1,
    },
    TouchableOpacityStyle: {
        width: '100%',
        height: 90,
        marginBottom: 0
    },
    iconStyle: {
        height: 40,
        width: 40,
        marginTop: -2,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
})