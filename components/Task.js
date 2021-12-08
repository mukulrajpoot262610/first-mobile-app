import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const Task = ({ title }) => {
    return (
        <View style={tailwind('p-4 bg-gray-200 my-2 rounded-2xl')}>
            <Text style={tailwind('text-2xl')}>{title}</Text>
        </View>
    )
}

export default Task
