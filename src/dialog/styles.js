import { Dimensions, StyleSheet } from 'react-native';
import { pTd } from './size';

const winH = Dimensions.get('window').height;
const winW = Dimensions.get('window').width;
let width = 300;
let height = 224;

export const styles = StyleSheet.create({
  popViewWrapper: {
    zIndex: 200,
    elevation: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  popViewBackDrop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  popViewBackDropView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popView: {
    width: pTd(width),
    height: pTd(height),
    left: (winW - pTd(width)) / 2,
    top: (winH - pTd(height)) / 2,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: pTd(width),
    height: pTd(height),
    borderWidth: 1,
    borderRadius: pTd(12),
    borderColor: '#8A6E3C',
    backgroundColor: '#0E0D0B',
  },
  // 安卓上 position:absolute的子元素 超出 父元素的可点击子元素 那部分会不能点击
  androidAbsoluteBug: {
    paddingBottom: pTd(15),
    paddingLeft: pTd(15),
    paddingTop: pTd(15),
    paddingRight: pTd(15),
  },
  closeButton: {
    position: 'absolute',
    width: pTd(38),
    height: pTd(38),
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pTd(15),
    zIndex: 100,
  },
  closeImage: {
    width: pTd(38),
    height: pTd(38),
  },
  top: {
    height: pTd(50),
  },
  topMain: {
    flexDirection: 'row',
    height: pTd(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBorder: {
    position: 'absolute',
    bottom: 0,
    left: '5%',
    height: 1.5,
    right: '5%',
    width: '90%',
  },
  topImg1: {
    width: pTd(46),
    height: pTd(24),
    marginRight: pTd(30),
  },
  topImg3: {
    width: pTd(46),
    height: pTd(24),
    marginLeft: pTd(30),
  },
  center: {
    height: pTd(114),
    alignItems:'center',
    justifyContent:'center',
  },
  msgBox: {
    flex: 1,
  },
  message: {
    color: '#C99D6A',
    fontSize: pTd(18),
    textAlign: 'center',
    marginTop: pTd(40),
    paddingLeft: pTd(24),
    paddingRight: pTd(24),
  },
  bottom: {
    position: 'absolute',
    height: pTd(50),
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  submitBtn: {
    width: pTd(88),
    height: pTd(34),
    backgroundColor:'#C99D6A'
  },
  marginRight20: {
    marginRight: pTd(40),
  },
  submitImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: pTd(88),
    height: pTd(34),
  },
  submitText: {
    position: 'absolute',
    textAlign: 'center',
    lineHeight: pTd(34),
    width: pTd(88),
    color: '#ffffff',
    fontSize: pTd(16),
  },
});
