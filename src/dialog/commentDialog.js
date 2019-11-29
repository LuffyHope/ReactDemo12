import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles as s} from './styles';
import RootSiblings from 'react-native-root-siblings';
import {pTd} from './size';

let lastPopView;
class CommentDialog extends Component {
  static show = options => {
    options = Object.assign(
      {},
      {
        containt: '',
        cancelText: '取消',
        sureText: '确定',
        canPressShadow: false,//点击弹窗外面是否关闭
        cancel: () => {},
        sure: () => {},
      },
      options,
    );
    if (lastPopView !== undefined) {
      CommentDialog.hide(lastPopView);
    }
    lastPopView = new RootSiblings((<DialogContainer {...options} />));
  };

  static hide = instance => {
    instance.destroy();
  };

  render() {
    return null;
  }
}

class DialogContainer extends Component {
  sure = () => {
    const {sure} = this.props;
    sure();
    this.close();
  };
  cancel = () => {
    const {cancel} = this.props;
    cancel();
    this.close();
  };
  close = () => {
    CommentDialog.hide(lastPopView);
  };
  render() {
    const {
      containt,
      sureText,
      cancelText,
      canPressShadow,//点击弹窗外面是否关闭
    } = this.props;
    return (
      <View style={s.popViewWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            canPressShadow && this.close();
          }}
          style={s.popViewBackDrop}>
          <View style={s.popViewBackDropView} />
        </TouchableWithoutFeedback>
        {true && (
          <View style={{...s.popView}}>
            <View style={s.main}>
              <View style={s.top}>
                <View style={s.topMain}>
                  <Text style={{color: '#fff'}}>头部</Text>
                </View>
              </View>
              <View style={s.center}>
                <Text style={s.message}>{containt}</Text>
              </View>
              <View style={s.bottom}>
                <TouchableOpacity
                  style={[s.submitBtn, s.marginRight20]}
                  onPress={this.cancel}>
                  <Text style={s.submitText}>{cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.submitBtn} onPress={this.sure}>
                  <Text style={s.submitText}>{sureText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default CommentDialog;
