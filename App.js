/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Root} from "native-base";

import SettingsLayout from "./src/layouts/SettingsLayout";
import HeaderBar from "./src/components/HeaderBar";
import MainLayout from "./src/layouts/MainLayout";
import SideBar from "./src/components/Sidebar";
import storage from "./src/Utils/Storage"

const Drawer = createDrawerNavigator(
// const App = createDrawerNavigator(
    {
        MainLayout: {
            screen: MainLayout,
            navigationOptions: {
                drawerLabel: 'MainLayout'
            }
        },
        SettingsLayout: {
            screen: SettingsLayout,
            navigationOptions: {
                drawerLabel: 'SettingsLayout'
            }
        }
    },
    {
        initialRouteName: 'MainLayout',//设置默认打开的页面
        contentComponent: props => <SideBar {...props} />
    }
);

// const App = createStackNavigator(
//     {
//         DrawerNav: {   //全部的抽屉导航
//             screen: Drawer,
//             navigationOptions: {}
//         }
//     },
//     {
//         //TODO: 替换为HeaderBar
//         contentComponent: props => <HeaderBar {...props} />
//     }
// );

// export default App;

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Root>
                <Drawer />
            </Root>
        );
    }
}
