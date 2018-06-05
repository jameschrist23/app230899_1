import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

export default class CategoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}> 

                <TouchableOpacity
                    style={styles.nickButton}
                    onPress={() => this.props.navigation.navigate('RealCategory')}
                >
                    <ImageBackground
                        source={require('../resources/RealnameButton.png')}
                        style={{width: '100%', height: '100%'}}    
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.nickText}>Real names</Text>
                            <Text style={styles.nickDescText}>Person name, or maybe pet name?</Text>
                            <Text style={styles.nickDescText}>please ignore him. click me instead!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nickButton}
                    onPress={() => this.props.navigation.navigate('NickCategory')}   
                >
                    <ImageBackground
                        source={require('../resources/OthernameButton.png')}
                        style={{width: '100%', height: '100%'}}    
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.nickText}>Other names</Text>
                            <Text style={styles.nickDescText}>Science-y name? Pseudonyms?</Text>
                            <Text style={styles.nickDescText}>click me! click me! click me!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    nickButton: {
        width:'100%',
        height: '50%',
    },
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nickText: {
        fontSize: 45,
        color: 'white',
        fontWeight: '900',
        fontFamily: 'sans-serif'
    },
    nickDescText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '100',
        fontFamily: 'sans-serif-light'
    }


});
