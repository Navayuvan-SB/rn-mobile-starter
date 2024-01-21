import React from 'react';
import { useWindowDimensions } from 'react-native';

const useDimensionsStyles = <T,>(styleGenerator: (height: number) => T): T => {
  const { height } = useWindowDimensions();
  return styleGenerator(height + 50);
};

export default useDimensionsStyles;
