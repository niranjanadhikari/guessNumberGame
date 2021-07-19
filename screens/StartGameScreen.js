import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import Card from '../components/Card'

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
               <View style={styles.ButtonContainer}>
               <Button title="Reset" />
               <Button title="Confirm" />
               </View>
            </Card>

        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    ButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    }
})
