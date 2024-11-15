import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import {
    Onboarding,
    Welcome
} from "./screens";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Stack = createStackNavigator();

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName={'Onboarding'}
                    >
                        {/* Onboarding */}
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Welcome" component={Welcome} />
                    </Stack.Navigator>
                </NavigationContainer>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}

export default App;