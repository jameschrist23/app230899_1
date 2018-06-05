import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    ImageBackground,
    ScrollView
    } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

class NickCatScreen extends Component {
    render() {
        return ( 
            //===========================THE SCROLL VIEW===========================//
            <ScrollView>


                <TouchableOpacity
                    style={styles.TouchableOpacity}
                    onPress={() => this.props.navigation.navigate('GamingName')} 
                >
                    <ImageBackground
                        source={require('../resources/GamingNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}   
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Gaming Name</Text>
                            <Text style={styles.descText}>Steam name? Online nicknames?</Text>
                            <Text style={styles.descText}>this is the right spot!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.TouchableOpacity}
                    onPress={() => this.props.navigation.navigate('YoutubeName')} 
                >
                    <ImageBackground
                        source={require('../resources/YoutubeNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}
                        onPress={() => this.props.navigation.navigate('GamingName')}   
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Youtube Name</Text>
                            <Text style={styles.descText}>Decided to start a youtube channel eh?</Text>
                            <Text style={styles.descText}>craft your channel name here!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.TouchableOpacity}
                    onPress={() => this.props.navigation.navigate('BusinessName')} 
                >
                    <ImageBackground
                        source={require('../resources/BusinessNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Business Name</Text>
                            <Text style={styles.descText}>Carinna Skylar! John Pitcairn!</Text>
                            <Text style={styles.descText}>find a name for your character!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.TouchableOpacity}
                    onPress={() => this.props.navigation.navigate('FantasyName')} 
                >
                    <ImageBackground
                        source={require('../resources/CharacterNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Fantasy Name</Text>
                            <Text style={styles.descText}>Carinna Skylar! John Pitcairn!</Text>
                            <Text style={styles.descText}>find a name for your character!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={{height: 70, width: '100%'}}
                >
                    <View style={styles.developmentView}>
                        <View style={styles.buttonTextView}>
                            <Text style={styles.devText}>More on development!</Text>
                            <Text style={styles.devText2}>Tap here to support us by giving good reviews :D</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                

                
            </ScrollView>
        );
    }
}
export default NickCatScreen;

const styles = StyleSheet.create({
    TouchableOpacity: {
        height: 210,
        width: '100%'
    },
    buttonTextView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 40,
        color: 'white',
        fontWeight: '900',
        fontFamily: 'sans-serif'
    },
    descText: {
        fontSize: 13,
        color: 'white',
        fontWeight: '100',
        fontFamily: 'sans-serif-light'
    },
    developmentView: {
        width: '100%',
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1c1c'
    },
    devText: {
        color: 'white'
    },
    devText2: {
        fontSize: 11,
        color: 'white'
    }

});
