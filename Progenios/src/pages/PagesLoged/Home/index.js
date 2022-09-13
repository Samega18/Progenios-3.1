import React,{ Component, useState, useEffect } from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
  Image,
  View,
} from 'react-native';
import styles from './styles';

function Home(){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <Text style={{color: "black"}}>Home</Text>
        </View>
    )
}

export default Home;