export const fontFamilies = {
    sourceSansPro: 'Source Sans Pro',
  };
  
  export const fontWeights = {
    fontWeightRegular: 400,
    fontWeightBold: 700,
  };
  
  const baseFont = 16;
  const pxToRem = (val) => `${Number(val / baseFont).toFixed(2)}rem`;
  
  export const fontSizes = {
    font30: pxToRem(30),
    font28: pxToRem(28),
    font26: pxToRem(26),
    font24: pxToRem(24),
    font22: pxToRem(22),
    font20: pxToRem(20),
    font18: pxToRem(18),
    font16: pxToRem(16),
    font14: pxToRem(14),
    font12: pxToRem(12),
    font10: pxToRem(10),
  };
  //  fontFamily: 'Lato',
  const typography = {
    fontFamily: [fontFamilies.sourceSansPro].join(','),
    HeadingExtraLarge: {
      fontSize: fontSizes.font30,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    HeadingExtraLargeNormal: {
      fontSize: fontSizes.font30,
      fontStretch: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleExtraLarge: {
      fontSize: fontSizes.font28,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleExtraLargeNormal: {
      fontSize: fontSizes.font28,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleLarge: {
      fontSize: fontSizes.font26,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleLargeNormal: {
      fontSize: fontSizes.font26,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleLarge: {
      fontSize: fontSizes.font24,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleLargeNormal: {
      fontSize: fontSizes.font24,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleMedium: {
      fontSize: fontSizes.font22,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleMediumNormal: {
      fontSize: fontSizes.font22,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleMedium: {
      fontSize: fontSizes.font20,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleMediumNormal: {
      fontSize: fontSizes.font20,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleSmall: {
      fontSize: fontSizes.font18,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    SubtitleSmallNormal: {
      fontSize: fontSizes.font18,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleExtraSmall: {
      fontSize: fontSizes.font16,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    TitleExtraSmallNormal: {
      fontSize: fontSizes.font16,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    DescriptorSmall: {
      fontSize: fontSizes.font14,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    DescriptorSmallNormal: {
      fontSize: fontSizes.font14,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    HeadingLarge: {
      fontSize: fontSizes.font12,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    HeadingLargeNormal: {
      fontSize: fontSizes.font12,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    HeadingMedium: {
      fontSize: fontSizes.font10,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    HeadingMediumNormal: {
      fontSize: fontSizes.font10,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    ButtonTextOnLight: {
      fontSize: fontSizes.font14,
      fontWeight: 600,
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
    },
    ButtonTextOnDark: {
      fontSize: fontSizes.font14,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      textalign: 'center',
    },
    KeyValueRegularSmall: {
      fontSize: fontSizes.font22,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: '0.18px',
    },
  };
  
  export default typography;
  