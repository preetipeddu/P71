import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Read story.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    }
})