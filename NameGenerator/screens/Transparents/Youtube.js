import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground
    } from 'react-native';

class Youtube extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../resources/Background.png')}
                style={{width: '100%', height: '110%', marginTop: -56}}
            >
                <View style={styles.container}>
                    <Text>Youtube</Text>
                </View>
            </ImageBackground>
        );
    }
}
export default Youtube;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
