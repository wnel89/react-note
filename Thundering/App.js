import {relative} from 'path';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import Pub from './asset/image/pub.png';
import {Shadow} from 'react-native-shadow-2';

const App = () => {
  return (
    <SafeAreaView>
      <View></View>
      <View>
        <Text>Thundering</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
      <Shadow startColor={'#666666'} offset={[0, 10]}>
        <View style={style.card}>
          <Image style={style.imgs} source={Pub} />
          <Image
            style={style.box}
            source={require('Thundering/asset/image/box.png')}
          />
          <View style={style.iconWrap}>
            <Image
              style={style.icon}
              source={require('Thundering/asset/image/ready.png')}
            />
            <View style={style.iconWrap2}>
              <Image
                style={style.icon}
                source={require('Thundering/asset/image/myhot.png')}
              />
              <Image
                style={style.icon}
                source={require('Thundering/asset/image/point.png')}
              />
            </View>
          </View>
        </View>
      </Shadow>
      <View></View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    position: 'relative',
    margin: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 0,

    elevation: 5,
  },
  box: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imgs: {
    borderRadius: 15,
    margin: 5,
  },
  iconWrap: {
    width: 360,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  iconWrap2: {
    width: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {},
});

export default App;
