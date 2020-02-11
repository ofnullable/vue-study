import Storage from './storage';

export const getToken = () => Storage.get('token');

export const setToken = token => Storage.set({ token });

export const removeToken = () => Storage.remove('token');