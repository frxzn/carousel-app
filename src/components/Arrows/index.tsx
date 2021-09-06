import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface Props {
  index: number;
  indexCount: number;
  handleArrowPress: (newIndex: number) => void;
}

const Arrows: React.FC<Props> = ({ index, indexCount, handleArrowPress }) => {
  const disabledPrev = index <= 0;
  const disabledNext = index >= indexCount;

  return (
    <View style={styles.controls}>
      <TouchableOpacity
        disabled={disabledPrev}
        onPress={() => handleArrowPress(index - 1)}>
        <Icon
          name="navigate-before"
          size={48}
          color={disabledPrev ? '#d3d3d3' : '#ff0054'}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.index}>{index}</Text>
      </View>
      <TouchableOpacity
        disabled={disabledNext}
        onPress={() => handleArrowPress(index + 1)}>
        <Icon
          name="navigate-next"
          size={48}
          color={disabledNext ? '#d3d3d3' : '#ff0054'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Arrows;
