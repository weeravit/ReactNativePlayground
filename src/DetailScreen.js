import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {Button, Container, Content, Header, Text} from "native-base";
import { NavigationActions } from 'react-navigation'

export default class DetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Detail',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    onBackClicked = () => {
        const backAction = NavigationActions.back({
            key: null
        })

        this.props.navigation.dispatch(backAction)
    }

    renderBackButton() {
        const { isBack } = this.props.navigation.state.params

        if (isBack) {
            return (
                <Button block onPress={this.onBackClicked}>
                    <Text>Back</Text>
                </Button>
            )
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.renderBackButton()}
                    <Button block>
                        <Text>Primary</Text>
                    </Button>
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