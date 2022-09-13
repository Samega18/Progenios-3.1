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

import { TextInput, Modal, Portal, Provider } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Octicons';
import IconIo from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import BackgroundImg from '../../../../assets/home/rock2.png';
import ImgProfile from '../../../../assets/home/rock.png';

function MyAddress(){

    const navigation = useNavigation();

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";
    
    const [rua, setRua] = React.useState('Rua 1');
    const [bairro, setBairro] = React.useState('Bairro 1');
    const [cidade, setCidade] = React.useState('Campina Grande');
    const [estado, setEstado] = React.useState('Paraíba');
    const [pais, setPais] = React.useState('Brasil');
    const [cep, setCep] = React.useState('58258-567');
    const [numero, setNumero] = React.useState('97');

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    return(
        <KeyboardAvoidingView style={[styles.container, {backgroundColor: colorPrimary}]} 
        behavior="height" >
            <StatusBar backgroundColor={colorPrimary} animated={true}/>
            <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer} style={styles.modal}>
                    <Text style={{color: "black"}}>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
            <View style={styles.top}>
                <View style={styles.topTexts}>
                    <Icon name="arrow-left" size={50} color={colorSecundary} style={styles.topTextsIcon} 
                        onPress={() => navigation.goBack()}/>
                    <IconIo name={"md-location"} color={colorSecundary} size={30} style={styles.topTextsIcon2}/>
                </View>
            </View>
            <View style={[styles.bottom, {backgroundColor: colorSecundary}]}>
                <View style={styles.bottomTop}>
                    <TextInput
                            editable={false}
                            mode="outlined"
                            label="Rua"
                            placeholder=""
                            value={rua}
                            onChangeText={email => setEmail(email)}
                            
                            style={[styles.bottomInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <TextInput
                            editable={false}
                            mode="outlined"
                            label="Bairro"
                            placeholder=""
                            value={bairro}
                            onChangeText={email => setEmail(email)}
                            
                            style={[styles.bottomInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <TextInput
                            editable={false}
                            mode="outlined"
                            label="Cidade"
                            placeholder=""
                            value={cidade}
                            onChangeText={email => setEmail(email)}
                            
                            style={[styles.bottomInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <TextInput
                            editable={false}
                            mode="outlined"
                            label="Estado"
                            placeholder=""
                            value={estado}
                            onChangeText={email => setEmail(email)}
                            
                            style={[styles.bottomInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <TextInput
                            editable={false}
                            mode="outlined"
                            label="País"
                            placeholder=""
                            value={pais}
                            onChangeText={email => setEmail(email)}
                            
                            style={[styles.bottomInput, {backgroundColor: colorSecundary}]}
                            outlineColor="gray"
                            activeOutlineColor={colorPrimary}
                            theme={{ colors: { placeholder: "gray", text: "black" } }}
                    />
                    <View style={[styles.bottomInputContainer, {backgroundColor: colorSecundary}]}>
                        <TextInput
                                editable={false}
                                mode="outlined"
                                label="CEP"
                                placeholder=""
                                value={cep}
                                onChangeText={email => setEmail(email)}
                                
                                style={[styles.bottomInput2, {backgroundColor: colorSecundary}]}
                                outlineColor="gray"
                                activeOutlineColor={colorPrimary}
                                theme={{ colors: { placeholder: "gray", text: "black" } }}
                        />
                        <TextInput
                                editable={false}
                                mode="outlined"
                                label="Número"
                                placeholder=""
                                value={numero}
                                onChangeText={email => setEmail(email)}
                                
                                style={[styles.bottomInput3, {backgroundColor: colorSecundary}]}
                                outlineColor="gray"
                                activeOutlineColor={colorPrimary}
                                theme={{ colors: { placeholder: "gray", text: "black" } }}
                        />
                    </View>
                </View>
                <View style={styles.bottomBot}>
                    <TouchableOpacity  style={[styles.bottomBotB, {backgroundColor: colorPrimary}]} onPress={() => showModal()}>
                        <Text style={[styles.bottomBotBText, {color: colorSecundary}]}>Alterar Endereço</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </Provider>
        </KeyboardAvoidingView>
    )
}

export default MyAddress;