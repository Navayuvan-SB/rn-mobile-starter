import React from 'react';
import { StatusBar } from 'react-native';
import Providers from './src/configs/provider.tsx';

export default function App() {
  return (
    <Providers>
      <StatusBar />
    </Providers>
  );
}
