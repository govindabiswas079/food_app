import React, { Fragment, useState } from 'react'
import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { pizzaIcon, sandwichIcon, burgerIcon, burIcon, pngfindIcon, StarIcon } from '../assets/Icons'
import { Row, Col } from 'react-native-responsive-grid-system'

const Categorys = () => {
    const [selectIndex, setSelectIndex] = useState(0);

    return (
        <Fragment>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, }}>
                    {data1?.map((value, index) => {
                        return (
                            <Pressable onPress={() => setSelectIndex(index)} key={index} style={{ backgroundColor: selectIndex === index ? '#FF0000' : 'transparent', borderWidth: 1, borderColor: '#FF0000', borderRadius: 7, flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingBottom: 8, paddingLeft: 20, paddingRight: 20, margin: index === 0 ? 0 : 10 }}>
                                <View style={{ width: 24, height: 24 }}>
                                    <Image source={value?.url} style={{ width: '100%', height: '100%' }} resizeMode='stretch' />
                                </View>
                                <Text style={{ color: selectIndex === index ? '#FFFFFF' : '#000000', fontSize: 18, fontWeight: '900', lineHeight: 16.7, paddingLeft: 10, }}>{value?.Title}</Text>
                            </Pressable>
                        )
                    })}
                </View>
            </ScrollView>

            <View style={{ paddingHorizontal: 15, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <View style={{ padding: 10, width: '100%', elevation: 6, backgroundColor: '#FFFFFF', borderRadius: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                <Image source={StarIcon} />
                                <Text style={{ fontWeight: '500', fontSize: 16, color: '#0D0D0D', paddingLeft: 6 }}>4.3</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                <Image source={pngfindIcon} />
                            </View>
                            <View style={{ paddingVertical: 15 }}>
                                <Text style={{ fontWeight: '500', fontSize: 18, color: '#0D0D0D', lineHeight: 21.09, }}>Chicken burger</Text>
                                <Text style={{ fontWeight: '500', fontSize: 12, color: '#3B3B3B', lineHeight: 14.06, paddingTop: 10 }}>100 gr chicken + tomato + cheese  Lettuce</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                                <Text style={{ fontWeight: '900', fontSize: 14, color: '#FF0000' }}>$ 20.<Text style={{ fontWeight: '500', fontSize: 12, color: '#FF0000' }}>00</Text></Text>
                                <View style={{ backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30 }}>
                                    <Feather name='plus' size={20} color={'#FFFFFF'} />
                                </View>
                            </View>
                        </View>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6}>
                        <View style={{ padding: 10, width: '100%', elevation: 6, backgroundColor: '#FFFFFF', borderRadius: 10, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                <Image source={StarIcon} />
                                <Text style={{ fontWeight: '500', fontSize: 12, color: '#0D0D0D', lineHeight: 14.06, paddingLeft: 6 }}>3.4</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                <Image source={burIcon} />
                            </View>
                            <View style={{ paddingVertical: 15 }}>
                                <Text style={{ fontWeight: '500', fontSize: 18, color: '#0D0D0D', lineHeight: 21.09, }}>Chese burger</Text>
                                <Text style={{ fontWeight: '500', fontSize: 12, color: '#3B3B3B', lineHeight: 14.06, paddingTop: 10 }}>100 gr meat + onion + tomato + Lettuce cheese</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 }}>
                                <Text style={{ fontWeight: '900', fontSize: 14, color: '#FF0000' }}>$ 15.<Text style={{ fontWeight: '500', fontSize: 12, color: '#FF0000' }}>00</Text></Text>
                                <View style={{ backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center', borderRadius: 50, width: 30, height: 30 }}>
                                    <Feather name='plus' size={20} color={'#FFFFFF'} />
                                </View>
                            </View>
                        </View>
                    </Col>
                </Row>
            </View>
        </Fragment>
    )
}

export default Categorys

const data1 = [
    {
        id: 1,
        Title: 'Burger',
        url: burgerIcon,
    },
    {
        id: 2,
        Title: 'Pizza',
        url: pizzaIcon,
    },
    {
        id: 3,
        Title: 'Sandwich',
        url: sandwichIcon,
    },
    {
        id: 4,
        Title: 'Burger',
        url: burgerIcon,
    },
    {
        id: 5,
        Title: 'Pizza',
        url: pizzaIcon,
    },
    {
        id: 6,
        Title: 'Sandwich',
        url: sandwichIcon,
    },
];