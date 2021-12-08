import React from 'react'
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn'

const Create = () => {
    return (
        <View style={tw('bg-gray-200 h-full p-4')}>
            <Text style={tw('mt-28 self-start font-bold text-4xl text-black')}>Enter Task Name</Text>
            <TextInput placeholder="Enter New Task" style={tw('p-4 border rounded-2xl mb-6 mt-4 text-2xl')}></TextInput>
            <TouchableOpacity style={tw('flex justify-center items-center py-4 bg-yellow-400 rounded-2xl')}>
                <Text style={tw('text-2xl font-bold text-white')}>Create Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Create
