import { StyleSheet, Text, View } from 'react-native'
import { name } from '../app.json'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        { name }
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/screena`}>
        a
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/screenb`}>
        b
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/screenc`}>
        c
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})
