import { View, Button, StyleSheet, TextInput, Modal, Image } from 'react-native'
import Goal from '../assets/goal.png'

const GoalInput = ({ text, setText, addToList, setModel, model }) => {
  return (
    <Modal visible={model} animationType="slide">
      <View style={styles.inputView}>
        <Image style={styles.img} source={Goal} />
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          style={styles.textInput}
          placeholder="Text"
        />
        <View style={styles.btnConteiner}>
          <View style={styles.btn}>
            <Button onPress={addToList} title="add Goal" />
          </View>
          <View style={styles.btn}>
            <Button onPress={() => setModel(!model)} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputView: {
    flex: 1,

    alignItems: 'center',

    borderBottomWidth: 1,
    gap: 10,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '90%',
    marginRight: 8,
    padding: 8,
  },
  btn: {
    width: '40%',
  },
  btnConteiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  img: {
    width: 100,
    height: 100,
  },
})
