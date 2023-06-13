import React, { Fragment, } from 'react'
import { View, ScrollView } from 'react-native'
import { StatusBar } from '../StatusBar'

import { Header, Search, CarouselOffers, Categorys, PopularMeal } from '../Componet'


const HomeScreen = () => {

    return (
        <Fragment>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', }}>
                <StatusBar backgroundColor={'#ffffff'} />
                <Header />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Search />
                    <CarouselOffers />
                    <Categorys />
                    <PopularMeal />
                </ScrollView>
            </View >
        </Fragment >
    )
}

export default HomeScreen;
