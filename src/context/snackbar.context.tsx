import React, { createContext, useRef, useState } from 'react';

const SNACKBAR_DURATION = 3000;

const SnackbarContext = createContext({
  isVisible: false,
  message: '',
  showSnackbar: (_message: string) => {},
  hideSnackbar: () => {},
});

const SnackbarProvider = (props: any) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const messageRef = useRef<string>('');

  const showSnackbar = (_message: string) => {
    messageRef.current = _message;
    setVisible(true);

    setTimeout(hideSnackbar, SNACKBAR_DURATION);
  };

  const hideSnackbar = () => {
    messageRef.current = '';
    setVisible(false);
  };

  const defaultValues = {
    isVisible,
    showSnackbar,
    hideSnackbar,
    message: messageRef.current,
  };

  return (
    <SnackbarContext.Provider value={defaultValues}>
      {props.children}
    </SnackbarContext.Provider>
  );
};

export { SnackbarContext, SnackbarProvider };
