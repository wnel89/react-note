import {StyleSheet} from 'react-native';

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
  contWrap1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 40,
  },
  cWrap1: {
    flexDirection: 'row',
  },
  tWrap1: {
    marginRight: 3,
    marginLeft: 3,
  },

  card1: {
    width: '100%',
    height: 330,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginBottom: 10,
    marginTop: 80,
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
