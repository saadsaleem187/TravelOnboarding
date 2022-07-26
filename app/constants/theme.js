import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#1E1F20',
  white: '#FFFFFF',
  gray: '#6A6A6A',
  blue: '#338AFF',
};

export const SIZES = {
  // Global Sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font Sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // App Dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontFmaily: 'Robot-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFmaily: 'Robot-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFmaily: 'Robot-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFmaily: 'Robot-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFmaily: 'Robot-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFmaily: 'Robot-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFmaily: 'Robot-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFmaily: 'Robot-Regular', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
