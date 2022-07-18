import React from 'react';
import {Image, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TopLogo from './topLogo';
import ThunderTab from '../screen/ThunderTab';
import HotdealTab from '../screen/HotdealTab';
import GroupTab from '../screen/GroupTab';
import MemberTab from '../screen/MemberTab';
import ChattingTab from '../screen/ChattingTab';
import MypageTab from '../screen/MypageTab';

const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <TopLogo />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconImg;
            let iconColor;
            if (route.name === 'Thunder') {
              iconImg = focused
                ? require('../asset/image/icon1.png')
                : require('../asset/image/icon1-1.png');
            }
            if (route.name === 'Hot Deal') {
              iconImg = require('../asset/image/icon2-1.png');
              iconColor = focused ? '#F84B62' : color;
            }
            if (route.name === 'Group') {
              iconImg = require('../asset/image/icon3-1.png');
              iconColor = focused ? '#8554FF' : color;
            }
            if (route.name === 'Member') {
              iconImg = require('../asset/image/icon4-1.png');
              iconColor = focused ? '#8554FF' : color;
            }
            if (route.name === 'Chatting') {
              iconImg = require('../asset/image/icon5-1.png');
              iconColor = focused ? '#8554FF' : color;
            }
            if (route.name === 'Mypage') {
              iconImg = require('../asset/image/icon6-1.png');
              iconColor = focused ? '#8554FF' : color;
            }
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{tintColor: iconColor}} source={iconImg} />
              </View>
            );
          },
          tabBarLabel: ({focused, color}) => {
            let iconText;
            if (route.name === 'Thunder') iconText = '번개';
            else if (route.name === 'Group') iconText = '그룹';
            else if (route.name === 'Member') iconText = '멤버';
            else if (route.name === 'Chatting') iconText = '채팅';
            else if (route.name === 'Mypage') iconText = '마이페이지';
            return (
              <View style={{width: 60}}>
                <Text
                  style={{
                    color: focused ? '#8554FF' : color,
                    fontWeight: focused ? '700' : '500',
                    marginTop: 5,
                    textAlign: 'center',
                    fontSize: 13,
                  }}>
                  {iconText}
                </Text>
              </View>
            );
          },
        })}>
        <Tab.Screen name="Thunder" component={ThunderTab} />
        <Tab.Screen
          name="Hot Deal"
          component={HotdealTab}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  color: focused ? '#F84B62' : color,
                  fontWeight: focused ? '700' : '500',
                  marginTop: 5,
                }}>
                핫딜
              </Text>
            ),
          }}
        />
        <Tab.Screen name="Group" component={GroupTab} />
        <Tab.Screen name="Member" component={MemberTab} />
        <Tab.Screen name="Chatting" component={ChattingTab} />
        <Tab.Screen name="Mypage" component={MypageTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
