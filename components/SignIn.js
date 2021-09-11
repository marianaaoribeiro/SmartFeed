import React, { useState } from 'react';
import { StyleSheet,ImageBackground, Text, Image, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn({ onEnter, onSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/catAndDog.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.formContainer}>
      <Image
      style={styles.tinyLogo}
          source={require('../assets/smartfeed.png')}
        />
        <Text style={styles.text}>Seja bem vindo.</Text>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => onEnter(email, password)}>
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSignUp(true)}>
          <Text style={styles.text}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  formContainer: {
    backgroundColor:'rgba(0,0,0,0.3)',
    flex: 2,
    alignItems: 'center',
    justifyContent: "center",
    
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FEB664',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 80,
    paddingRight: 80,
    color: 'white',
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontWeight: '100',
    paddingBottom: 5,
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    marginLeft: 30,
    marginRight:30,
    borderRadius: 17,
    paddingHorizontal: 10,
    backgroundColor:'rgba(255,255,255, 0.6)',
  },
});