import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Image, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function Login() {

  const navigation = useNavigation()

  const [email, setemail] = useState('')
  const [senha, setsenha] = useState('')

  function logar() {
    if (email == '' || senha == '') {
      alert("Preencha Email e Senha")
    } else if (email == 'luiz@gmail.com' || senha == 12345678) {
      navigation.navigate('Principal')
    } else {
      alert("Email ou Senha Incorreto(s)")
    }
    Keyboard.dismiss()
    setemail('')
    setsenha('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>LOGIN</Text>
      <Image style={styles.img} source={require('../../assets/loginimg.png')} />
      <TextInput
        placeholder='email'
        style={styles.textinput}
        value={email}
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        placeholder='senha'
        style={styles.textinput}
        value={senha}
        onChangeText={(senha) => setsenha(senha)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.bnt} onPress={logar}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ color: 'blue' }}>Não tem login? Cadastre-se agora</Text>
      </TouchableOpacity>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAF5E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 210,
    width: 200,
    margin: 50
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  textinput: {
    height: 45,
    width: 280,
    borderWidth: 2,
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: '#fff'
  },
  bnt: {
    margin: 50,
    borderWidth: 2,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#fff'
  }
});