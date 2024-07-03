import { StyleSheet, Text, View } from 'react-native';

import * as AudioSessionManager from 'audio-session-manager';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{AudioSessionManager.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
