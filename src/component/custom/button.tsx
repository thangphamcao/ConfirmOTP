import {StyleSheet, Text, View} from 'react-native';

interface ICustomButton {
  title: string;
  outline?: boolean;
  status?: 'primary' | 'normal' | 'important';
}

const CustomButton = (props: ICustomButton) => {
  const {title} = props;

  return (
    <View style={styles.wrapperButton}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FB7BBE',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  title: {
    fontWeight: '700',
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },

  // custom
});

export default CustomButton;
