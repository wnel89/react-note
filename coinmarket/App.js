import React from "react";
import {SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView} from 'react-native';
import CoinView from './screen/CoinView.js'

const App = () => {
  return(
    <SafeAreaView style={style.container}>
      <View style={style.miniContainer}>
        <Text style={style.appTitle}>Hello Todolist</Text>
        <View style={style.card}>
          <TextInput style={style.input} placeholder="Add an item!" />
          <ScrollView>
            <Text>TodoList</Text>
          </ScrollView>
        </View>
      </View>
      <View style={style.miniContainer}>
      <Text style={style.appTitle}>Coin Market</Text>
      <View style={style.card}>

      </View>

      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  miniContainer:{
    flex: 1,
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  }
})

export default App;