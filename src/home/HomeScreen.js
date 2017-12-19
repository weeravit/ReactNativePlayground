import React from 'react'
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native'
import {Button, Container, Content, Header, ListItem, Text} from "native-base";
import {NavigationActions} from "react-navigation";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from './HomeAction'

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../assets/user.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    componentDidMount() {
        this.props.actions.loadData();
    }

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
            <ListItem
                onPress={this.onItemClicked.bind(this, item)}>
                <Text>{item.name}</Text>
            </ListItem>
        )
    };

    render() {
        const {data} = this.props.home;

        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        )
    }
}

const {width, height} = Dimensions.get('window')

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

const mapStateToProps = ({home}) => {
    return {
        home
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);