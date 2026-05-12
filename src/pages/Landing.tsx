import { motion } from 'framer-motion';
import { Link, Navigate } from 'react-router-dom';
import {
  Heart,
  ArrowRight,
  Shield,
  Sparkles,
  Users,
  Star,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/common/GlassCard';
import { Logo } from '@/components/common/Logo';
import { useAuth } from '@/hooks/useAuth';

const features = [
  {
    icon: Heart,
    title: 'Deep Connections',
    description: 'Build meaningful bonds with genuine, curated matches designed for lasting love.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your privacy matters. Enterprise-grade security protects every conversation.',
  },
  {
    icon: Sparkles,
    title: 'Smart Matching',
    description: 'AI-powered compatibility insights help you find your perfect match.',
  },
  {
    icon: Users,
    title: 'Couple Activities',
    description: 'Shared experiences and milestone tracking to strengthen your relationship.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function LandingPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" />
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button variant="gradient" asChild>
                <Link to="/login">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary">
                <Zap className="h-3.5 w-3.5" />
                Now in early access
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Love deserves a{' '}
              <span className="gradient-text">premium</span>{' '}
              experience
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
            >
              Cupidity redefines romantic connections with elegance, intelligence, and care.
              Find your person. Build your story. Celebrate every moment.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="gradient" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/login">
                  <Heart className="h-5 w-5 mr-2 fill-current" />
                  Start Your Journey
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Star className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 border-2 border-background"
                  />
                ))}
              </div>
              <span>
                Trusted by <strong className="text-foreground">10,000+</strong> couples
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything you need for{' '}
              <span className="gradient-text">meaningful love</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Built with intention. Designed with care. Made for real relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full hover:border-primary/20 hover:shadow-glow transition-all duration-500 group">
                  <div className="rounded-xl bg-white/5 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard variant="glow" className="p-8 sm:p-12 text-center">
              <Heart className="h-12 w-12 text-primary fill-primary mx-auto mb-6" strokeWidth={0} />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to find your <span className="gradient-text">match</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Join thousands of couples who found their forever person on Cupidity.
              </p>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/login">
                  Get Started — It&apos;s Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cupidity. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
