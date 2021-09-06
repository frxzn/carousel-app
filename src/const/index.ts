import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const SCREEN_WIDTH_PERCENTAGE = 8 / 10;
export const BORDER_RADIUS = 12;
export const IMAGE_MARGIN = 8;
export const IMAGE_WIDTH =
  SCREEN_WIDTH * SCREEN_WIDTH_PERCENTAGE + 2 * IMAGE_MARGIN;
