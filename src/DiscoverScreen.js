import React from 'react'
import {Image, StyleSheet} from 'react-native'
import {Container, Content} from "native-base";
import JenosizeButton from "./common/JenosizeButton";
import {NavigationActions} from "react-navigation";

export default class DiscoverScreen extends React.Component {

    static navigationOptions = {
        title: 'Discover',
        tabBarLabel: 'Discover',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../assets/fav.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    onButtonClicked = () => {
        const navigateAction = NavigationActions.navigate({
            routeName: 'DetailDiscoverScreen',
            params: { isBack: false },
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