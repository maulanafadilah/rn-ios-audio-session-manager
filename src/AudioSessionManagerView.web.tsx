import * as React from 'react';

import { AudioSessionManagerViewProps } from './AudioSessionManager.types';

export default function AudioSessionManagerView(props: AudioSessionManagerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
