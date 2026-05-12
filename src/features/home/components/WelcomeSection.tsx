import { motion } from 'framer-motion';
import { Sparkles, Heart, TrendingUp, Calendar } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import type { User } from '@/types';

interface WelcomeSectionProps {
  user: User;
}

const stats = [
  { label: 'Connection Score', value: '—', icon: Heart, color: 'text-primary' },
  { label: 'Activities', value: '0', icon: TrendingUp, color: 'text-secondary' },
  { label: 'Days Together', value: '—', icon: Calendar, color: 'text-accent' },
];

export function WelcomeSection({ user }: WelcomeSectionProps) {
  const firstName = user.name.split(' ')[0];
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">{greeting}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome back,{' '}
          <span className="gradient-text">{firstName}</span>
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening in your love journey
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <GlassCard className="p-4 hover:border-white/10 transition-all duration-300 group cursor-default">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/5 p-2.5 group-hover:bg-white/10 transition-colors">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
