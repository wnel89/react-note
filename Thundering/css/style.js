import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'green',
  },
  frameCont: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
    height: 56,
  },
  frame: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 13,
  },
  frameIcon: {
    marginRight: 3,
    marginLeft: 3,
  },
  frameIcon2: {
    marginLeft: 16,
  },
  // ************** Top Logo CSS
  cont_Wrap1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 40,
  },
  cWrap1: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  tWrap1: {
    marginRight: 5,
  },
  cWrap1_TextWrap: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginRight: 9,
    borderRadius: 7,
  },
  cWrap1_Text: {
    marginHorizontal: 6,
    marginVertical: 3,
    textAlign: 'right',
    color: '#111111',
    fontWeight: '500',
    fontSize: 11,
  },
  cont_Wrap2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 40,
    borderColor: '#E6E6E6',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  cWrap2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cWrap2_Text1: {
    marginLeft: 16,
    fontWeight: '500',
    fontSize: 13,
    color: '#888888',
  },
  cWrap2_Text2: {
    marginLeft: 7,
    fontWeight: '500',
    fontSize: 11,
    color: '#8554FF',
    backgroundColor: '#6340D71A',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 7,
  },
  cWrap2_img: {
    marginRight: 27,
  },
  cate_Box_Wrap: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cate_Box: {
    maxWidth: '95%',
    minHeight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 13,
    justifyContent: 'center',
  },
  cate_Text: {
    textAlign: 'center',
    marginHorizontal: 2,
    marginVertical: 5,
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#F2F2F2',
  },
  shadow_box: {
    width: '100%',
    height: 2500,
    backgroundColor: '#00000077',
    position: 'absolute',
    top: 150,
  },

  // **************** FilterTab CSS
  card1: {
    width: '100%',
    height: 330,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginBottom: 10,
    marginTop: 3,
  },
  card2: {
    width: '100%',
    height: 330,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginBottom: 10,
  },
  box: {
    position: 'absolute',
    bottom: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  imgs: {
    width: '95%',
    borderRadius: 15,
  },
  iconWrap: {
    width: '92%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 18,
  },
  iconWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 3,
    marginLeft: 3,
  },
  textBasic: {
    position: 'absolute',
    left: 14,
    color: 'white',
    zIndex: 999,
  },
  titleText: {
    bottom: 90,
    fontSize: 18.5,
    fontWeight: '700',
  },
  subTitleText: {
    bottom: 60,
    fontSize: 15,
    fontWeight: '700',
  },
  detailText: {
    bottom: 18,
    fontSize: 13,
    fontWeight: '400',
  },
  // ********************* main Contents CSS
});
