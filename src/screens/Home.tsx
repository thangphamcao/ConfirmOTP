import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  ConfirmOTP: undefined;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text>HOME</Text>
      <Button
        title="ConfirmOTP"
        onPress={() => {
          console.log('navigate');
          navigation.navigate('ConfirmOTP');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
