import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ICustomHeader {
  title: string;
  outline?: boolean;
  status?: 'primary' | 'normal' | 'important';
}

const CustomHeader = (props: ICustomHeader) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View style={styles.icon}>
          <AntDesign name="left" size={24} color="#074BC9" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
  },
  wrapperHeader: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    color: '#074BC9',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },

  // custom
});

export default CustomHeader;
