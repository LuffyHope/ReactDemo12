import React, {Component} from 'react';
import {
  Text,
  View,
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
        msg: "啥玩意儿！",
        cancelText: "取消",
        sureText: "确定",
        canPressShadow: false, //点击弹窗外面是否关闭
        havaCancle: false,
        cancel: () => {},
        sure: () => {}
      },
      options
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
    const { sure } = this.props;
    sure();
    this.close();
  };
  cancel = () => {
    const { cancel } = this.props;
    cancel();
    this.close();
  };

  close = () => {
    CommentDialog.hide(lastPopView);
  };

  render() {
    const {
      msg,
      sureText,
      cancelText,
      canPressShadow, //点击弹窗外面是否关闭
      havaCancle
    } = this.props;
    return (
      <View style={s.popViewWrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            canPressShadow && this.close();
          }}
          style={s.popViewBackDrop}
        >
          <View style={s.popViewBackDropView} />
        </TouchableWithoutFeedback>

        <View style={s.main}>
          <View style={s.topMain}>
            <Text style={{ color: "#343434", fontSize: pTd(18) }}>
              温馨提示
            </Text>
          </View>

          <View style={s.viewLine} />

          <View style={s.center}>
            <Text style={s.message}>{msg}</Text>
          </View>

          <View style={s.viewLine} />

          <View style={s.bottom}>
            {havaCancle ? (
              <>
                <TouchableOpacity style={[s.submitBtn]} onPress={this.cancel}>
                  <Text style={s.cancleText}>{cancelText}</Text>
                </TouchableOpacity>

                <View style={s.viewLine2} />
              </>
            ) : null}

            <TouchableOpacity style={s.submitBtn} onPress={this.sure}>
              <Text style={s.submitText}>{sureText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CommentDialog;
