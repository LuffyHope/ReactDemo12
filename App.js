/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,

} from 'react-native';

import Dialog from './src/dialog/commentDialog';


const App: () => React$Node = () => {
  return (
    <View style={styles.containt}>
      <TouchableOpacity  style={styles.text_out_style} onPress={()=>{
        Dialog.show(
          {
            containt:'内容',
            sure: () => {
              console.log('sure')
            },
            cancel:() =>{
              console.log('cancel')
            },
          }
        );
      }}>
      <Text style={styles.text_style}>点击弹窗</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containt: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_out_style:{
    width:100,
    height:40,
    backgroundColor:'#ee0',
    alignItems:'center',
    justifyContent:'center',
  },
  text_style:{
    color:'#ffffff',
    fontSize:18,
  },
});

export default App;
