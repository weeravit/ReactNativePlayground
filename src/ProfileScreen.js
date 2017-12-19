import React from 'react'
import {FlatList, Image, StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native'
import {Button, Container, Content, Header, ListItem, Text} from "native-base";
import jsonData from '../assets/example2'
import {NavigationActions} from "react-navigation";

export default class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile',
        tabBarLabel: 'Profile',
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

    renderGridItem({item}) {
        return (
            <TouchableOpacity
                style={styles.gridItemStyles}
                onPress={this.onItemClicked.bind(this, item)}>
                <Text style={styles.textStyles}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    renderListItem({item}) {
        return (
            <ListItem
                onPress={this.onItemClicked.bind(this, item)}>
                <Text>{item.name}</Text>
            </ListItem>
        )
    };

    renderHorizontalListItem({item}) {
        return (
            <TouchableOpacity
                style={styles.horizontalItemStyles}
                onPress={this.onItemClicked.bind(this, item)}>
                <Text style={styles.textStyles}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    renderGrids(items) {
        return (
            <View style={{flex: 1}}>
                <Text style={{backgroundColor: '#cccccc', height: 30}}>{`${items.type} section`}</Text>

                <FlatList
                    numColumns={3}
                    data={items.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderGridItem.bind(this)}
                />
            </View>
        )
    }

    renderList(items) {
        return (
            <View style={{flex: 1}}>
                <Text style={{backgroundColor: '#cccccc', height: 30}}>{`${items.type} section`}</Text>

                <FlatList
                    data={items.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderListItem.bind(this)}
                />
            </View>
        )
    }

    renderHorizontalList(items) {
        return (
            <View style={{flex: 1}}>
                <Text style={{backgroundColor: '#cccccc', height: 30}}>{`${items.type} section`}</Text>

                <FlatList
                    horizontal
                    data={items.data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderHorizontalListItem.bind(this)}
                />
            </View>
        )
    }

    renderItem({item}) {
        switch (item.type) {
            case 'topten':
                return this.renderGrids(item)
            case 'best-seller':
                return this.renderHorizontalList(item)
            case 'recommend':
                return this.renderList(item)
        }
    }

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
    horizontalItemStyles: {
        margin: 8,
        height: 100,
        width: 100,
        backgroundColor: '#ff7848',
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