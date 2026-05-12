import { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import { userService } from '@/services/userService';
import type { UpdateProfileData } from '@/types';

export function useAuth() {
  const { user, token, isAuthenticated, isLoading, setAuth, setUser, setLoading, logout } =
    useAuthStore();

  const { data: meData, isLoading: meLoading } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: () => authService.getMe(),
    enabled: !!token && !user,
    retry: false,
  });

  useEffect(() => {
    if (meData?.data?.user) {
      setUser(meData.data.user);
      setLoading(false);
    }
  }, [meData, setUser, setLoading]);

  useEffect(() => {
    if (!token) {
      setLoading(false);
    }
  }, [token, setLoading]);

  const googleLoginMutation = useMutation({
    mutationFn: (credential: string) => authService.googleLogin(credential),
    onSuccess: (data) => {
      setAuth(data.data.user, data.data.token);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      logout();
    },
    onError: () => {
      logout();
    },
  });

  return {
    user,
    token,
    isAuthenticated,
    isLoading: isLoading || meLoading,
    loginWithGoogle: googleLoginMutation.mutateAsync,
    isLoginLoading: googleLoginMutation.isPending,
    loginError: googleLoginMutation.error,
    handleLogout: logoutMutation.mutateAsync,
    isLogoutLoading: logoutMutation.isPending,
  };
}

export function useProfile() {
  const queryClient = useQueryClient();
  const { setUser } = useAuthStore();

  const profileQuery = useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => userService.getProfile(),
  });

  const updateProfileMutation = useMutation({
    mutationFn: (data: UpdateProfileData) => userService.updateProfile(data),
    onSuccess: (data) => {
      setUser(data.data.user);
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
    },
  });

  return {
    profile: profileQuery.data?.data?.user,
    isLoading: profileQuery.isLoading,
    error: profileQuery.error,
    updateProfile: updateProfileMutation.mutateAsync,
    isUpdating: updateProfileMutation.isPending,
    updateError: updateProfileMutation.error,
  };
}
