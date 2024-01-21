import EncryptedStorage from 'react-native-encrypted-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Constants } from '../configs/constants';

type AuthenticationState = 'pending' | 'loggedIn' | 'loggedOut';
type UserContextType = {
  accessToken?: string;
  setAccessToken: (_accessToken: string) => void;
  authenticationState: AuthenticationState;
  loadAuthentication: () => void;
  logout: () => void;
};

const ACCESS_TOKEN_KEY = 'token';

const UserContext = createContext<UserContextType>({
  accessToken: '',
  setAccessToken: (_accessToken: string) => {},
  authenticationState: 'pending',
  loadAuthentication: () => {},
  logout: () => {},
});

const UserProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [authenticationState, setAuthenticationState] =
    useState<AuthenticationState>('pending');

  useEffect(() => {
    if (accessToken) {
      EncryptedStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      Constants.accessToken = accessToken;
    }
  }, [accessToken]);

  const loadAuthentication = async () => {
    const token = await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) {
      return setAuthenticationState('loggedOut');
    }
    setAccessToken(token);
    setAuthenticationState('loggedIn');
  };

  const logout = () => {
    setAccessToken('');
    setAuthenticationState('loggedOut');
  };

  const defaultValue: UserContextType = {
    accessToken,
    setAccessToken,
    authenticationState,
    loadAuthentication,
    logout,
  };

  return (
    <UserContext.Provider value={defaultValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
export { UserContext, UserProvider };
