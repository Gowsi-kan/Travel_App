interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

interface Color {
  primaryRedHex: string;
  primaryOrangeHex: string;
  primaryBlackHex: string;
  primaryDarkGreyHex: string;
  secondaryDarkGreyHex: string;
  primaryGreyHex: string;
  secondaryGreyHex: string;
  primaryLightGreyHex: string;
  secondaryLightGreyHex: string;
  primaryWhiteHex: string;
  primaryBlackRGBA: string;
  secondaryBlackRGBA: string;
  primaryGreenHex: string;
  secondaryRedHex: string;
}

// export const COLORS: Color = {
//   primaryRedHex: '#DC3535',
//   primaryOrangeHex: '#D17842',
//   primaryBlackHex: '#0C0F14',
//   primaryDarkGreyHex: '#141921',
//   secondaryDarkGreyHex: '#21262E',
//   primaryGreyHex: '#252A32',
//   secondaryGreyHex: '#252A32',
//   primaryLightGreyHex: '#52555A',
//   secondaryLightGreyHex: '#AEAEAE',
//   primaryWhiteHex: '#FFFFFF',
//   primaryBlackRGBA: 'rgba(12,15,20,0.5)',
//   secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
//   primaryGreenHex: '#ACFFA7',
//   secondaryRedHex: '#FF5E5E',
// };

// export const COLORS: Color = {
//   primaryRedHex: '#DC3535',
//   primaryOrangeHex: '#b266f2',
//   primaryBlackHex: '#F1EAFF',
//   primaryDarkGreyHex: '#E5D4FF',
//   secondaryDarkGreyHex: '#DCBFFF',
//   primaryGreyHex: '#DCBFFF',
//   secondaryGreyHex: '#E5D4FF',
//   primaryLightGreyHex: '#b266f2',
//   secondaryLightGreyHex: '#b266f2',
//   primaryWhiteHex: '#b266f2',
//   primaryBlackRGBA: '#E5D4FF',
//   secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
//   primaryGreenHex: '#ACFFA7',
//   secondaryRedHex: '#FF5E5E',
// };

// export const COLORS: Color = {
//   primaryRedHex: '#FF5E5E',
//   primaryOrangeHex: '#FFA500',
//   primaryBlackHex: '#303030',
//   primaryDarkGreyHex: '#363636',
//   secondaryDarkGreyHex: '#434343',
//   primaryGreyHex: '#555555',
//   secondaryGreyHex: '#555555',
//   primaryLightGreyHex: '#A0A0A0',
//   secondaryLightGreyHex: '#C0C0C0',
//   primaryWhiteHex: '#FFFFFF',
//   primaryBlackRGBA: 'rgba(48,48,48,0.5)',
//   secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
//   primaryGreenHex: '#00FF00',
//   secondaryRedHex: '#FF0000',
// };

export const COLORS: Color = {
  primaryRedHex: '#FF453A',
  primaryOrangeHex: '#FF9F0A',
  primaryBlackHex: '#1C1C1E',
  primaryDarkGreyHex: '#2C2C2E',
  secondaryDarkGreyHex: '#3A3A3C',
  primaryGreyHex: '#48484A',
  secondaryGreyHex: '#58585A',
  primaryLightGreyHex: '#636366',
  secondaryLightGreyHex: '#78787A',
  primaryWhiteHex: '#FFFFFF',
  primaryBlackRGBA: 'rgba(28,28,30,0.5)',
  secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
  primaryGreenHex: '#34C759',
  secondaryRedHex: '#FF3B30',
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};
