import React,{ Component, useState, useEffect } from 'react';
import {Node} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import ButtonCubeSmall from '../../../components/ButtonCubeSmall';
import styles from './styles';

import IconFW from 'react-native-vector-icons/Ionicons';

import ImgProfile from '../../../assets/home/rock.png'

function Home(){

    // branco #F5F5F5
    // azul #4e8df3

    const navigation = useNavigation();

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.containerTop}>
                <View style={styles.homeTop}>
                    <IconFW name="md-reorder-three" size={50} color={colorPrimary}/>
                    <ButtonCubeSmall iconName="ios-notifications" iconColor={colorPrimary} colorS={colorSecundary}/>
                    <ButtonCubeSmall iconName="md-cart" iconColor={colorPrimary} colorS={colorSecundary}/>
                    <ButtonCubeSmall iconName="ios-library" iconColor={colorPrimary} colorS={colorSecundary}/>
                    <ButtonCubeSmall iconName="md-cash" iconColor={colorPrimary} colorS={colorSecundary}/>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                        <Image source={ImgProfile} style={[styles.topImage, {borderColor: colorPrimary}]}/>
                        {/* <IconFW name="md-radio-button-on" size={50} color={colorPrimary} onPress={() => navigation.navigate('Profile')}/> */}
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.homeMid}>

                </View>
                <View style={styles.homeBottom}>

                </View>
            </View>
            <View style={styles.containerBottom}>
                
            </View>
        </View>
    )
}

export default Home;