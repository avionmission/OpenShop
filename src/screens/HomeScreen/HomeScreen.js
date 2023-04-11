import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CarouselComponent from './components/CarouselComponent';
import products from '../../data/products'

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            {/* Header Section */}
            <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:15}}>
                {/* Replace this with your app logo */}
                <View style={{ flexDirection: 'row', }}><Text style={{ fontSize: 20, fontWeight: 800 }}>Open</Text><Text style={{ fontSize: 20, fontWeight: 800, color: '#FF9900' }}>Shop.</Text></View>
            
                <View style={{flexDirection: 'row'}}>
                {/* Account Button */}
                <TouchableOpacity><MaterialCommunityIcons name="account-circle-outline" style={styles.iconButton} size={24} color="black" /></TouchableOpacity>
                {/* Favorites Button */}
                <TouchableOpacity><MaterialCommunityIcons name="cards-heart-outline" style={styles.iconButton} size={24} color="black" /></TouchableOpacity>
                {/* Cart Button */}
                <TouchableOpacity><MaterialCommunityIcons name="cart-outline" style={styles.iconButton} size={24} color="black" /></TouchableOpacity>
                </View>
            </View>

            {/* Search Section */}
            <View style={styles.SearchBar}>
                <TextInput placeholder='Search for a product..' style={{flex:1}}/>
                <TouchableOpacity style={{flex:0}} onPress={() => navigation.navigate('DiscoverScreen')}><Feather name="search" size={24} color="grey" /></TouchableOpacity>
            </View>

            {/* Banners Carousel */}
            <CarouselComponent/>

            {/* Best Sellers Section */}
            <View style={styles.bestSellersContainer}>
                <Text style={styles.h2}>Best Sellers</Text>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', marginTop: 20, width: 144, marginRight: 18, }}>
                          <TouchableOpacity>
                            {/* Product thumbnail */}
                            <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
                            {/* Product title */}
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 15, marginTop: 6 }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                              {/* Price */}
                              <Text style={{ fontWeight: '700' }}>$ {item.price}</Text>
                              {/* Ratings */}
                              <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="star" size={18} color="#FFBE5B" />
                                <Text style={{ fontWeight: '700' }}>{item.rating}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )}
                      
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
    iconButton: {
        marginStart: 8,
    },
    SearchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
        marginTop: 15,
        paddingVertical: 9,
        paddingHorizontal: 15,
        borderRadius: 7,
        marginHorizontal: 15,
        marginBottom:15,
    },
    bestSellersContainer:{
        flexDirection: 'column',
        marginTop: 50,
        padding: 15,
    },
    h2: {
        fontSize: 20,
        fontWeight: 600,
    },
    thumbnail: {
        width: 144,
        height: 155,
        resizeMode: 'cover',
        borderRadius: 12,
    },
});

export default HomeScreen