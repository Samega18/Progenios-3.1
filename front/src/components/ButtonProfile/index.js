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
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import IconIo from 'react-native-vector-icons/Ionicons';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const IconBar = ({Name, Color, Change}) =>{
  
    return(
      <TouchableWithoutFeedback style={styles.iconContainer} onPress={Change}>
        <IconIo name={Name} size={26} color={Color}/>
      </TouchableWithoutFeedback>
    )
  
  }

function ButtonProfile({iconName, Navi, iconSize, iconColor, colorP, colorS, Label}){

    const navigation = useNavigation();

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: colorS}]} onPress={() => navigation.navigate(Navi)}>
          <View style={[styles.containerText, {backgroundColor: colorS}]}>
            <IconIo name={iconName} color={iconColor} size={27}/>
            <Text style={{color: "gray", fontSize: 21, marginLeft: 20}}>{Label}</Text>
          </View>
          <IconMi name={"arrow-forward-ios"} color={iconColor} size={27}/>
        </TouchableOpacity>
    )
}

export default ButtonProfile;