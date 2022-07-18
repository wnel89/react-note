import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {styles} from '../css/style';
import {ScrollView, Text, View, Image} from 'react-native';
import Pub from '../asset/image/pub.png';
import Book from '../asset/image/book.png';

const ThunderTab = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.contWrap1}>
        <View style={styles.cWrap1}>
          <Text style={styles.tWrap1}>시간순</Text>
          <Text style={styles.tWrap1}>|</Text>
          <Text style={styles.tWrap1}>거리순</Text>
        </View>
        <View>
          <Text>200km/60일</Text>
        </View>
      </View>
      <View style={styles.card1}>
        <Text style={[styles.titleText, styles.textBasic]}>
          펍찾기 3회) 압구정 4층에서 스몰토크
        </Text>
        <Text style={[styles.subTitleText, styles.textBasic]}>
          불금놀먹사람들
        </Text>
        <Text style={[styles.detailText, styles.textBasic]}>
          서울 시청역 1번출구 앞 {'\n'}
          7. 10(일) 9:00 AM
        </Text>
        <Image style={styles.imgs} source={Pub} />
        <Image
          style={styles.box}
          source={require('Thundering/asset/image/box.png')}
        />
        <View style={styles.iconWrap}>
          <Image
            style={styles.icon}
            source={require('Thundering/asset/image/ready.png')}
          />
          <View style={styles.iconWrap2}>
            <Image
              style={styles.icon}
              source={require('Thundering/asset/image/myhot.png')}
            />
            <Image
              style={styles.icon}
              source={require('Thundering/asset/image/point.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.card2}>
        <Text style={[styles.titleText, styles.textBasic]}>
          펍찾기 3회) 압구정 4층에서 스몰토크
        </Text>
        <Text style={[styles.subTitleText, styles.textBasic]}>
          불금놀먹사람들
        </Text>
        <Text style={[styles.detailText, styles.textBasic]}>
          서울 시청역 1번출구 앞 {'\n'}
          7. 10(일) 9:00 AM
        </Text>
        <Image style={styles.imgs} source={Book} />
        <Image
          style={styles.box}
          source={require('Thundering/asset/image/box.png')}
        />
        <View style={styles.iconWrap}>
          <Image
            style={styles.icon}
            source={require('Thundering/asset/image/ready.png')}
          />
          <View style={styles.iconWrap2}>
            <Image
              style={styles.icon}
              source={require('Thundering/asset/image/myhot.png')}
            />
            <Image
              style={styles.icon}
              source={require('Thundering/asset/image/point.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ThunderTab;
