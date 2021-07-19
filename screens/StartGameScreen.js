import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <View style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
               <View style={styles.ButtonContainer}>
               <Button title="Reset" />
               <Button title="Confirm" />
               </View>
            </View>

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
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        paddingVertical: 40,
        marginTop: 20,
        borderRadius: 10,
    }
})
