/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';

import {Button, Container, Content, Header, Text} from 'native-base';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.containerStyles}>
                <View style={styles.contentStyles}>
                    <View style={styles.itemStyles}/>

                    <Button rounded style={styles.buttonStyles}>
                        <Text style={styles.textStyles}>Click Me!</Text>
                    </Button>
                </View>

                <View style={styles.bottomBarStyles}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyles: {
        flex: 1
    },
    buttonStyles: {
        alignSelf: 'center'
    },
    itemStyles: {
        width: 50,
        height: 50,
        backgroundColor: '#ff0e16'
    },
    textStyles: {
        color: Platform.OS === 'ios' ? '#fffd1a' : '#ff00ff'
    },
    contentStyles: {
        flex: 0.9,
        backgroundColor: '#ff00ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBarStyles: {
        flex: 0.1,
        backgroundColor: '#0f0fff'
    }
});
