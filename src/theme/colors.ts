export const colors = {
  primary: '#FF4D6D',
  secondary: '#FF8FA3',
  accent: '#CDB4DB',
  background: '#0F0F11',
  surface: '#18181B',
  surfaceHover: '#1F1F23',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  border: 'rgba(255, 255, 255, 0.08)',
  destructive: '#EF4444',
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #FF4D6D, #FF8FA3)',
  accent: 'linear-gradient(135deg, #FF4D6D, #FF8FA3, #CDB4DB)',
  dark: 'linear-gradient(180deg, #0F0F11 0%, #18181B 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 77, 109, 0.1), rgba(205, 180, 219, 0.05))',
} as const;
