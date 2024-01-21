import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import useDimensionsStyles from '../configs/ui/useDimentions.config';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={20} />
      </View>
    );
  }

  return children;
};
const styleGenerator = (height: number) =>
  StyleSheet.create({
    loaderContainer: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Loader;
