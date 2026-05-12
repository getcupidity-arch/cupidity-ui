import api from '@/lib/axios';
import type { AuthResponse, UserResponse } from '@/types';

export const authService = {
  async googleLogin(credential: string): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/auth/google', { credential });
    return data;
  },

  async getMe(): Promise<UserResponse> {
    const { data } = await api.get<UserResponse>('/auth/me');
    return data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },
};
