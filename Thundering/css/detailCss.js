import {StyleSheet} from 'react-native';

export const detailCss = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: 'skyblue',
  },
  contWrap1: {
    width: '100%',
    alignItems: 'center',
  },
  backWrap: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    marginTop: 15,
    zIndex: 15,
  },
  shadowimg: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    borderRadius: 15,
  },
  profileimg: {
    width: '100%',
    borderRadius: 15,
  },
  contWrap2: {
    width: '100%',
    marginLeft: 20,
  },
  descTitle: {
    marginTop: 7,
    marginBottom: 7,
    fontWeight: '500',
    fontSize: 18,
    color: '#111111',
  },
  descWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    marginRight: 9,
    marginBottom: 6,
  },
  descFont: {
    fontSize: 15,
    fontWeight: '400',
    color: '#111111',
  },
  contWrap3: {
    width: '100%',
    marginLeft: 16,
  },
  cateFont1: {
    fontSize: 12,
    fontWeight: '500',
    color: '#F84B62',
    marginRight: 4,
    backgroundColor: '#F84B621A',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  cateFont2: {
    fontSize: 13,
    fontWeight: '400',
    color: '#111111',
    marginRight: 4,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 12,
  },
  contWrap4: {
    width: '100%',
    marginTop: 2,
    marginLeft: 16,
    marginBottom: 12,
    flexDirection: 'row',
  },
  smallimg: {
    borderRadius: 3,
  },
  introWrap: {
    marginLeft: 10,
  },
  introTitle: {
    fontWeight: '500',
    fontSize: 13,
    color: '#111111',
  },
  introTextwrap: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  introText: {
    width: 45,
    height: 18,
    fontWeight: '400',
    color: '#888888',
    fontSize: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 4,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
  },
  introReview: {
    flexDirection: 'row',
    // textAlignVertical: 'center',
  },
  fontReview: {
    fontWeight: '400',
    color: '#888888',
    fontSize: 10,
    alignItems: 'center',
  },
  introScore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  scoreImg: {
    marginRight: 4,
  },
  buttonB: {
    width: '100%',
    height: 56,
    backgroundColor: '#F84B62',
  },
  buttonT: {
    textAlign: 'center',
    marginVertical: 17,
    color: '#FFFFFF',
    fontSize: 15,
  },
});
