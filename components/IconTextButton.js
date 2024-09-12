import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const IconTextButton = ({
    containerStyle,
    icon,
    label,
    onPress
}) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 55,
            borderWidth: 1,
            borderRadius: 30,
            borderColor: COLORS.gray500,
            ...containerStyle

        }}
            onPress={onPress}
        >
            {/* Icon */}
            <Image
                source={icon}
                resizeMode='contain'
                style={{ width: 30, height: 30, borderRadius: 15 }}
            />

            {/* label */}
            <Text style={{ ...FONTS.l2, marginLeft: SIZES.radius, color: COLORS.gray50 }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default IconTextButton