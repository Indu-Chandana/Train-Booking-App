import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import { IconTextButton, TextButton } from '../../components'

const Welcome = () => {

    function renderHeaderImage() {
        return (
            <View>
                <Image
                    source={images.train}
                    style={{
                        width: SIZES.width,
                        height: 250
                    }}
                />
            </View>
        )
    }

    function renderLoginDetails() {
        return (
            <View style={{
                flex: 1,
                padding: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                {/* Title and Description */}
                <View style={{
                }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.gray50 }}>Log In</Text>
                    <Text style={{ ...FONTS.ps3, color: COLORS.gray50 }}>
                        Please choose how you would like to log in.
                    </Text>
                </View>

                {/* Login Buttons */}
                <View>
                    {/* Phone Number */}
                    <IconTextButton
                        icon={icons.smartphone}
                        label="Continue with Phone Number"
                        containerStyle={{
                            borderColor: COLORS.primary500,
                            backgroundColor: COLORS.primary500
                        }}
                        onPress={() => { }}
                    />

                    {/* Apple */}
                    <IconTextButton
                        icon={icons.apple_logo}
                        label="Continue with Apple"
                        containerStyle={{ marginTop: SIZES.padding }}
                    />

                    {/* Google */}
                    <IconTextButton
                        icon={icons.google_logo}
                        label="Continue with Google"
                        containerStyle={{ marginTop: SIZES.padding }}
                    />

                    {/* FaceBook */}
                    <IconTextButton
                        icon={icons.fb_logo}
                        label="Continue with FaceBook"
                        containerStyle={{ marginTop: SIZES.padding }}
                    />

                </View>

                {/* Sign up */}
                <View>
                    <Text style={{ ...FONTS.l3, textAlign: 'center', color: COLORS.gray400 }}>Don't have an account?</Text>

                    <TextButton
                        label="Create an Account"
                        contentContainerStyle={{ marginTop: SIZES.padding }}
                        onPress={() => { }}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.gray400
            }}
        >
            <View
                style={{
                    flex: 1,
                    overflow: 'hidden',
                    backgroundColor: COLORS.gray900

                }}
            >
                {/* Header Image */}
                {renderHeaderImage()}

                {/* Login Details */}
                {renderLoginDetails()}
            </View>
        </View>
    )
}

export default Welcome

// import { View, Text, StyleSheet } from 'react-native'
// import React, { useCallback, useMemo, useRef } from 'react'
// import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
// import { IconTextButton, TextButton } from '../../components'
// import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// const Welcome = () => {
//     // ref
//     const bottomSheetRef = useRef(null);

//     // callbacks
//     const handleSheetChanges = useCallback((index) => {
//         console.log('handleSheetChanges', index);
//     }, []);

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 backgroundColor: COLORS.gray400
//             }}
//         >
//             <BottomSheet
//                 ref={bottomSheetRef}
//                 onChange={handleSheetChanges}
//             >
//                 <BottomSheetView style={styles.contentContainer}>
//                     <Text>Awesome 🎉</Text>
//                 </BottomSheetView>
//             </BottomSheet>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'grey',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 36,
//         alignItems: 'center',
//     },
// });


// export default Welcome