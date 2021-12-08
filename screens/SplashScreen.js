import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-rn'

const SplashScreen = ({ navigation }) => {
    return (
        <View style={tw('relative h-full flex justify-start p-4 items-center bg-yellow-100')}>
            <StatusBar style="auto" />
            <Text style={tw('mt-28 self-start font-bold text-4xl text-black')}>Manage your daily</Text>
            <Text style={tw(' self-start font-bold text-4xl text-black')}>task with tasker</Text>
            <Image source={require('../assets/images/Saly-1.png')} style={tw('w-9/12 h-1/2')} />
            <Text style={tw('text-2xl my-6 text-black')}></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={tw('absolute bottom-10 flex justify-center items-center py-4 bg-yellow-400 w-11/12 rounded-2xl')}>
                <Text style={tw('text-2xl font-bold text-white')}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SplashScreen
