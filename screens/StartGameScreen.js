import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invaid Number', 'The number that you have entered is invalid, enter between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue('');
        Keyboard.dismiss()
    }


    let confirmedMsg

    if (confirmed) {
        confirmedMsg = (<Card style={styles.summaryContainer}>
            <Text>The confirmed number is</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start Game" />
            </Card>)
    }

    return (
       <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
            <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
               <View style={styles.ButtonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress= {resetInputHandler} color={Colors.primary} /></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.accent} /></View>
               </View>
            </Card>
            {confirmedMsg}
        </View>
       </TouchableWithoutFeedback>
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
    },
    button: {
        width: 100,
    },
    input: {
        width: 100,
        textAlign: 'center',
    },
    summaryContainer: {
        padding: 20,
    }
})
