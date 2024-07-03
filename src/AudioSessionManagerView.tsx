import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AudioSessionManagerViewProps } from './AudioSessionManager.types';

const NativeView: React.ComponentType<AudioSessionManagerViewProps> =
  requireNativeViewManager('AudioSessionManager');

export default function AudioSessionManagerView(props: AudioSessionManagerViewProps) {
  return <NativeView {...props} />;
}
