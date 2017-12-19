import React from 'react'
import {StyleSheet} from 'react-native'
import {Button, Text} from 'native-base'

const JenosizeButton = (props) => {

    return (
        <Button onPress={props.onPress} block style={styles.buttonStyles}>
            <Text>{props.title}</Text>
        </Button>
    )
};

const styles = StyleSheet.create({
    buttonStyles: {
        backgroundColor: '#ff00ff'
    },
});

export default JenosizeButton;