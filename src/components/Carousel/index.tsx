import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGE_WIDTH } from 'const';
import { Media } from 'interfaces';
import styles from './styles';
import Card from '../Card';
import Arrows from '../Arrows';

interface Props {
  data: Media[];
  startIndex: number;
}

const Carousel: React.FC<Props> = ({ data, startIndex }) => {
  const [index, setIndex] = useState(startIndex);
  const flatlistRef = useRef<FlatList>();

  useEffect(() => {
    flatlistRef.current?.scrollToIndex({ index: startIndex, animated: false });
  }, [startIndex]);

  useEffect(() => {
    const saveIndex = async () => {
      await AsyncStorage.setItem('lastSavedIndex', JSON.stringify(index));
    };
    saveIndex();
  }, [index]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const floatIndex = event.nativeEvent.contentOffset.x / IMAGE_WIDTH;
    const roundIndex = Math.round(floatIndex);
    const distance = Math.abs(roundIndex - floatIndex);
    const deadCenter = distance > 0.4;

    if (roundIndex !== index && !deadCenter) {
      setIndex(roundIndex);
    }
  };

  const handleArrowPress = (newIndex: number) => {
    if (newIndex < 0 || newIndex > data.length - 1) {
      return;
    }
    flatlistRef.current?.scrollToIndex({ index: newIndex });
  };

  const renderItem = ({ item }: { item: Media }) => (
    <Card title={item.title} uri={item.image} />
  );

  const getItemLayout = (_: any, currIndex: number) => ({
    length: IMAGE_WIDTH,
    offset: IMAGE_WIDTH * currIndex,
    index: currIndex,
  });

  const keyExtractor = ({ id }: { id: string }) => id;

  return (
    <View style={styles.root}>
      <FlatList
        data={data}
        ref={flatlistRef as any}
        horizontal
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.carousel}
        decelerationRate="fast"
        snapToInterval={IMAGE_WIDTH}
        disableIntervalMomentum
        showsHorizontalScrollIndicator={false}
        initialNumToRender={0}
        maxToRenderPerBatch={1}
        scrollEventThrottle={16}
        windowSize={3}
        removeClippedSubviews
      />
      <Arrows
        index={index}
        indexCount={data.length - 1}
        handleArrowPress={handleArrowPress}
      />
    </View>
  );
};

export default Carousel;
