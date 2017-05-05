import React from 'react';
import {
  Text,
  AppRegistry,
  Button,
  View
}from 'react-native';


const geraSenha = () => {
  var senha_aleatoria = Math.random();

  senha_aleatoria = Math.floor(senha_aleatoria * 10000000);
  alert(senha_aleatoria);
}

const App = ()=> {
  return(
    <View>
      <Text>Gerador de numeros aleatorios</Text>
      <Button
        title="Gerar senha"
        onPress={geraSenha}
        >Meu primeiro App uhul</Button>
    </View>
 );
};

AppRegistry.registerComponent('appNumeroAleatorio', () => {return App});
