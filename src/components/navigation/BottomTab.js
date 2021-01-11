import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLOR } from '../color/Color'
import Home from '../../screens/Home'
import Lists from '../../screens/Lists'

const Tab = createBottomTabNavigator()

const BottomTab = () => {

    const options = {
        style: {
            paddingBottom: 8,
            paddingTop: 8,
            backgroundColor: COLOR.F
        },
        activeTintColor: COLOR.B,
        inactiveTintColor: COLOR.A
    }

    return (
        <Tab.Navigator 
            tabBarOptions={options}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName
        
                    if(route.name === 'Home') {
                        iconName = 'home'
                    } else if(route.name === 'Lists') {
                        iconName = 'list'
                    }
                    return <Ionicons name={iconName} size={20} color={color} />
                }
            })}
        > 
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'HOME'
                }}
            />
            <Tab.Screen 
                name="Lists"
                component={Lists}
                options={{
                    title: 'LISTS'
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
