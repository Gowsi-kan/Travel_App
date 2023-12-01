import LottieView from 'lottie-react-native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProps {
    title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.EmptyCardContainer}> 
          <LottieView
              style={styles.LottieStyle}
              source={require('../lottie/Heart.json')}
              autoPlay
              loop
          />
          <Text style={styles.LottieText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    EmptyCardContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    LottieStyle: {
        height: 160,
    },
    LottieText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryOrangeHex,
        textAlign: 'center'
    }
})

export default EmptyListAnimation;