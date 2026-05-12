export interface User {
  _id: string;
  name: string;
  email: string;
  profilePicture: string;
  googleId: string;
  authProvider: string;
  bio: string;
  relationshipStatus: string;
  partnerId?: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface ApiError {
  success: false;
  message: string;
  errors?: string[];
}

export interface UpdateProfileData {
  name?: string;
  bio?: string;
  relationshipStatus?: string;
}

export type RelationshipStatus =
  | 'single'
  | 'in_relationship'
  | 'complicated'
  | 'engaged'
  | 'married';
