import { StyleSheet } from 'react-native';
import { IMAGE_MARGIN } from 'const';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 32,
  },
  carousel: {
    paddingHorizontal: IMAGE_MARGIN * 2,
    paddingVertical: 10,
  },
});

export default styles;
