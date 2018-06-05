import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Button,
    TouchableOpacity
    } from 'react-native';
import '../../KeywordsDatabase';

class NormalGeneratorLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrayOfNames: [],
            title: '',
            currentName: 'SOMETHING',
        }
    }

    /*generateName() {
        let firstName = '';
        let secondName = '';
        //let i = Math.floor(Math.random*this.state)

        firstName = this.state.arrayOfNames[0][1];
        secondName = this.state.arrayOfNames[1][1];

        this.state.currentName = firstName + secondName;


    }*/
    

    render() {
        const name = this.props.navigation.getParam('name', '');
        switch(name) {
            case 'periodicElement':
                this.state.arrayOfNames = global.PeriodicElementsArray
                this.state.title = 'Periodic Elements'
                break;
        };

        return (
            <ImageBackground
                source={require('../../resources/Background.png')}
                style={{width: '100%', height: '110%'}}
            >
                <View style={styles.mainView}>
                    <Text style={styles.titleStyle}>{this.state.title}</Text>
                    <Text style={styles.generatedNameStyle}>{this.state.currentName}</Text>

                    <TouchableOpacity
                        style={styles.touchableStyle}
                    >
                        <View style={styles.buttonStyle}>
                            <Text style={{color: 'white', fontSize: 16}}>Generate</Text> 
                        </View>
                    </TouchableOpacity>

                    <Text style={{color: 'white', position: 'relative', top: '40%'}}>Names generated:</Text>

                </View>
            </ImageBackground>
        );
    }
}
export default NormalGeneratorLayout;

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
    },
    titleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif-light',
        fontWeight: '100',
        marginTop: '10%',
    },
    generatedNameStyle: {
        color: 'white',
        marginTop: '20%',
        fontSize: 38,
        fontWeight: '900'
    },
    buttonStyle: {
        borderColor: 'white',
        borderWidth: 1,
        marginRight: 40,
        marginLeft: 40,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    touchableStyle: {
        height: 40,
        width: '100%',
        position: 'relative',
        top: '25%',
    }
});
