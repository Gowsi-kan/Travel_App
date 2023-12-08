import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SPACING } from '../theme/theme';

interface ProfilePicProps {
    isProfile?: boolean;
    imageSource: any;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ isProfile,imageSource }) => {
    return (
        <View style={styles.ImageContainer}>
            {isProfile ?
                (<Image
                    source={{uri: imageSource}}
                    style={styles.Image}
                />) : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    ImageContainer: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        borderRadius: SPACING.space_12,
        borderWidth: 2,
        borderColor: COLORS.primaryBlackHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image: {
        height: SPACING.space_36,
        width: SPACING.space_36,
    }
});

export default ProfilePic;
