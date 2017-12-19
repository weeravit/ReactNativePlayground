import React from 'react';
import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation'
import HomeScreen from './src/home/HomeScreen'
import DetailScreen from './src/DetailScreen'
import DiscoverScreen from './src/discover/DiscoverScreen'
import ProfileScreen from './src/ProfileScreen'
import {Provider} from "react-redux";
import Store from './src/redux/store'

const TabStack = TabNavigator({
    HomeStack: {
        screen: StackNavigator({
            HomeScreen: {
                screen: HomeScreen
            }
        })
    },
    DiscoverStack: {
        screen: StackNavigator({
            DiscoverScreen: {
                screen: DiscoverScreen
            },
            DetailDiscoverScreen: {
                screen: DetailScreen
            }
        }, {
            header: null
        })
    },
    ProfileStack: {
        screen: StackNavigator({
            ProfileScreen: {
                screen: ProfileScreen
            }
        })
    }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63'
    }
});

const MainStackNavigator = StackNavigator({
    TabStack: {
        screen: TabStack
    },
    DetailStack: {
        screen: StackNavigator({
            DetailScreen: {
                screen: DetailScreen
            }
        })
    }
}, {
    headerMode: 'none'
});

const main = () => {
    return (
        <Provider store={Store}>
            <MainStackNavigator/>
        </Provider>
    )
}

export default main;