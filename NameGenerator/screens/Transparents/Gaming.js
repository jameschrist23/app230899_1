import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity
    } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AdMobRewarded } from 'react-native-admob';
import TransparentButton from './TransparentButton';
import RewardedVideoButton from './RewardedVideoButton';

class Gaming extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberofAdWatched: 0
        }
    }

    showContents() {
        if( this.state.numberofAdWatched === 0 ){
            return(
                <RewardedVideoButton/>
            )
        }
        
    }

    render() {
        return (
            <ImageBackground
                source={require('../../resources/Background.png')}
                style={{width: '100%', height: '110%', marginTop: -56}}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.introText}>Gaming Names</Text>
                    <Text style={styles.descText}>Pick a theme that you like!</Text>
                </View>

                <ScrollView style={{
                    position: 'relative',
                    bottom: -8,
                    marginTop: '20%',
                }}>

                    <Text style={styles.catName}>Science</Text>

                    <TouchableOpacity
                        style={styles.TouchableOpacityStyle}
                        onPress={() => 
                            this.props.navigation.navigate('GeneratorScreen',
                            { name: 'periodicElement'}
                        )}
                    >
                        <View style={styles.buttonStyle}/>
                        <View style={{flexDirection: 'row', marginTop: -62, marginRight: 40}}>
                            <Text style={styles.buttonTextStyle}>Periodic Elements</Text>
                            <View style={[
                                styles.iconStyle,
                                {borderWidth: 2, borderColor: 'white'}
                                ]}>
                                <Text style={{color: 'white', fontSize: 18}}>Mg</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TransparentButton
                        Title={'Physics'}
                        iconName={'md-cog'}
                    />
                    <TransparentButton
                        Title={'Chemistry'}
                        iconName={'ios-flask'}
                    />
                    <TransparentButton
                        Title={'Mathematics'}
                        iconName={'md-infinite'}
                    />
                    <TransparentButton
                        Title={'Biology'}
                        iconName={'ios-leaf'}
                    />

                    <Text style={[styles.catName, {marginTop:20}]}>Information Technology</Text>
                            
                    <TransparentButton
                        Title={'Coding'}
                        iconName={'md-code-working'}
                    />

                    <TransparentButton
                        Title={'Computer Hardware'}
                        iconName={'ios-desktop'}
                    />
                    
                    {this.showContents()}

                    <View style={{height: 30, width: '100%', backgroundColor: 'transparent'}}/>
                    
                </ScrollView>
            </ImageBackground>
        );
    }
}
export default Gaming;

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
        position: 'relative',
        top: '10%'
    },
    introText: {
        color: 'white',
        fontSize: 16
    },
    descText: {
        fontFamily: 'sans-serif-light',
        fontWeight: '100',
        fontSize: 18,
        color: 'white'
    },
    catName: {
        color: 'white',
        marginLeft: 25,
        fontSize: 16,
        marginBottom: 0,
    },
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
        borderColor: 'white'
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
    }

});
