import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CLIMA</Text>

      <SafeAreaView style={{ flexDirection: 'row', paddingBottom: 100, marginTop: 100}}>
        <TouchableOpacity>
          <Image source={require('../../assets/delete.png')} style={styles.img} />
        </TouchableOpacity>
        <TextInput
          placeholder='Digite a cidade (ex: São Paulo)'
          style={styles.textinput}
        />
        <TouchableOpacity>
          <Image source={require('../../assets/search.png')} style={styles.img} />
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView>
        <Text style={{fontSize: 150, textAlign: 'center'}}>32°</Text>
        <Text style={{fontSize: 50}}>Maceió (AL)</Text>
      </SafeAreaView>
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
  text: {
    fontSize: 30,
    fontWeight: 'bold',
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
  img: {
    width: 50,
    height: 50,
    top: 10,
    margin: 5
  },
})