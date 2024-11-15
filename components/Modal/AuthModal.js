import React from 'react'
import {
    Platform,
    View
} from 'react-native'
import {
    BottomSheetModal,
    BottomSheetBackdrop,
    BottomSheetView
} from '@gorhom/bottom-sheet'

import {
    COLORS,
    SIZES,
    icons,
    constants
} from "../../constants"

import {
    IconButton
} from "../../components"
import { Login } from '../../screens'

const AuthModal = ({
    bottomSheetModalRef,
    hideModal
}) => {
    const snapPoints = React.useMemo(() => {
        if (Platform.OS === 'ios') {
            return (
                ['93%']
            )
        } else {
            return (
                ['60%']
            )
        }
    })

    const renderBackdrop = React.useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={0.3}
                pressBehavior="none"
            />
        )
    )

    function renderHeader() {
        return (
            <View>
                <IconButton
                    icon={icons.angle_arrow_left}
                />
            </View>
        )
    }

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            backgroundStyle={{
                borderRadius: 0,
                backgroundColor: 'transparent'
            }}
            handleComponent={() => {
                return (
                    <View />
                )
            }}
            enablePanDownToClose={false}
        >
            <BottomSheetView
                style={{
                    flex: 1,
                    padding: SIZES.padding,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                    backgroundColor: COLORS.backgroundPrimary
                }}
            >
                {/* Header */}
                {renderHeader()}

                {/* Screens - Login, Signup and Forgot Password */}
                <Login />
            </BottomSheetView>
        </BottomSheetModal>
    )
}

export default AuthModal