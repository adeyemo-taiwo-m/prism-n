import { api } from './client';

export const authApi = {
  getMe: async (): Promise<any> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
  renewAccessToken: async (): Promise<any> => {
    const response = await api.post('/auth/renew-access-token');
    return response.data;
  },
  logout: async (): Promise<any> => {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};
