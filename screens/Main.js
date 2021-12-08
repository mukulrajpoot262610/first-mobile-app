import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import tw from 'tailwind-rn'
import Task from '../components/Task';

const Main = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Task title={item.title} />
    );

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    return (
        <View style={tw('h-full flex justify-start bg-gray-100')}>
            <View style={tw('h-72 w-full rounded-3xl p-4 flex flex-row justify-center items-center bg-gray-200')} >
                <Image source={require('../assets/images/download.jpg')} style={tw('rounded-full h-28 w-28')} />
                <View style={tw('ml-5')}>
                    <Text style={tw('text-2xl font-bold')}>Mukul Rajpoot</Text>
                    <Text style={tw('text-xl')}>Developer</Text>
                </View>
            </View>
            <View style={tw('p-4 flex flex-row justify-between items-center')}>
                <Text style={tw('text-2xl font-bold')}>My Tasks</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Create Task')}>
                    <Text style={tw('text-3xl font-bold px-4 py-2 bg-black rounded-full text-white')}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={tw('p-4')}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Main
