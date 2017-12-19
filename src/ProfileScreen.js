import React from 'react'
import {Image, StyleSheet, Text} from 'react-native'

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/res.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Text>ProfileScreen</Text>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    },
});