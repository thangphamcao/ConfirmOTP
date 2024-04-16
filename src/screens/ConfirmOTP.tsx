import {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import CustomButton from '../component/custom/button';

interface IConfirmCodeProps {
  code: string;
  index: number;
  handleSetCode: () => void;
}

const renderNumberConfirm = (props: IConfirmCodeProps) => {
  const {index, code, handleSetCode} = props;
  return (
    <TouchableOpacity key={index} onPress={handleSetCode}>
      <View style={styles.confirmCode}>
        <Text style={styles.textCode}>{code && code}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ConfirmOTP = () => {
  const [codeOPT, setCodeOPT] = useState<string[]>(['', '', '', '', '', '']);

  const inputRef = useRef<TextInput>(null);
  const handleSetCode = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChangeText = (text: string) => {
    const char = text.charAt(text.length - 1);
    const index = text.length - 1;

    if (index < 6) {
      setCodeOPT(prev => {
        const newCodeOPT = [...prev];
        newCodeOPT[index] = char;
        return newCodeOPT;
      });
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      const updateOTP = [...codeOPT];
      const currentIndex = codeOPT.findIndex(item => item === '');

      updateOTP[currentIndex === -1 ? codeOPT.length - 1 : currentIndex - 1] =
        '';
      setCodeOPT(updateOTP);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.textTitle}>Xác nhận Mã OTP</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Chúng tôi vừa gửi mã OTP đến SĐT của người được bảo hiểm. Vui lòng
            nhập vào bên dưới để các thông tin vừa rồi{' '}
            <Text style={styles.textImportant}>
              được xác nhận là chính xác bởi người được bảo hiểm.{' '}
            </Text>
          </Text>
        </View>
        <View style={styles.wrapConfirm}>
          {codeOPT!.map((item, index) => {
            const props: IConfirmCodeProps = {
              code: item,
              index: index,
              handleSetCode: handleSetCode,
            };
            return renderNumberConfirm(props);
          })}
        </View>
        <View>
          <TextInput
            maxLength={6}
            ref={inputRef}
            style={styles.input}
            onChangeText={handleChangeText}
            onKeyPress={event => handleKeyPress(event)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.wrapButton}>
        <CustomButton title="Xác nhận" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: '#E6EFFF',
  },
  topView: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
    letterSpacing: 1,
  },

  wrapperTitle: {
    marginBottom: 25,
  },

  textTitle: {
    color: '#095EFB',
    fontSize: 28,
    fontWeight: '700',
  },

  textImportant: {
    fontWeight: '700',
  },
  wrapConfirm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 16,
  },
  confirmCode: {
    height: 64,
    width: 49,
    borderRadius: 16,
    backgroundColor: '#F1F6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    opacity: 0,
  },
  wrapButton: {
    justifyContent: 'flex-end',
  },

  textCode: {
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
  },
});

export default ConfirmOTP;
