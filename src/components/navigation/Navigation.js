import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from '../../screens/Detail'
import BottomTab from './BottomTab'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={BottomTab}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Navigation