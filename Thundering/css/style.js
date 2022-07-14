import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'green',
  },
  card1: {
    width: '100%',
    height: 360,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginBottom: 10,
  },
  card2: {
    width: '100%',
    height: 360,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginBottom: 10,
  },
  box: {
    position: 'absolute',
    bottom: 15,
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 20,
  },
  iconWrap2: {
    display: 'flex',
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
});
