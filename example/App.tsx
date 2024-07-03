import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

import { checkMicrophoneAvailability } from "./useMicrophoneCheck";

const App: React.FC = () => {
  const [microphoneAvailable, setMicrophoneAvailable] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    checkMicrophoneAvailability().then((isAvailable) => {
      setMicrophoneAvailable(isAvailable);
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <Text style={{ textAlign: "center" }}>
          Microphone available:{" "}
          {microphoneAvailable !== null
            ? microphoneAvailable
              ? "Yes"
              : "No"
            : "Checking..."}
        </Text>
        <Button
          title="Check Microphone Availability"
          onPress={() => {
            checkMicrophoneAvailability().then((isAvailable) => {
              setMicrophoneAvailable(isAvailable);
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
