import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, TextInput, TouchableOpacity, FlatList, } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fetchRecords, storeRecords } from '../database.js';


export default function Welcome({ user, onLogout }) {
  const [records, setRecords] = useState([]); 
  const [record, setRecord] = useState('');
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchRecords(setRecords, '/records');
  }, []);

  useEffect(() => {
    fetchRecords(setTasks, '/tasks');
  }, []);

  const addRecord = (url) =>{
    storeRecords([...records, record], url);
    setRecord('');
  }

  const removeRecord = (item, url) =>{
    storeRecords(records.filter(e => e !== item), url);
  }

  const addTask = (url) =>{
    storeRecords([...tasks, task], url);
    setRecord('');
  }

  const removeTask = (item, url) =>{
    storeRecords(tasks.filter(e => e !== item), url);
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLogout}>
          <Text style={[styles.button, {marginBottom: 10, backgroundColor: '#595085'}]}>Sair</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Bem vindo!</Text>
        <Text style={[styles.text, {fontSize: 15, marginTop: -20}]}>Email: {user.email}</Text>
        <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nome do Pet"
          style={styles.input}
          value={record}
          onChangeText={setRecord}
        />
        <TouchableOpacity onPress={() => addRecord('/records')}>
        <Text style={[styles.button, {marginLeft: -10, marginTop: 4}]}>
          Salvar Pet
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={records}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item})=>(
            <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity onPress={() => removeRecord(item, '/records')} style={{justifyContent: 'center'}}>
          <FontAwesome name="remove" style={styles.icon} />
        </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tarefas do dia"
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={() => addTask('/tasks')}>
        <Text style={[styles.button, {marginLeft: -10, marginTop: 4}]}>
          Salvar Pet
        </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item})=>(
            <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(item, '/tasks')} style={{justifyContent: 'center'}}>
          <FontAwesome name="remove" style={styles.icon} />
        </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  button:{
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#FEB664',
    color: 'white',
    padding: 8,
    borderRadius: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 17,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255, 0.6)',
  },

  listContainer: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer:{
    flexDirection: 'row',
    marginBottom: 5,
  },
  item:{
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon:{
    color: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    marginLeft: 10,
  },
});