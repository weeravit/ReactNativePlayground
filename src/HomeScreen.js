import React from 'react'
import {Image, StyleSheet} from 'react-native'
import JenosizeButton from './common/JenosizeButton'
import {Button, Container, Content, Header} from "native-base";
import {NavigationActions} from 'react-navigation'

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    onButtonClicked = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'DetailStack',
            params: { isBack: true },
        });

        this.props.navigation.dispatch(navigateAction)
    };

    render() {
        return (
            <Container>
                <Content>
                    <JenosizeButton onPress={this.onButtonClicked} title={'Primary'}/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    },
});