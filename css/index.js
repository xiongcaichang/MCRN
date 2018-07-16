/**
 * css配置
 * @authors 杨景帅 (yangjingshuai@meicai.cn)
 * @date    2018-07-10 10:45:43
 * @version $Id$
 */
import { Platform } from 'react-native';
import {isIOS, isIphoneX, onePixel, DEVICE_WIDTH, DEVICE_HEIGHT } from '../device';

export const topHeight = Platform.OS === 'ios' ? (isIphoneX ? 44 : 20) : 20;
export const bottomHeight = isIphoneX ? 34 : 0;
export const pageCardHeight = DEVICE_HEIGHT - topHeight - 20;
export const pageCommonHeight = DEVICE_HEIGHT - topHeight;
export const pageNoHeadHeight = DEVICE_HEIGHT - topHeight - 44;

// flexDirection 默认是column，justifyContent 默认是flex-start，alignItems默认是stretch
// 子元素横向排列（flexDirection: "row"），水平垂直居中
export const STYLE_FR_VC_HC = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
// 子元素横向排列（flexDirection: "row"），垂直居底，水平居中
export const STYLE_FR_VFE_HC = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
};
// 子元素横向排列，垂直居中，水平均匀分布，中间用空格填满
export const STYLE_FR_VC_HSA = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
};
// 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自靠边
export const STYLE_FR_VC_HSB = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
// 子元素横向排列，垂直从底部开始，水平分布，中间用空格填满，最两边元素各自靠边
export const STYLE_FR_VFE_HSB = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};
// 子元素横向排列，垂直居上，水平分布，中间用空格填满，最两边元素各自靠边
export const STYLE_FR_VFS_HSB = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};
// 子元素横向排列，垂直居中，水平方向从头部开始排列
export const STYLE_FR_VC_HFS = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
// 子元素横向排列，垂直居中，水平方向从尾部开始排列
export const STYLE_FR_VC_HFE = {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

// 子元素垂直排列，水平垂直居中
export const STYLE_FC_VC_HC = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
// 子元素垂直排列，垂直居中，水平方向从头开始排列
export const STYLE_FC_VC_HFS = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
};
// 子元素垂直排列，垂直居中，水平方向从尾开始排列
export const STYLE_FC_VC_HFE = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
};
// 子元素垂直排列，垂直元素之间用空格填满，水平方向居中
export const STYLE_FC_VSA_HC = {
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
};
// 子元素垂直排列，垂直元素之间用空格填满，最两边元素各自靠边,水平方向居中
export const STYLE_FC_VSB_HC = {
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};
// 子元素垂直排列，垂直从底部开始，水平方向居中
export const STYLE_FC_VFE_HC = {
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

// 子元素垂直排列，垂直从顶部开始，stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度
export const STYLE_FC_VFS_HFS = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};
// 子元素垂直排列，垂直从顶部开始，水平方向居中
export const STYLE_FC_VFS_HC = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export default {
  '$isIOS':isIOS,
  '$isIphoneX':isIphoneX,
  '$onePixel':onePixel,
  '$DEVICE_WIDTH':DEVICE_WIDTH,
  '$DEVICE_HEIGHT':DEVICE_HEIGHT,
  '$rem': DEVICE_WIDTH >= 414 ? 18 : (DEVICE_WIDTH <= 320 ? 14 : 16),  // 也可以和现在一样根据屏幕适配，iPhone8对应16
  '$topBarHeight': topHeight
};

