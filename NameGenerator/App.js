import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
//===========================================================================//
import NonTransparentHeaderScreen from './NonTransparentHeaderScreen';
import TransparentHeaderScreen from './TransparentHeaderScreen';
//===========================================================================//
import CategoryScreen from './screens/CategoryScreen';
import NickCatScreen from './screens/NickCatScreen';
import RealCatScreen from './screens/RealCatScreen';
//===========================================================================//
import Business from './screens/Transparents/Business';
import Character from './screens/Transparents/Character';
import Gaming from './screens/Transparents/Gaming';
import Youtube from './screens/Transparents/Youtube';
import NormalGeneratorLayout from './screens/Transparents/NormalGeneratorLayout';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //adBannerLoaded: false,
      adInterstitialLoaded: false,
    }
  }

  componentDidMount() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-4820913177449535/4335388578');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd()
      .then(() => AdMobInterstitial.showAd())
      .then(() => this.setState({ adInterstitialLoaded: true}));
    AdMobInterstitial.addEventListener('adFailedToLoad',
        () => this.setState({ adInterstitialLoaded: true }));
    SplashScreen.hide();
  }

  showContent() {
    if (this.state.adInterstitialLoaded === true) {
      return(
        <View style={styles.contentStyle}>
          <AppStackNavigator/>
        </View>
      )
    } else {
      
      return(
        <ImageBackground
          source={require('./resources/Background.png')}
          style={{ height: '100%', width: '100%' }}
        >
          <Text style={styles.upperTextStyle}>"Patience you must have"</Text>
          <Text style={styles.bottomTextStyle}>-Master Yoda-</Text>
          <ActivityIndicator size={40} style={styles.spinner} color={'#fff'}/>
          <Image
            /*source={require('./resources/LOGOsmall.png')}
            style={{
              height: 150,
              width: 150,
              flex: 1,
              alignSelf: 'center',
              resizeMode: 'contain',
              position: 'relative',
              top: '15%'
            }}*/
          />
          <Text style={styles.loadingTextStyle}>Fetching data from the surface web</Text>
        </ImageBackground>
      )
    }
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {this.showContent()}
      </View>
    )
  }
}

const AppStackNavigator = createStackNavigator(
  {
  //==========================================================================//
  //=======================NON TRANSPARENT  INTRO SCREEN======================//
  //==========================================================================//

    nonTransparent: {
      screen: createTabNavigator(
        {
            NickCategory: {
                screen: NickCatScreen,
            },
            Category: {
                screen: CategoryScreen,
            },
            RealCategory: {
                screen: RealCatScreen,
            },
        },
        {
            initialRouteName: 'Category',
            navigationOptions: {
                tabBarVisible: false,
                swipeEnabled: false,
            },
        }),
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }}/>
        ),
        headerRight: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }} />
        ),
        headerTitle: (
          <Image 
            source={require('./resources/NameitLogo.png')}
            style = {{ height: 40, width: 30, flex: 1, resizeMode: 'contain' }}
          />
        ),
        headerTitleStyle: {
            alignSelf: 'center',
            width: '100%',
        },
        headerStyle: {
            height: 56,
            elevation: 0,
            backgroundColor: '#061a2c',
            elevation: 0
        }
    })
    },

    //==========================================================================//
    //==========================SUB CATEGORIES SCREEN===========================//
    //==========================================================================//
    
    GamingName: {
      screen: createTabNavigator(
        {
          HomeScreen: {
            screen: Gaming,
          },
          GeneratorScreen: {
            screen: NormalGeneratorLayout,
          },
        },
        {
          navigationOptions: {
            tabBarVisible: false,
            swipeEnabled: false,
          },
        }),
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }}/>
        ),
        headerRight: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }} />
        ),
        headerTitle: (
          <Image 
            source={require('./resources/NameitLogo.png')}
            style = {{ height: 40, width: 30, flex: 1, resizeMode: 'contain' }}
          />
        ),
        headerTitleStyle: {
            alignSelf: 'center',
            width: '100%',
        },
        headerStyle: {
            height: 56,
            elevation: 0,
            backgroundColor: '#004175',
            elevation: 0
        }
      }),
    },
    //==========================================================================//

    YoutubeName: {
      screen: Youtube,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }}/>
        ),
        headerRight: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }} />
        ),
        headerTitle: (
          <Image 
            source={require('./resources/NameitLogo.png')}
            style = {{ height: 40, width: 30, flex: 1, resizeMode: 'contain' }}
          />
        ),
        headerTitleStyle: {
            alignSelf: 'center',
            width: '100%',
        },
        headerStyle: {
            height: 56,
            elevation: 0,
            backgroundColor: '#transparent',
            elevation: 0
        }
      }),
    },

    //==========================================================================//

    BusinessName: {
      screen: Business,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }}/>
        ),
        headerRight: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }} />
        ),
        headerTitle: (
          <Image 
            source={require('./resources/NameitLogo.png')}
            style = {{ height: 40, width: 30, flex: 1, resizeMode: 'contain' }}
          />
        ),
        headerTitleStyle: {
            alignSelf: 'center',
            width: '100%',
        },
        headerStyle: {
            height: 56,
            elevation: 0,
            backgroundColor: '#transparent',
            elevation: 0
        }
      }),
    },

    //==========================================================================//

    FantasyName: {
      screen: Character,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }}/>
        ),
        headerRight: (
            <View style={{ paddingLeft: 17, paddingTop: 0, width: 60, flex: 1 }} />
        ),
        headerTitle: (
          <Image 
            source={require('./resources/NameitLogo.png')}
            style = {{ height: 40, width: 30, flex: 1, resizeMode: 'contain' }}
          />
        ),
        headerTitleStyle: {
            alignSelf: 'center',
            width: '100%',
        },
        headerStyle: {
            height: 56,
            elevation: 0,
            backgroundColor: '#transparent',
            elevation: 0
        }
      }),
    }

    //==========================================================================//
    //========================SUB SUB CATEGORIES SCREEN=========================//
    //==========================================================================//
  },
  {
    initialRouteName: 'nonTransparent',
  }
)

const styles = StyleSheet.create({
  adStyle: {
    flex: 0,
    justifyContent: 'flex-end',
  },
  contentStyle: {
    flex: 1
  },
  spinner: {
    position: 'relative',
    top: '43%'
  },
  upperTextStyle: {
    position: 'relative',
    top: '40%',
    flex: 0,
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: '100',
    fontFamily: 'sans-serif-light'
  },
  bottomTextStyle: {
    position: 'relative',
    top: '41%',
    flex: 0,
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '100',
    fontFamily: 'sans-serif-light'
  },
  loadingTextStyle: {
    position: 'relative',
    top: '47%',
    flex: 0,
    alignSelf: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: '100',
    fontFamily: 'sans-serif-light',
    marginTop: -5
  },
})

/*<View style={styles.adStyle}>
        <AdMobBanner
            adSize="smartBanner"
            adUnitID="ca-app-pub-4820913177449535/9554989887"
            testDevices={[AdMobBanner.simulatorId]}
            onAdLoaded={() => this.setState({ adBannerLoaded: true })}
            onAdFailedToLoad={() => this.setState({ adBannerLoaded: true })}
          />
        </View>*/
      