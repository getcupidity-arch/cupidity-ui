import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Decorative side */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0">
          {/* Floating hearts decoration */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              <Heart
                className="text-primary/20 fill-primary/10"
                size={24 + i * 8}
                strokeWidth={1}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <Heart className="h-20 w-20 text-primary fill-primary mx-auto mb-6" strokeWidth={0} />
            <h1 className="text-4xl font-bold gradient-text mb-4">Cupidity</h1>
            <p className="text-lg text-muted-foreground max-w-sm">
              Where meaningful connections bloom into beautiful relationships
            </p>
          </motion.div>
        </div>
      </div>

      {/* Auth content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
}
