import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { RootStackParamList } from '../../configs/navigation/routes.config';
import Scaffold from '../../configs/ui/scaffold.config';
import useDimensionsStyles from '../../configs/ui/useDimentions.config';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);

  return (
    <Scaffold>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </Scaffold>
  );
};

const styleGenerator = (height: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
    },
  });

export default HomeScreen;
