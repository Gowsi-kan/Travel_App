import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
    title?: string;
    isProfile?: boolean;
    navigation?: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, isProfile,navigation }) => {
    return (
        <View style={styles.HeaderContainer}>
            <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            <Text style={styles.HeaderText}>{title}</Text>
            <ProfilePic
                isProfile={isProfile}
                imageSource={'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;