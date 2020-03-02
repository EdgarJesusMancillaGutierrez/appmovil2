//MANCILLA GUTIÉRREZ EDGAR JESÚS
//TI-02-SM-18
import React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';
import { Container,Button,Text, Header, Content, Card, CardItem,Body,Item, Label, Input,Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Datos({navigation,route}) {
React.useEffect(() => {
    if (route.params?.post1 && route.params?.post){
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post1],[route.params?.post]);


  return (
    <View>
      <Text >Hola usuario: {route.params?.post1}</Text>
      <Text >Tu contraseña es: {route.params?.post}</Text>
    

    </View>
  );
 
}
export default Datos;
