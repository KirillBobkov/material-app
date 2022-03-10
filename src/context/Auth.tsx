
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import * as api from '../api';

export const AuthContext = createContext({
  profile: null,
  setProfile: (arg: any): any => {},
  setTokenToStorage: (arg: any): any => {},
  logOut: () => {},
});

export function AuthProvider(props: any) {
  const [profile, setProfile] = useState(null);

  const setTokenToStorage = useCallback((token) => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, []);

  const logOut = useCallback(() => {
    setProfile(null);
    setTokenToStorage(null);
  }, [setTokenToStorage]);

  const loadData = useCallback(async () => {
    const token = localStorage.getItem('token');

    try {
      if (token) {
        const { data } = await api.auth.getProfile();
        setProfile(data);
      }
    } catch {
      setTokenToStorage(null);
    } 
  }, [setTokenToStorage]);

  useEffect(() => { loadData(); }, [loadData]);

  const contextValue = useMemo(() => ({
    profile,
    setProfile,
    setTokenToStorage,
    logOut,
  }), [profile, setProfile, setTokenToStorage, logOut]);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
