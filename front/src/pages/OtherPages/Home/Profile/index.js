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

import Icon from 'react-native-vector-icons/Octicons';

import ImgProfile from '../../../../assets/home/rock.png'
import { useNavigation } from '@react-navigation/native';
import ButtonProfile from '../../../../components/ButtonProfile';

function Profile(){

    const navigation = useNavigation();

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorSecundary}]}>
            <View style={styles.containerTop}>
                <View style={[styles.topBackground, {backgroundColor: colorPrimary}]}></View>
                <View style={styles.topLeft}>
                    <Icon name="arrow-left" size={50} color={colorSecundary} style={styles.topLeftIcon} 
                        onPress={() => navigation.goBack()}/>
                    <Text style={[styles.topLeftText, {color: colorSecundary}]}></Text>
                </View>
                {/* <Text style={{color: "black"}}>Profile</Text> */}
            </View>
            <View style={styles.containerBottom}>
                <View style={[styles.bottomInfoContainer, {backgroundColor: colorSecundary}]}>
                    <View style={styles.bottomTop}>
                        <Text style={{color: colorSecundary}}>X</Text>
                        <Image source={ImgProfile} style={[styles.topImage, {borderColor: colorSecundary}]}/>
                        <Text style={{color: colorSecundary}}>X</Text>
                    </View>
                    <View style={styles.bottomMid}>
                        <Text style={{color: "black", fontSize: 24}}>The Rock</Text>
                        <Text style={{color: "gray", fontSize: 16}}>the_rock@gmail.com</Text>
                    </View>
                    <View style={styles.bottomBot}>
                        <ButtonProfile iconName={"list"} iconColor={"gray"} Label={"Perfil"} Navi={"MyProfile"}/>
                        <ButtonProfile iconName={"person"} iconColor={"gray"} Label={"Conta"} Navi={"MyProfile"}/>
                        <ButtonProfile iconName={"md-location"} iconColor={"gray"} Label={"Endereço"} Navi={"MyAddress"}/>
                        <ButtonProfile iconName={"school"} iconColor={"gray"} Label={"Escola"} Navi={"MyProfile"}/>
                        <ButtonProfile iconName={"md-flask"} iconColor={"gray"} Label={"Progenios"} Navi={"MyProfile"}/>
                        <ButtonProfile iconName={"help"} iconColor={"gray"} Label={"Ajuda"} Navi={"MyProfile"}/>
                        <ButtonProfile iconName={"close"} iconColor={"gray"} Label={"Sair"} Navi={"MyProfile"}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile;