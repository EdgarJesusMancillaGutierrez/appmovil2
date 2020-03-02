//MANCILLA GUTIÉRREZ EDGAR JESÚS
//TI-02-SM-18
import React from 'react';
import { View, StyleSheet, Alert, TextInput, Button } from 'react-native';
import {Container,Text,Header,Content,Card,CardItem,Body,Item,Label,Input,Icon} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({ navigation }) {
const [postText, setPostText] = React.useState('');
const [postText1, getPostText1] = React.useState('');

  return (
    <Container>
     
      <Content padder contentContainerStyle={misEstilos.content}>
        <Card>
          <CardItem header bordered>
            <Text style={misEstilos.textCenter}>Iniciar sesión</Text>
          </CardItem>
          <CardItem bordered>
            <Body style={misEstilos.body}>
              <Item inlineLabel>
                <Icon type="FontAwesome" name="user" />
                <Input placeholder="Usuario"
                 value={postText1}
                 onChangeText={getPostText1} 
                />
              </Item>
              <Item inlineLabel last>
                <Icon type="FontAwesome" name="lock" />
                <Input placeholder="Contraseña"
                 value={postText}
                 onChangeText={setPostText} />
              </Item>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button
              onPress={() => navigation.navigate('Datos',{post1:postText1, post:postText})}
              style={misEstilos.boton}
              title="Ingresar"
            />
          </CardItem>
        </Card>
        <Button
          title="Registrate"
          onPress={() =>
            navigation.navigate('Registro', {
              titulo: 'Registro de usuario',
            })
          }
        />
    
      </Content>
    </Container>
  );
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginRight: '50%',
    backgroundColor: 'blue',
  },
  body: {
    paddingVertical: 35,

    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default Login;
