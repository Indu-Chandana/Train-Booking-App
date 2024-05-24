import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONTS, COLORS } from "../constants"

const TextButton = ({
    contentContainerStyle,
    label,
    labelStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 55,
                borderRadius: 30,
                backgroundColor: COLORS.primary500,
                ...contentContainerStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{ ...FONTS.l2, color: COLORS.gray100, ...labelStyle }}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton

const styles = StyleSheet.create({})