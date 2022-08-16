import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    TouchableOpacity,
    Text,
    Image,
    useColorScheme,
    View,
  } from 'react-native';
import styles from './styles';

const initial_data = require('../../assets/initial/initial_img.png');

function InitialPage({ navigation }){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";

    return(
        <View style={[styles.container, {backgroundColor: colorPrimary}]}>
            <StatusBar backgroundColor={colorPrimary} animated={true}/>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={initial_data}/>
            </View>
            
            <View style={styles.texts}>
                <Text style={[styles.textsTittle, {color: colorSecundary}]}>Bem Vindo</Text>
                <View style={styles.pContainer}>
                    <Text style={[styles.p, {color: colorSecundary}]}>Uma nova forma de aprender</Text>
                    <Text style={[styles.p2, {color: colorSecundary}]}>Simples e intuitivo</Text>
                </View> 
                
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity  style={[styles.b1, {backgroundColor: colorSecundary}]} onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.b1Text, {color: colorPrimary}]}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={[styles.b2, {backgroundColor: colorPrimary, borderColor: colorSecundary}]} onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.b2Text , {color: colorSecundary}]}>Cadastrar</Text>
                </TouchableOpacity>
            </View>  

        </View>
    )
}

export default InitialPage;