import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
    HomeScreen,
    UserScreen,
    CartScreen,
    MessageScreen,
} from '../Screens'
import { Text, View, Image } from 'react-native';
import { HomeIcon } from '../assets/Icons';

const Tab = createBottomTabNavigator();
const ButtomNavigation = () => {

    return (
        <Fragment>
            <Tab.Navigator
                initialRouteName="HomeScreen"
                // tabBar={() => null}
                screenOptions={{
                    tabBarInactiveTintColor: '#67748E',
                    tabBarActiveTintColor: '#4646F2',
                    // tabBarStyle: { display: isTabHide ? 'flex' : 'none', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, paddingBottom: 10, height: 65, backgroundColor: '#FFFFFF', },
                    tabBarStyle: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, paddingBottom: 10, height: 100, backgroundColor: '#FFFFFF', },
                    tabBarHideOnKeyboard: true,
                    tabBarVisible: true,
                    safeAreaInset: {
                        bottom: "always"
                    },
                    headerShown: false,
                    tabBarShowLabel: false
                }}
            >

                <Tab.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        tabBarLabelStyle: {
                            fontFamily: 'OpenSans-Regular', fontSize: 12
                        },
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <Fragment>
                                    {focused ?
                                        <View style={{ backgroundColor: '#ffe6e6', borderRadius: 12, /* paddingTop: 20, paddingBottom: 20, */ paddingRight: 25,paddingLeft: 20,paddingBottom: 15,paddingTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={HomeIcon} />
                                            <Text style={{ color: '#000000', fontSize: 14, fontWeight: '500', paddingLeft: 15 }}>Home</Text>
                                        </View>
                                        :
                                        <Octicons name="home" color={color} size={20} />
                                    }
                                </Fragment>
                            )
                        },
                    }}
                />
                <Tab.Screen
                    name="UserScreen"
                    component={UserScreen}
                    options={{
                        tabBarLabelStyle: {
                            fontFamily: 'OpenSans-Regular', fontSize: 12
                        },
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5 name="user" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="CartScreen"
                    component={CartScreen}
                    options={{
                        tabBarLabelStyle: {
                            fontFamily: 'OpenSans-Regular', fontSize: 12
                        },
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="shopping-cart" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="MessageScreen"
                    component={MessageScreen}
                    options={{
                        tabBarLabelStyle: {
                            fontFamily: 'OpenSans-Regular', fontSize: 12
                        },
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="message1" color={color} size={20} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </Fragment>
    )
}

export default ButtomNavigation