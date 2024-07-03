import ExpoModulesCore
import AVFoundation

public class AudioSessionManagerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("AudioSessionManager")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    AsyncFunction("checkAudioSession") { () -> Bool in
      let session = AVAudioSession.sharedInstance()
      return session.isOtherAudioPlaying
    }
  }
}
