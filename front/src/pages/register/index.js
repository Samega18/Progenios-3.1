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
    ScrollView,
    Keyboard,
  } from 'react-native';
import styles from './styles';

import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Octicons';
import RegisterEnter from '../../assets/initial/register_img.png';
import { useEffect } from 'react/cjs/react.production.min';

function Register({ navigation }){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";
    
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [pass2, setPass2] = React.useState('');

    const [keyboardStatus, setKeyboardStatus] = React.useState(false);

    React.useEffect(() =>{
        
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
          });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
          });
      
          return () => {
            showSubscription.remove();
            hideSubscription.remove();
          };
    },[]);
    return(
        <KeyboardAvoidingView style={[styles.container, {backgroundColor: colorPrimary}]} behavior="height" 
        keyboardVerticalOffset={0}>
                <StatusBar backgroundColor={colorPrimary} animated={true}/>
                <SafeAreaView style={{flex: 1, width: "100%", height: "100%"}}>
                <ScrollView style={{flex: 1, width: "100%", height: "100%",}} 
                scrollEnabled={keyboardStatus}>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <Icon name="arrow-left" size={50} color={colorSecundary} style={styles.topLeftIcon} 
                            onPress={() => navigation.navigate('Initial')}/>
                        <Text style={[styles.topLeftText, {color: colorSecundary}]}>Cadastrar</Text>
                    </View>
                    <View style={styles.topRight}>
                        <Image source={RegisterEnter} style={styles.topImage}/>
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
                            label="Nome e sobrenome"
                            placeholder="Digite seu nome"
                            value={name}
                            onChangeText={name => setName(name)}
                            
                            style={[styles.bottomMidInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                        />
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
    
                            secureTextEntry
    
                            style={[styles.bottomMidInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black",  } }}
                        />
                        <TextInput
                            mode="outlined"
                            label="Confirmar senha"
                            placeholder="Digite sua senha"
                            value={pass2}
                            onChangeText={pass2 => setPass2(pass2)}
    
                            secureTextEntry
                            
                            style={[styles.bottomMidInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black",  } }}
                        />
    
                    </View>
                    <View style={styles.bottomBot}>
                        <TouchableOpacity  style={[styles.bottomBotB, {backgroundColor: colorPrimary}]} onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.bottomBotBText, {color: colorSecundary}]}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
}

export default Register;