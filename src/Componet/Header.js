import React, { Fragment } from 'react'
import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import AppHeader from '../AppHeader/AppHeader'
import { LocationIcon, ProfileIcon, homemadeIcon, } from '../assets/Icons'

const Header = () => {
    return (
        <Fragment>
            <AppHeader style={{ backgroundColor: '#FFFFFF', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <Pressable>
                    <View style={{ backgroundColor: '#000000', width: 18, height: 3.5, borderRadius: 50, margin: 2 }} />
                    <View style={{ backgroundColor: '#000000', width: 22, height: 3.5, borderRadius: 50, margin: 2 }} />
                    <View style={{ backgroundColor: '#000000', width: 18, height: 3.5, borderRadius: 50, margin: 2 }} />
                </Pressable>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={LocationIcon} style={{ width: 11, height: 11 }} resizeMode='stretch' />
                    <Text style={{ paddingLeft: 8, fontWeight: '500', fontSize: 14, lineHeight: 28, color: '#4B5563' }}>Freedom way, Lekki phase</Text>
                </Pressable>
                <Pressable style={{ width: 32, height: 32, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={ProfileIcon} style={{ width: '100%', height: '100%' }} resizeMode='stretch' />
                </Pressable>
            </AppHeader>
        </Fragment>
    )
}

export default Header