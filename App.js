import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Button, FlatList, Image } from 'react-native'
import { useState } from 'react'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [model, setModel] = useState(false)
  const addToList = () => {
    const id = Math.random() * 100
    if (text) {
      setList([...list, { text, id }])
      setText('')
      setModel(!model)
    }
  }
  const deleteFromList = (id) => {
    setList((changedList) => changedList.filter((val) => val.id !== id))
  }
  return (
    <View style={styles.container}>
      <Button
        title="add goal"
        color="#5e0acc"
        onPress={() => setModel(!model)}
      />

      <GoalInput
        text={text}
        model={model}
        setModel={setModel}
        addToList={addToList}
        setText={setText}
      />
      <FlatList
        data={list}
        renderItem={(itemData) => {
          const { item } = itemData
          const { text, id } = item
          return (
            <GoalItem deleteFromList={deleteFromList} id={id} text={text} />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        stlye={styles.listView}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 16,

  },

  listView: {
    backgroundColor: 'red',
    flexDirection: 'column',

    height: '80%',
    width: 100,
  },
})
