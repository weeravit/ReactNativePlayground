import React from 'react'
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Button, Container, Content, Header, ListItem, Text} from "native-base";
import jsonData from '../assets/example'
import {NavigationActions} from "react-navigation";

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

    onItemClicked(item) {
        const navigateAction = NavigationActions.navigate({
            routeName: 'DetailStack',
            params: {
                isBack: true,
                item
            }
        });

        this.props.navigation.dispatch(navigateAction)
    };

    renderItem({item}) {
        return (
            <ListItem onPress={this.onItemClicked.bind(this, item)}>
                <Text>{item.name}</Text>
            </ListItem>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={jsonData.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    icon: {
        width: 26,
        height: 26
    },
});