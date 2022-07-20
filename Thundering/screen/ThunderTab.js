import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {styles} from '../css/style';
import {ScrollView, Text, View, Image} from 'react-native';
import Pub from '../asset/image/pub.png';
import Book from '../asset/image/book.png';

const data = [
  {
    cate: '사교/인맥',
    id: 1,
  },
  {
    cate: '아웃도어',
    id: 2,
  },
  {
    cate: '댄스/무용',
    id: 3,
  },
  {
    cate: '독서/글',
    id: 4,
  },
  {
    cate: '오토바이',
    id: 5,
  },
  {
    cate: '부동산',
    id: 6,
  },
  {
    cate: '공예',
    id: 7,
  },
  {
    cate: '사진/영상',
    id: 8,
  },
  {
    cate: '음악',
    id: 9,
  },
  {
    cate: '쇼핑',
    id: 10,
  },
  {
    cate: '뷰티/패션',
    id: 11,
  },
  {
    cate: '봉사활동',
    id: 12,
  },
  {
    cate: '와인/주류',
    id: 13,
  },
  {
    cate: '문화/영화',
    id: 14,
  },
  {
    cate: '운동',
    id: 15,
  },
  {
    cate: '맛집/카페',
    id: 16,
  },
  {
    cate: '자동차/드론',
    id: 17,
  },
  {
    cate: '반려동물',
    id: 18,
  },
  {
    cate: '공부/과외',
    id: 19,
  },
  {
    cate: '언어',
    id: 20,
  },
  {
    cate: '축제/공연',
    id: 21,
  },
  {
    cate: '주식/금융',
    id: 22,
  },
  {
    cate: '여행',
    id: 23,
  },
  {
    cate: '종교',
    id: 24,
  },
  {
    cate: '자연',
    id: 25,
  },
  {
    cate: '스냅투어',
    id: 26,
  },
  {
    cate: '친목/팬덤',
    id: 27,
  },
];
const ThunderTab = () => {
  const FilterTab = () => {
    return (
      <View>
        <View style={styles.cont_Wrap1}>
          <View style={styles.cWrap1}>
            <Text style={styles.tWrap1}>시간순</Text>
            <Text style={styles.tWrap1}>|</Text>
            <Text style={styles.tWrap1}>거리순</Text>
          </View>
          <View style={styles.cWrap1_TextWrap}>
            <Text style={styles.cWrap1_Text}>200km·60일</Text>
          </View>
        </View>
        <View style={styles.shadow_box}></View>
        <View style={styles.cont_Wrap2}>
          <View style={styles.cWrap2}>
            <Text style={styles.cWrap2_Text1}>
              관심있는 카테고리를 선택해주세요
            </Text>
            <Text style={styles.cWrap2_Text2}>3/5</Text>
          </View>
          <Image
            style={styles.cWrap2_img}
            source={require('../asset/image/up.png')}></Image>
        </View>
        <View style={styles.cate_Box_Wrap}>
          <View style={styles.cate_Box}>
            {data.map(item => (
              // <View style={styles.cate_Text_Wrap}>
              <Text key={item.id} style={styles.cate_Text}>
                {item.cate}
              </Text>
              // </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.scroll} stickyHeaderIndices={[0]}>
      <FilterTab />
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
