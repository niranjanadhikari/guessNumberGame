import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/Colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        padding: 2,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    number: {
        fontSize: 60,
        fontWeight: 'bold',
    }
})
