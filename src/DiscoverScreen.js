import React from 'react'
import {FlatList, Image, StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native'
import {Button, Container, Content, Header, ListItem, Text} from "native-base";
import jsonData from '../assets/example'
import {NavigationActions} from "react-navigation";

export default class DiscoverScreen extends React.Component {

    static navigationOptions = {
        title: 'Discover',
        tabBarLabel: 'Discover',
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
            <TouchableOpacity
                style={styles.gridItemStyles}
                onPress={this.onItemClicked.bind(this, item)}>
                <Text style={styles.textStyles}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={3}
                    data={jsonData.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    gridItemStyles: {
        margin: 8,
        height: 100,
        width: width * 0.45,
        backgroundColor: '#ffca2f',
        flex: 1,
        justifyContent: 'flex-end'
    },
    textStyles: {
        marginBottom: '20%',
        textAlign: 'center'
    },
    icon: {
        width: 26,
        height: 26
    },
});