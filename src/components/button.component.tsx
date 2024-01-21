import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';
import useDimensionsStyles from '../configs/ui/useDimentions.config';

interface ButtonProps extends PaperButtonProps {}

const Button: React.FC<ButtonProps> = props => {
  const styles =
    useDimensionsStyles<ReturnType<typeof styleGenerator>>(styleGenerator);

  const style = { ...styles.button, ...((props.style as Object) ?? {}) };
  return <PaperButton {...props} style={style} />;
};

const styleGenerator = (height: number) =>
  StyleSheet.create({
    button: {
      padding: 6,
    },
  });

export default Button;
