
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import api from '../api/auth';

export const AuthContext = createContext({
  user: null,
  setUser: (arg: any): any => {},
  setToken: (arg: any): any => {},
  logOut: () => {},
});

export function AuthProvider(props: any) {
  const [user, setUser] = useState(null);

  const setToken = useCallback((tokenData) => {
    if (tokenData) {
      localStorage.setItem('token', tokenData);
    } else {
      localStorage.removeItem('token');
    }
  }, []);

  const logOut = useCallback(() => {
    setUser(null);
    setToken(null);
  }, [setToken]);

  const loadData = useCallback(async () => {
    const tokenData = localStorage.getItem('token');

    try {
      if (tokenData) {
        const { data } = await api.getProfile();
        setUser(data);
      }
    } catch {
      setToken(null);
    } 
  }, [setToken]);

  useEffect(() => { loadData(); }, [loadData]);

  const contextValue = useMemo(() => ({
    user,
    setUser,
    setToken,
    logOut,
  }), [user, setUser, setToken, logOut]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
