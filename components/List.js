import React from 'react'

import {FlatList, Text} from 'react-native'

export default ({puntos}) => {
    console.log(puntos)
    return(
        <FlatList 
            data ={puntos.map (x => x.name)}
            renderItem={({item})=> <Text>{item}</Text>}
            keyExtractor = { item => item}
        />
    )
}
