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
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';

import IconFW from 'react-native-vector-icons/Ionicons';

const IconBar = ({Name, Color, Change}) =>{
  
    return(
      <TouchableWithoutFeedback style={styles.iconContainer} onPress={Change}>
        <IconFW name={Name} size={26} color={Color}/>
      </TouchableWithoutFeedback>
    )
  
  }

function ButtonCubeSmall({iconName, iconSize, iconColor, colorP, colorS}){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorS, borderColor: iconColor}]}>
           <IconBar Name={iconName} Color={iconColor}/>
        </View>
    )
}

export default ButtonCubeSmall;