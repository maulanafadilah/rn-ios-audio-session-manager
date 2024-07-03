import * as AudioSessionManager from "audio-session-manager";
import { Audio } from "expo-av";

async function checkMicrophonePermission(): Promise<boolean> {
  const result = await Audio.requestPermissionsAsync();
  console.log("PERMISSION GRANTED? ", result);
  return result.granted;
}

async function checkMicrophoneAvailability(): Promise<boolean> {
  const hasPermission = await checkMicrophonePermission();
  if (!hasPermission) {
    console.log("Microphone permission not granted");
    return false;
  }

  try {
    const isMicrophoneInUse: any =
      await AudioSessionManager.checkAudioSession();
    console.log("Microphone in use:", isMicrophoneInUse);
    return !isMicrophoneInUse;
  } catch (error) {
    console.error("Failed to check audio session", error);
    return false;
  }
}

export { checkMicrophoneAvailability };
