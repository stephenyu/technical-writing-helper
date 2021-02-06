import * as React from 'react';

export type MessageProps = {
  message: string
}

export const Message = ({ message }: MessageProps) => <span>{message}</span>;

