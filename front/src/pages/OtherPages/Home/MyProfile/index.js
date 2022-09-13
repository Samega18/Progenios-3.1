import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    Text,
    Image,
    View,
  } from 'react-native';
import styles from './styles';

import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Octicons';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import BackgroundImg from '../../../../assets/home/rock2.png';
import ImgProfile from '../../../../assets/home/rock.png';

function MyProfile(){

    const navigation = useNavigation();

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";
    
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [passView, setPassView] = React.useState('eye-off');

    return(
        <KeyboardAvoidingView style={[styles.container, {backgroundColor: colorPrimary}]} 
        behavior="height" >
            <StatusBar backgroundColor={colorPrimary} animated={true}/>
            <View style={styles.top}>
                <View style={styles.topTexts}>
                    <Icon name="arrow-left" size={50} color={colorSecundary} style={styles.topTextsIcon} 
                        onPress={() => navigation.goBack()}/>
                    <Text style={[styles.topTextsText, {color: colorSecundary}]}></Text>
                </View>
                <Image source={BackgroundImg} style={styles.topImage}/>
                <View style={[styles.topImgFilter, {backgroundColor: colorPrimary}]}></View>
            </View>
            <View style={[styles.bottom, {backgroundColor: colorSecundary}]}>
                <View style={styles.bottomTop}>
                    <View style={[styles.bottomTopIcons, {borderColor: colorSecundary, backgroundColor: colorPrimary}]}>
                        <IconIo name="medal" size={30} color={colorSecundary}/>
                    </View>
                    <Image source={ImgProfile} style={[styles.bottomTopImage, {borderColor: colorSecundary}]}/>
                    <View style={[styles.bottomTopIcons, {borderColor: colorSecundary, backgroundColor: colorPrimary}]}>
                        <IconIo name="ios-game-controller" size={30} color={colorSecundary}/>
                    </View>
                </View>
                <View style={styles.bottomMid}>
                    <View style={styles.bottomMidCategoriaC}>
                        <Text style={[styles.bottomMidCategoriaT1, {color: colorPrimary}]}>2570</Text>
                        <Text style={[styles.bottomMidCategoriaT2, {color: "gray"}]}>Pontuação</Text>
                    </View>
                    <View style={styles.bottomMidCategoriaC}>
                        <Text style={[styles.bottomMidCategoriaT1, {color: colorPrimary}]}>96%</Text>
                        <Text style={[styles.bottomMidCategoriaT2, {color: "gray"}]}>Presença</Text>
                    </View>
                    <View style={styles.bottomMidCategoriaC}>
                        <Text style={[styles.bottomMidCategoriaT1, {color: colorPrimary}]}>367</Text>
                        <Text style={[styles.bottomMidCategoriaT2, {color: "gray"}]}>Atividades</Text>
                    </View>
                </View>
                <View style={styles.bottomBot}>
                    <View style={styles.bottomBotTexts}>
                        <Text style={[styles.bottomBotTextsT1, {color: "black", borderBottomColor: colorPrimary}]}>Dwayne Johnson</Text>
                        <Text style={[styles.bottomBotTextsT2, {color: "gray"}]}>  
                                Também conhecido pelo seu nome no ringue 
                                The Rock,  é  um  ator  americano,  ex-lutador 
                                profissional e ex-jogador de futebol americano
                                universitário   pela   Universidade  de  Miami.</Text>
                    </View>
                    <View style={styles.bottomBotInfos}>
                        <View style={styles.bottomBotInfo}>
                            <IconIo name="school" size={36} color={"black"}/>
                            <Text style={[styles.bottomBotInfoT, {color: "black"}]}>UNIFACISA</Text>
                        </View>
                        <View style={styles.bottomBotInfo}>
                            <IconIo name="md-location" size={36} color={"black"}/>
                            <Text style={[styles.bottomBotInfoT, {color: "black"}]}>CAMPINA GRANDE - PB</Text>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default MyProfile;