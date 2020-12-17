import { StyleSheet, View } from 'react-native'
import Test from '../../shared/components/Test'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Test />
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
