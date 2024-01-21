import { useContext } from 'react';
import { SnackbarContext } from '../../context/snackbar.context';

const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export default useSnackbar;
