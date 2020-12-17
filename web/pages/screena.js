import { StyleSheet, Text, View } from 'react-native'

export default function ScreenA() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Screen A
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/screenb`}>
        Screen B
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
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})
