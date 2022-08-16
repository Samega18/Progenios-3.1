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
import LoginEnter from '../../assets/initial/login_enter.png';

function Login({ navigation }){

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
                <View style={styles.topLeft}>
                    <Icon name="arrow-left" size={50} color={colorSecundary} style={styles.topLeftIcon} 
                        onPress={() => navigation.navigate('Initial')}/>
                    <Text style={[styles.topLeftText, {color: colorSecundary}]}>Entrar</Text>
                </View>
                <View style={styles.topRight}>
                    <Image source={LoginEnter} style={styles.topImage}/>
                </View>
            </View>
            <View style={[styles.bottom, {backgroundColor: colorSecundary}]}>
                <View style={styles.bottomTop}>
                    <Text style={[styles.bottomTopT1, {color: "#0d65f4"}]}>Bem Vindo</Text>
                    <Text style={styles.bottomTopT2}>Digite seus dados nos campos abaixo</Text>
                </View>
                <View style={styles.bottomMid}>
                    <TextInput
                        mode="outlined"
                        label="Email"
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        
                        style={[styles.bottomMidInput, {backgroundColor: colorSecundary}]}
                        outlineColor="gray"
                        activeOutlineColor={colorPrimary}
                        theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <TextInput
                        mode="outlined"
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={pass}
                        onChangeText={pass => setPass(pass)}

                        secureTextEntry={passView == 'eye-off' ? true : false}
                        right={
                        <TextInput.Icon name={passView} color="gray" 
                        onPress={() => passView == 'eye-off' ? setPassView('eye') : setPassView('eye-off')}/>}
                        
                        style={[styles.bottomMidInput, {backgroundColor: colorSecundary}]}
                        outlineColor="gray"
                        activeOutlineColor={colorPrimary}
                        theme={{ colors: { placeholder: "gray", text: "black",  } }}
                    />
                    <View style={styles.bottomMidEsqueceu}>
                        <Text style={[styles.textEsqueceu, {color: colorPrimary}]}>Esqueceu a senha?</Text>
                    </View>
                </View>
                <View style={styles.bottomBot}>
                    <TouchableOpacity  style={[styles.bottomBotB, {backgroundColor: colorPrimary}]} onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.bottomBotBText, {color: colorSecundary}]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;