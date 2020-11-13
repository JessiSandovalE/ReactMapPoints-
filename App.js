import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { Map, Modal, Panel, Input, List}  from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') //new_punto, all_puntos
  const [visibility, setVisibility] = useState(false)

  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = {coordinate: puntoTemp, name: nombre}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' />
      <Modal visibility={visibility}>
        {visibilityFilter ==='new_punto' ?
        <>
          <Input  title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText}/>
          <Button title="Aceptar" onPress={handleSubmit}/>
        </>
        :
        <List puntos={puntos} />
      }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
