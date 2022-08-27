import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Button,
    Animated,
    TouchableWithoutFeedback,
    Text,
    Vibration,
    Image,
    View,
  } from 'react-native';
import styles from './styles';

import IconFW from 'react-native-vector-icons/Ionicons';

import Calendar from '../PagesLoged/Calendar';
import GeniosWork from '../PagesLoged/GeniosWork';
import Home from '../PagesLoged/Home';
import Study from '../PagesLoged/Study';
import GeniosCup from '../PagesLoged/GeniosCup';

const IconBar = ({iconName, iconName2, colorPrimary, colorSecundary, sizeBar, sizeBar2, selected, valueSelect, change}) =>{

  const [color, setColor] = useState(colorPrimary);

  if(selected == valueSelect){

  }

  return(
    <TouchableWithoutFeedback style={styles.iconContainer} onPress={change}>
      <IconFW name={selected == valueSelect ? iconName : iconName2} size={sizeBar} 
        color={colorSecundary}/>
    </TouchableWithoutFeedback>
  )

}

function BarNavigate({ navigation }){

    // branco #F5F5F5
    // azul #4e8df3

    const colorPrimary = "#4e8df3";
    const colorSecundary = "#F5F5F5";
    
    const [ screenSelected, setScreenSelected ] = useState(2);

    function changeScreen(value){
      setScreenSelected(value);
      Vibration.vibrate(50);
    }

    return (
      <View style={[ styles.container, { backgroundColor: colorSecundary }]}>
        <StatusBar backgroundColor={colorPrimary} animated={true}/>
        <View style={[ styles.screen, { backgroundColor: colorSecundary }]}>
          {screenSelected == 0 && <Calendar/>}
          {screenSelected == 1 && <GeniosWork/>}
          {screenSelected == 2 && <Home/>}
          {screenSelected == 3 && <Study/>}
          {screenSelected == 4 && <GeniosCup/>}

        </View>
        <View style={[ styles.barNavigateContainer, { backgroundColor: colorPrimary }]}>
          <IconBar iconName="md-calendar" iconName2="md-calendar-outline" sizeBar={30} colorPrimary="black" change={() =>changeScreen(0)}
            colorSecundary={colorSecundary} selected={screenSelected} valueSelect={0} sizeBar2={42}/>
          <IconBar iconName="create" iconName2="create-outline" sizeBar={30} colorPrimary="black" change={() => changeScreen(1)}
            colorSecundary={colorSecundary} selected={screenSelected} valueSelect={1} sizeBar2={42}/>
          <IconBar iconName="home"  iconName2="home-outline" sizeBar={30} colorPrimary="black" change={() => changeScreen(2)}
            colorSecundary={colorSecundary} selected={screenSelected} valueSelect={2} sizeBar2={42}/>
          <IconBar iconName="book" iconName2="book-outline" sizeBar={30} colorPrimary="black" change={() => changeScreen(3)}
            colorSecundary={colorSecundary} selected={screenSelected} valueSelect={3} sizeBar2={42}/>
          <IconBar iconName="medal" iconName2="medal-outline" sizeBar={30} colorPrimary="black" change={() => changeScreen(4)}
            colorSecundary={colorSecundary} selected={screenSelected} valueSelect={4} sizeBar2={42}/>
        </View>
      </View>
    );
  };

export default BarNavigate;