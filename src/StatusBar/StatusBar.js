import React from "react";
import { StatusBar as SBar, Platform, View } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

function StatusBar(props) {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return isFocused ?
    Platform?.OS == 'ios' ?
      <View style={{ height: insets?.insets, width: '100%', backgroundColor: '#FFFFFF' }}>
        <SBar animated={true} barStyle={'dark-content'} {...props} />
      </View>
      :
      <SBar animated={true} barStyle={'dark-content'} {...props} />
    :
    Platform?.OS == 'ios' ?
      <View style={{ height: insets?.insets, width: '100%', backgroundColor: '#FFFFFF' }}>
        <SBar animated={true} barStyle={'dark-content'} {...props} />
      </View>
      :
      <SBar animated={true} barStyle={'dark-content'} {...props} />;
}
export default StatusBar