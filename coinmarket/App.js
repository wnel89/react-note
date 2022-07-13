import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';
import CoinItemList from './screen/CoinItemList';

const App = () => {
  return (
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
      {/* 위는 투두리스트 아래는 코인마켓 */}
      <View style={style.miniContainer}>
        <Text style={style.appTitle}>Coin Market</Text>
        <View style={style.card}>
          <View style={style.coinContainer}>
            <Text style={style.coins}>이름</Text>
            <Text style={style.coins}>링크</Text>
            <Text style={style.coins}>심볼</Text>
            <Text style={style.coins}>가격</Text>
            <Text style={style.coins}>1h %</Text>
            <Text style={style.coins}>24h %</Text>
            <Text style={style.coins}>7d %</Text>
          </View>
          <CoinItemList />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  miniContainer: {
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
  },
  coinContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
  },
  coins: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    fontWeight: '900',
  },
});

export default App;
