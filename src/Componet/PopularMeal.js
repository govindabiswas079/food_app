import React, { Fragment, } from 'react'
import { View, Text, Image, } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Photo_MenuIcon, } from '../assets/Icons'

const PopularMeal = () => {
    return (
        <Fragment>
            <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#000000' }}>Popular Meal Menu</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16, color: '#3B3B3B80' }}>See All  <AntDesign name='caretright' size={16} color={'#3B3B3B80'} /></Text>
                </View>

                <View style={{ backgroundColor: "#FFFFFF", elevation: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, borderRadius: 7 }}>
                    <Image source={Photo_MenuIcon} />
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500', lineHeight: 19.65 }}>Pepper Pizza</Text>
                        <Text style={{ color: '#3B3B3B', fontSize: 14, fontWeight: '500', lineHeight: 16.41, letterSpacing: .5 }}>5kg box of Pizza</Text>
                    </View>
                    <View style={{ flexGrow: 1 }} />
                    <Text style={{ color: '#FF0000', fontSize: 22, fontWeight: '800', lineHeight: 28.3, }}>$15</Text>
                </View>
                <View style={{ backgroundColor: "#FFFFFF", elevation: 6, padding: 10, flexDirection: 'row', alignItems: 'center', marginVertical: 10, borderRadius: 7 }}>
                    <Image source={Photo_MenuIcon} />
                    <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#000000', fontSize: 15, fontWeight: '500', lineHeight: 19.65 }}>Pepper Pizza</Text>
                        <Text style={{ color: '#3B3B3B', fontSize: 14, fontWeight: '500', lineHeight: 16.41, letterSpacing: .5 }}>5kg box of Pizza</Text>
                    </View>
                    <View style={{ flexGrow: 1 }} />
                    <Text style={{ color: '#FF0000', fontSize: 22, fontWeight: '800', lineHeight: 28.3, }}>$15</Text>
                </View>
            </View>
        </Fragment>
    )
}

export default PopularMeal