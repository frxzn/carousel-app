import React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import styles from './styles';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CenterText: React.FC<Props> = ({
  children,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.root, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default CenterText;
