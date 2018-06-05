import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground
    } from 'react-native';

class Character extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../resources/Background.png')}
                style={{width: '100%', height: '110%', marginTop: -56}}
            >
                <View style={styles.container}>
                    <Text>Character</Text>
                </View>
            </ImageBackground>
        );
    }
}
export default Character;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
