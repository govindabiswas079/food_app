import React, { Fragment } from 'react'
import { View, TextInput, } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
    return (
        <Fragment>
            <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
                <LinearGradient colors={['#FFF0F0', '#FFDFDF',]} style={{ flexDirection: 'row', alignItems: 'center', height: 50, borderRadius: 7, backgroundColor: '#FFF0F0', paddingHorizontal: 15 }}>
                    <Feather name={'search'} color={'#000000'} size={18} />
                    <TextInput placeholder='Search' placeholderTextColor={'#000000'} style={{ fontSize: 14, color: '#000000', fontFamily: 'RobotoCondensed-Regular', fontWeight: '500', paddingHorizontal: 15, flex: 1 }} />
                </LinearGradient>
            </View>
        </Fragment>
    )
}

export default Search