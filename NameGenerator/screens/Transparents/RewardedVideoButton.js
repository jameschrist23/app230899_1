import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    } from 'react-native';
import { AdMobRewarded } from 'react-native-admob';
import Ionicons from 'react-native-vector-icons/Ionicons';

class RewardedVideoButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adIsLoaded: true,
        }
    }

    componentDidMount()  {
        AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
        AdMobRewarded.requestAd().then(()=>this.setState({ adIsLoaded: true }));

        AdMobRewarded.addEventListener('adLoaded', () => {
            this.setState({ adIsLoaded: true });
        });

        AdMobRewarded.addEventListener('adClosed',() => {
            console.log('AdMobRewarded => adClosed');
            AdMobRewarded.requestAd().then(()=>this.setState({ adIsLoaded: true }));
        });

        AdMobRewarded.addEventListener('rewarded',
            (reward) => console.log('AdMobRewarded => rewarded', reward)
        );

        AdMobRewarded.addEventListener('adFailedToLoad',() => {
            AdMobRewarded.requestAd().then(()=>this.setState({ adIsLoaded: true }));
        });
    }

    componentWillUnmount() {
        AdMobRewarded.removeAllListeners();
      }

    buttonPress() {
       AdMobRewarded.showAd().then(() => this.setState({ adIsLoaded: false }));
    }

    showSpinnerOrText() {
        if ( this.state.adIsLoaded === true ){
            return(
                <Text style={styles.buttonTextStyle}>Watch an ad to unlock two more :)</Text>
            );
        }
        else if ( this.state.adIsLoaded === false ){
            return(
                <ActivityIndicator size={25} style={styles.spinner} color={'#fff'}/>
            );
        }

    }

    render() {
        return (
            <TouchableOpacity
                style={styles.TouchableOpacityStyle}
                onPress={() => this.buttonPress()}
            >
                <View style={styles.buttonStyle}/>
                <View style={{marginTop: -54, alignItems: 'center'}}>
                    <Text style={[styles.buttonTextStyle,{fontSize: 9}]}>
                        On your way to the wonderland, you stumble upon a troll who says:
                    </Text>
                    {this.showSpinnerOrText()}
                </View>
            </TouchableOpacity>
        );
    }
}

export default RewardedVideoButton;

const styles = StyleSheet.create({
    buttonStyle: {
        height: '80%',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        backgroundColor: '#1c1c1c',
        opacity: 0.35,
        borderWidth: 0,
        borderRadius: 0,
        borderColor: 'white',
    },
    buttonTextStyle: {
        fontSize: 18,
        fontFamily: 'sans-serif-light',
        fontWeight: '100',
        color: 'white',
    },
    TouchableOpacityStyle: {
        width: '100%',
        height: 65,
        marginBottom: 0,
        marginTop: -10
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