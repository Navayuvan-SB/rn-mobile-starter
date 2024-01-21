import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import React, { useContext } from 'react';
import { Snackbar } from 'react-native-paper';
import { SnackbarContext } from '../../context/snackbar.context';
import Routes from './routes.config';

const Navigation: React.FC<NavigationContainerProps> = props => {
  const { isVisible, hideSnackbar, message } = useContext(SnackbarContext);

  return (
    <NavigationContainer>
      <Routes />
      <Snackbar visible={isVisible} onDismiss={hideSnackbar}>
        {message}
      </Snackbar>
      {props.children}
    </NavigationContainer>
  );
};

export default Navigation;
