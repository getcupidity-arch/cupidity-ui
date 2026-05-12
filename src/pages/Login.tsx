import { motion, AnimatePresence } from 'framer-motion';
import { Navigate, useLocation } from 'react-router-dom';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Heart, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/common/GlassCard';
import { Logo } from '@/components/common/Logo';
import { AuthLoadingState } from '@/features/auth/components/AuthLoadingState';
import { useAuth } from '@/hooks/useAuth';

export function LoginPage() {
  const { isAuthenticated, loginWithGoogle, isLoginLoading, loginError } = useAuth();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/home';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
      try {
        await loginWithGoogle(response.credential);
      } catch {
        // Error handled by mutation
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      {/* Mobile logo */}
      <div className="lg:hidden flex justify-center mb-8">
        <Logo size="lg" />
      </div>

      <GlassCard variant="strong" className="p-8 space-y-8">
        <div className="text-center space-y-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="lg:hidden"
          >
            <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-4" strokeWidth={0} />
          </motion.div>
          <h2 className="text-2xl font-bold">Welcome to Cupidity</h2>
          <p className="text-sm text-muted-foreground">
            Sign in to start your romantic journey
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isLoginLoading ? (
            <AuthLoadingState key="loading" />
          ) : (
            <motion.div
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Google Login Button */}
              <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => console.error('Google login failed')}
                  theme="filled_black"
                  size="large"
                  width="100%"
                  shape="pill"
                  text="continue_with"
                />
              </div>

              {/* Error display */}
              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center"
                >
                  <p className="text-sm text-destructive">
                    Authentication failed. Please try again.
                  </p>
                </motion.div>
              )}

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-surface px-3 text-muted-foreground">
                    Secure authentication
                  </span>
                </div>
              </div>

              {/* Security note */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span>Protected by Google OAuth & end-to-end encryption</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center"
      >
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to home
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
