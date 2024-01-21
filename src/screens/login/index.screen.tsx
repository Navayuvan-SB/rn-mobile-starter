import React from 'react';
import { Text, TextInput } from 'react-native-paper';
import Scaffold from '../../configs/ui/scaffold.config';

import { StackScreenProps } from '@react-navigation/stack';
import { Controller, useForm } from 'react-hook-form';
import { Image, StyleSheet } from 'react-native';
import images from '../../assets/images';
import Button from '../../components/button.component';
import Loader from '../../components/loader.component';
import { RootStackParamList } from '../../configs/navigation/routes.config';
import useDimensionsStyles from '../../configs/ui/useDimentions.config';
import useSnackbar from '../../configs/ui/useSnackbar.config';
import { useLogin } from '../../services/hooks/authentication-hooks';

// Define the type for the navigation prop
type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, route }) => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);

  const { showSnackbar } = useSnackbar();

  const { mutateAsync, isPending } = useLogin({
    onSuccess: async data => {
      const { challenge, isTOTPRegistered, userId } = data;
      navigation.navigate('Home');
    },
    onError: (error, variables, context) => {
      showSnackbar('Invalid credentials, please try again');
    },
  });

  const { control, formState, handleSubmit } = useForm<FormData>({
    mode: 'onChange',
  });

  const onLoginTap = async (data: FormData) => {
    if (!data.email || !data.password) {
      showSnackbar('Email and Password should be present');
      return;
    }
    await mutateAsync(data);
  };

  return (
    <Scaffold>
      <Image source={images.Logo} style={styles.logo} />
      <Text variant="titleLarge" style={styles.title}>
        PassVault
      </Text>
      <Text variant="bodyLarge" style={styles.subTitle}>
        Login with your username and password
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            label="Email"
            style={styles.input}
            keyboardType="email-address"
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            value={value}
            style={styles.input}
            label="Password"
            onBlur={onBlur}
            secureTextEntry
            textContentType="password"
            onChangeText={value => onChange(value)}
          />
        )}
      />
      <Loader isLoading={isPending}>
        <Button
          mode="contained"
          onPress={handleSubmit(onLoginTap)}
          disabled={!formState.isValid}
          style={styles.button}>
          Login
        </Button>
      </Loader>
    </Scaffold>
  );
};

const styleGenerator = (height: number) =>
  StyleSheet.create({
    logo: { width: 110, height: 110, marginLeft: -20, marginTop: height * 0.1 },
    input: { marginVertical: 8 },
    title: { marginBottom: 4 },
    subTitle: {
      marginBottom: 20,
    },
    button: {
      marginTop: 10,
    },
  });

export default LoginScreen;
