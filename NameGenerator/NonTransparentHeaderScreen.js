import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { createTabNavigator } from 'react-navigation';
import CategoryScreen from './screens/CategoryScreen';
import NickCatScreen from './screens/NickCatScreen';
import RealCatScreen from './screens/RealCatScreen';

export default class NonTransparentHeaderScreen extends Component {
    render() {
        return (
            <NonTransparentTabNav
                screenProps={{ rootNavigation: this.props.navigation }}
            />
        );
    }
}

const NonTransparentTabNav = createTabNavigator(
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
    }
)