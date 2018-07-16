import { Dimensions, Platform, PixelRatio } from 'react-native'
const dimen = Dimensions.get('window');
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

export const DEVICE_WIDTH = dimen.width;
export const DEVICE_HEIGHT = dimen.height;
export const fixSize = (size) => PixelRatio.roundToNearestPixel((size / 375) * DEVICE_WIDTH);
export const onePixel = 1 / PixelRatio.get();
export const isIphoneX =  Platform.OS === 'ios' &&
((DEVICE_HEIGHT === X_HEIGHT && DEVICE_WIDTH === X_WIDTH) ||
    (DEVICE_HEIGHT === X_WIDTH && DEVICE_WIDTH === X_HEIGHT));
export default {
    DEVICE_WIDTH: DEVICE_WIDTH,
    DEVICE_HEIGHT: DEVICE_HEIGHT,
    onePixel: onePixel,
    isIOS: Platform.OS === 'ios',
}