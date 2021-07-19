import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max=Math.floor(max);
    const rndNum = (Math.floor(Math.random() * (max - min))) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }

}

const GameScreen = (props) => {
    const [ currentGuess, setcurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    return (
        <View style={styles.screen}>
            <Text>Opponents Guess</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card>
                <Button title="Lower" onPress={() => {}} />
                <Button title="Greater" onPress={() => {}} />
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
