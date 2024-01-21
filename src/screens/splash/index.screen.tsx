import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import images from '../../assets/images';
import { RootStackParamList } from '../../configs/navigation/routes.config';
import Scaffold from '../../configs/ui/scaffold.config';
import useDimensionsStyles from '../../configs/ui/useDimentions.config';
import { useAuth } from '../../context/user.context';

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);
  const { loadAuthentication, authenticationState } = useAuth();

  useEffect(() => {
    loadAuthentication();
  }, []);

  useEffect(() => {
    decideAuthentication();
  }, [authenticationState]);

  const decideAuthentication = async () => {
    if (authenticationState === 'loggedIn') {
      return navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }

    if (authenticationState === 'loggedOut') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  };

  return (
    <Scaffold>
      <View style={styles.container}>
        <Image source={images.Logo} style={styles.logo} />
        <ActivityIndicator style={styles.loader} size={100} />
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
    logo: { width: 110, height: 110 },
    loader: { position: 'absolute' },
  });

export default SplashScreen;
