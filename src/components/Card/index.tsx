import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

interface Props {
  title: string;
  uri: string;
}

const Card: React.FC<Props> = ({ title, uri }) => {
  return (
    <View style={styles.root}>
      <FastImage style={styles.image} source={{ uri }} resizeMode="cover" />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Card);
