import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,Text, View, TextInput, Button} from 'react-native';


export default function App() {
  const name: string = "Joaquin";
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Añade una tarea'/>
          <Button title="+"/>
        </View>
        <View style={styles.tasksContainer}>
          <Text style={styles.title}>Tareas pendientes</Text>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>Tarea 1</Text>
            <Button title='x' color={'red'}/>
          </View>
        </View>
        <StatusBar style='light'/>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#5c5d61',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 60,
    justifyContent: 'space-around'
  },
  textInput:{
    borderWidth:1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius:15,
    backgroundColor: 'white',
    width: '90%'
  },
  tasksContainer:{
    gap: 10,
    paddingTop:15,
  },
  title:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  taskContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  taskText:{
    color:'white'
  }
})