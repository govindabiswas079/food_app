import React, { Fragment, useRef, useState } from 'react'
import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import { homemadeIcon, } from '../assets/Icons'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Row, Col } from 'react-native-responsive-grid-system'

const SLIDER_WIDTH = Dimensions.get('window').width;

const data = [
    {
        id: 1,
        Title: 'Special Offer for March',
        SubTitle: 'We are here with the best deserts intown.',
        Button: 'Buy Now',
        url: homemadeIcon,
    },
    {
        id: 2,
        Title: 'Special Offer for March',
        SubTitle: 'We are here with the best deserts intown.',
        Button: 'Buy Now',
        url: homemadeIcon,
    },
    {
        id: 3,
        Title: 'Special Offer for March',
        SubTitle: 'We are here with the best deserts intown.',
        Button: 'Buy Now',
        url: homemadeIcon,
    },
];

const CarouselOffers = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    return (
        <Fragment>
            <View style={{ marginVertical: 10, }}>
                <Carousel
                    ref={isCarousel}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <LinearGradient
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#ff1b1b', '#ff7979cf',]}
                                style={{ marginHorizontal: 15, borderRadius: 10, paddingTop: 20, overflow: 'hidden', }} >
                                <Row>
                                    <Col xs={4} sm={4} md={4} lg={4}>
                                        <View style={{ flexDirection: 'column', paddingLeft: 15, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '900', lineHeight: 16.47, paddingTop: 5 }}>{item?.Title}</Text>
                                            <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: '500', lineHeight: 9.1, paddingTop: 5 }}>{item?.SubTitle}</Text>
                                            <Pressable style={{ marginTop: 20, backgroundColor: '#FFFFFF', width: 100, alignItems: 'center', justifyContent: 'center', paddingTop: 8, paddingBottom: 8, borderRadius: 3, }}>
                                                <Text style={{ color: '#FF0000', fontSize: 16, fontWeight: '500' }}>{item?.Button}</Text>
                                            </Pressable>
                                        </View>
                                    </Col>
                                    <Col xs={7} sm={7} md={7} lg={7}>
                                        <View>
                                            <Image source={item?.url} resizeMode='cover' style={{ height: 175, width: 289 }} />
                                        </View>
                                    </Col>
                                </Row>
                            </LinearGradient>
                        );
                    }}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={SLIDER_WIDTH}
                    onSnapToItem={index => setIndex(index)}
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 14,
                        height: 14,
                        borderRadius: 50,
                        backgroundColor: '#FF0000',
                    }}
                    tappableDots={true}
                    inactiveDotStyle={{
                        backgroundColor: '#E2E2E2',
                        width: 14,
                        height: 14,
                        borderRadius: 50,
                    }}
                    inactiveDotOpacity={10}
                    inactiveDotScale={1}
                />
            </View>
        </Fragment>
    )
}

export default CarouselOffers