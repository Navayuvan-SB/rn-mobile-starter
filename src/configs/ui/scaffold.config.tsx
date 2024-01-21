import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../components/app-header.component';
import useDimensionsStyles from './useDimentions.config';

interface ScaffoldProps {
  appbar?: React.ReactNode;
  fab?: React.ReactNode;
  children?: React.ReactNode;
}

const Scaffold: React.FC<ScaffoldProps> = ({ appbar, fab, children }) => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);

  const isAppBarFromHeader =
    appbar && (appbar as React.ReactElement).type == AppHeader;

  const renderElements = () => (
    <View style={styles.root}>
      {appbar ?? <></>}
      <View style={styles.body}>{children}</View>
      {fab}
    </View>
  );

  if (isAppBarFromHeader) return renderElements();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} />
      {renderElements()}
    </SafeAreaView>
  );
};

const styleGenerator = (height: number) =>
  StyleSheet.create({
    root: {
      height: height,
      backgroundColor: '#fff',
    },
    body: {
      padding: 8,
    },
  });

export default Scaffold;
