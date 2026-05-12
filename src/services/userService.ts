import api from '@/lib/axios';
import type { UserResponse, UpdateProfileData } from '@/types';

export const userService = {
  async getProfile(): Promise<UserResponse> {
    const { data } = await api.get<UserResponse>('/users/profile');
    return data;
  },

  async updateProfile(profileData: UpdateProfileData): Promise<UserResponse> {
    const { data } = await api.put<UserResponse>('/users/profile', profileData);
    return data;
  },
};
