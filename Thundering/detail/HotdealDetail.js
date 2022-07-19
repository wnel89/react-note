import React from 'react';
import {detailCss} from '../css/detailCss';
import {ScrollView, Text, View, Image} from 'react-native';
import TopLogo from '../navigation/topLogo';

const data = [
  {
    icon: require('../asset/image/icon7.png'),
    text: '2022/09/17 토요일 오전 10:00',
    id: 1,
    id: 2,
    id: 3,
  },
  {
    icon: require('../asset/image/icon8.png'),
    text: '청담동 벨뷰',
    id: 4,
    id: 5,
    id: 6,
  },
  {
    icon: require('../asset/image/icon9.png'),
    text: '전메뉴 30% 할인',
    id: 7,
    id: 8,
    id: 9,
  },
  {
    icon: require('../asset/image/icon10.png'),
    text: '215/300명',
    id: 10,
    id: 11,
    id: 12,
  },
];

const HotdealDetail = () => {
  return (
    <View style={{flex: 1}}>
      <TopLogo />
      <View style={detailCss.container}>
        <ScrollView style={detailCss.scroll}>
          <View style={detailCss.contWrap1}>
            <View style={detailCss.backWrap}>
              <Image source={require('../asset/image/back.png')}></Image>
              <Image source={require('../asset/image/back2.png')}></Image>
            </View>
            <Image
              style={detailCss.shadowimg}
              source={require('../asset/image/shadow.png')}></Image>
            <Image
              style={detailCss.profileimg}
              source={require('../asset/image/stake.png')}></Image>
          </View>
          <View style={detailCss.contWrap2}>
            <Text style={detailCss.descTitle}>
              청담동 벨뷰 썬더링 회원만 전메뉴 30% 할인!
            </Text>
            {data.map(item => (
              <View key={item.id} style={detailCss.descWrap}>
                <Image
                  key={item.id1}
                  style={detailCss.desc}
                  source={item.icon}
                />
                <Text
                  key={item.id2}
                  style={[detailCss.desc, detailCss.descFont]}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
          <View style={detailCss.contWrap3}>
            <View style={[detailCss.descWrap, {marginBottom: 8}]}>
              <Text style={detailCss.cateFont1}>디저트</Text>
              <Text style={detailCss.cateFont1}>양식</Text>
              <Text style={detailCss.cateFont1}>카페</Text>
              <Text style={detailCss.cateFont1}>낮술</Text>
              <Text style={detailCss.cateFont1}>베이커리</Text>
            </View>
            <View style={[detailCss.descWrap, {marginBottom: 16}]}>
              <Text style={detailCss.cateFont2}>핫딜</Text>
              <Text style={[detailCss.cateFont2, {paddingHorizontal: 10}]}>
                여자만
              </Text>
              <Text style={[detailCss.cateFont2, {paddingHorizontal: 10}]}>
                나이제한
              </Text>
            </View>
          </View>
          <View style={detailCss.contWrap4}>
            <Image
              style={detailCss.smallimg}
              source={require('../asset/image/Bitmap.png')}></Image>
            <View style={detailCss.introWrap}>
              <Text style={detailCss.introTitle}>[청담동 벨뷰]</Text>
              <View style={detailCss.introTextwrap}>
                <Text style={detailCss.introText}>핫딜</Text>
                <Text style={detailCss.introText}>남자/여자</Text>
                <Text style={detailCss.introText}>나이제한</Text>
              </View>
              <View style={detailCss.introReview}>
                <Text style={detailCss.fontReview}>
                  가장 핫한 강남 레스토랑 청담동 벨뷰입니다.
                </Text>
                <View style={detailCss.introScore}>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 35}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </View>
      <View style={detailCss.buttonB}>
        <Text style={detailCss.buttonT}>핫딜 참여하기</Text>
      </View>
    </View>
  );
};

export default HotdealDetail;
