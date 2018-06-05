import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Linking
    } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

class RealCatScreen extends Component {
    render() {
        return ( 
            //===========================THE SCROLL VIEW===========================//
            <ScrollView>



                <TouchableOpacity
                    style={styles.TouchableOpacity}
                >
                    <ImageBackground
                        source={require('../resources/PersonNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Person Name</Text>
                            <Text style={styles.descText}>Kate Pearson! Dave Christopher</Text>
                            <Text style={styles.descText}>find a name for your person!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.TouchableOpacity}
                >
                    <ImageBackground
                        source={require('../resources/PetNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Pet Name</Text>
                            <Text style={styles.descText}>Molly, come here boy!</Text>
                            <Text style={styles.descText}>create a real person's name</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.TouchableOpacity}
                >
                    <ImageBackground
                        source={require('../resources/NickNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Nick Name</Text>
                            <Text style={styles.descText}>Uvuvuevwevwe onyetenyevwe Osas?</Text>
                            <Text style={styles.descText}>lets just call him Osas...</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                
                <TouchableOpacity
                    style={styles.TouchableOpacity}
                >
                    <ImageBackground
                        source={require('../resources/CelebsNameButton.png')}
                        style={{width: '100%', height: '100%', marginBottom: 0}}    
                    >
                        <View style={styles.buttonTextView}>
                            <Text style={styles.mainText}>Celebs Name</Text>
                            <Text style={styles.descText}>*your name here* Kardashian</Text>
                            <Text style={styles.descText}>combine your name with celebs!</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>



                <TouchableOpacity
                    style={{height: 70, width: '100%'}}
                    //onPress={() => Linking.openURL('https://google.com')}
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
export default RealCatScreen;

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
