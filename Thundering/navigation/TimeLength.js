import React, {useState} from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import {styles} from '../css/style';
import Frame from '../asset/image/Frame.png';
import i_search from '../asset/image/i_search.png';
import bell from '../asset/image/bell.png';

const TimeLength = () => {
  return (
    <SafeAreaView style={styles.frameCont}>
      <View style={styles.frame}>
        <Image style={styles.icon} source={Frame} />
        <View style={styles.iconWrap2}>
          <Image style={styles.frameIcon2} source={i_search} />
          <Image style={styles.frameIcon2} source={bell} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimeLength;
