import { action, computed, flow, makeObservable, observable, onBecomeObserved } from 'mobx';
import * as api from '../api';

class AuthStore {
  public profile: any = null;

  constructor() {
    makeObservable(this, {
      profile: observable,
      loadData: flow.bound,
      setTokenToStorage: action,
      logOut: action,
      setProfile: action,
    });

    onBecomeObserved(this, 'profile', this.loadData);
  }

  setTokenToStorage = (token: any): void => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  };

  logOut = (): void => {
    this.profile = null;
    this.setTokenToStorage(null);
  };

  setProfile = (data: any): void => {
    this.profile = data;
  };

  *loadData() {
    const token = localStorage.getItem('token');

    try {
      if (token) {
        const { data } = yield api.auth.getProfile();
        this.profile = data;
      }
    } catch {

    } 
  }
}

export default new AuthStore();
