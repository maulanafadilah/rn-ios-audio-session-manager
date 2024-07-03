import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to AudioSessionManager.web.ts
// and on native platforms to AudioSessionManager.ts
import AudioSessionManagerModule from './AudioSessionManagerModule';
import AudioSessionManagerView from './AudioSessionManagerView';
import { ChangeEventPayload, AudioSessionManagerViewProps } from './AudioSessionManager.types';

// Get the native constant value.
export const PI = AudioSessionManagerModule.PI;

export function hello(): string {
  return AudioSessionManagerModule.hello();
}

export async function setValueAsync(value: string) {
  return await AudioSessionManagerModule.setValueAsync(value);
}

const emitter = new EventEmitter(AudioSessionManagerModule ?? NativeModulesProxy.AudioSessionManager);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AudioSessionManagerView, AudioSessionManagerViewProps, ChangeEventPayload };
