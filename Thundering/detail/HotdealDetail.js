import React from 'react';
import {detailCss} from '../css/detailCss';
import {ScrollView, Text, View, Image, TextInput} from 'react-native';
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
                    source={require('../asset/image/yellowStar.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/yellowStar.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/yellowStar.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/yellowStar.png')}></Image>
                  <Image
                    style={detailCss.scoreImg}
                    source={require('../asset/image/star.png')}></Image>
                </View>
              </View>
            </View>
          </View>
          <View style={detailCss.contWrap5}>
            <View style={detailCss.icon_wrap}>
              <Image
                style={detailCss.king_icon}
                source={require('../asset/image/king.png')}></Image>
              <Image
                style={detailCss.hot_icon}
                source={require('../asset/image/hot.png')}></Image>
            </View>
            <View style={detailCss.smallProfileWrap}>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile1.png')}></Image>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile2.png')}></Image>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile1.png')}></Image>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile2.png')}></Image>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile1.png')}></Image>
              <Image source={require('../asset/image/moreButton.png')}></Image>
            </View>
            <View style={detailCss.inviteButton}>
              <Text style={detailCss.inviteText}>핫딜 초대하기</Text>
            </View>
            <View style={detailCss.thunderContentsWrap}>
              <Text style={detailCss.thunderContents}>
                [청담 벨뷰]에서 썬더링 회원들만을 위한 깜짝 핫딜을
                준비했습니다!!
                {'\n'}2022년 9월 17일 토요일 오전 10시부터 오후 4시까지 썬더링
                핫딜 참여 회원에게만 전메뉴 30% 할인 이벤트를 진행해요!!
                {'\n'}청담 최고의 핫플인 벨뷰에서 특별하고 의미있는 시간을
                만드시길 기원합니다.
                {'\n'}꼭 참여신청하세요!!
                {'\n'}정원: 선착순 300명까지예요!
              </Text>
            </View>
          </View>
          <View style={detailCss.contWrap6}>
            <View style={detailCss.foodImageWrap}>
              <Image
                style={detailCss.foodImage}
                source={require('../asset/image/food1.png')}></Image>
              <Image
                style={detailCss.foodImage}
                source={require('../asset/image/food2.png')}></Image>
              <Image
                style={detailCss.foodImage}
                source={require('../asset/image/food3.png')}></Image>
            </View>
          </View>
          <View style={detailCss.contWrap7}>
            <Text style={detailCss.comment_title}>
              핫딜에 관한 댓글을 남겨보세요.
            </Text>
            <View style={detailCss.comment_zone}>
              <Image
                style={detailCss.smallProfile}
                source={require('../asset/image/profile1.png')}></Image>

              <TextInput
                multiline={true}
                // numberOfLines={5}
                autoCapitalize={'none'}
                editable={true}
                placeholder="댓글 써보기..."
                style={detailCss.comment_input}></TextInput>

              <Text style={detailCss.comment_btn}>등록</Text>
            </View>
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
