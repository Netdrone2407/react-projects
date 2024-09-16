import React from 'react'
import {
    View,
    Text,
    useColorScheme,
    Button,
    StyleSheet
} from 'react-native'

function App1():JSX.Element{
     const isDarkMode=useColorScheme() ==='dark'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode? styles.whiteText :styles.darkText}>My name is vaibhav bhardwaj and this is my first project in react native </Text>
            <Button title='enjoy'/>
        </View>
    )
}
const  styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    whiteText:{
        color:'#FFFFFF',
        fontSize:50
    },
    darkText:{
        color:'#000000',
        fontSize:50
    }
})

export default App1;