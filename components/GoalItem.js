import { View, Text, StyleSheet, Pressable } from 'react-native'
const GoalItem = ({ text, deleteFromList, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#4fafafa' }}
        onPress={() => deleteFromList(id)}
        style={({ pressed }) => pressed && styles.pressedStyle}
      >
        <Text style={{ color: 'white', padding: 8 }}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 9,
    borderRadius: 6,
    backgroundColor: '#5e0acc',

    color: 'white',
  },
  pressedStyle: {
    backgroundColor: '#4fafafa',
  },
})
