/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text as RNText
} from 'react-native';

import {Button, Container, Content, Header, Text} from 'native-base';

export default class App extends Component<{}> {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <Button rounded>
                        <Text style={styles.textStyles}>Click Me!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const platformColor = Platform.select({
    ios: {
        color: '#fffd1a'
    },
    android: {
        color: '#ff00ff'
    }
})

const styles = StyleSheet.create({
    textStyles: {
        // color: Platform.OS === 'ios' ? '#fffd1a' : '#ff00ff'
        ...platformColor
    }
});
