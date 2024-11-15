import React from "react"
import {
    TouchableOpacity,
    Image
} from 'react-native'

import {
    COLORS
} from "../constants"

const IconButton = ({
    containerStyle,
    icon,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray100
                }}
            />
        </TouchableOpacity>
    )
}

export default IconButton