import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, SCREEN_WIDTH, SCREEN_WIDTH_PERCENTAGE } from 'const';

const styles = StyleSheet.create({
  root: {
    width: SCREEN_WIDTH * SCREEN_WIDTH_PERCENTAGE,
    marginHorizontal: 8,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    borderColor: '#dbdbdb',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  titleContainer: {
    height: 64,
    justifyContent: 'center',
    marginHorizontal: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4a4a4a',
  },
});

export default styles;
