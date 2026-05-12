import { motion } from 'framer-motion';
import { MessageCircle, Heart, Gift, Star, Bookmark } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { EmptyState } from '@/components/common/EmptyState';

const placeholderActivities = [
  {
    id: 1,
    icon: Heart,
    title: 'Start your journey',
    description: 'Connect with your partner to begin tracking your relationship milestones',
    time: 'Getting started',
    color: 'text-primary',
  },
  {
    id: 2,
    icon: Gift,
    title: 'Send a surprise',
    description: 'Plan thoughtful surprises and gifts for your special someone',
    time: 'Coming soon',
    color: 'text-secondary',
  },
  {
    id: 3,
    icon: Star,
    title: 'Mark milestones',
    description: 'Celebrate important moments in your relationship',
    time: 'Coming soon',
    color: 'text-accent',
  },
];

export function ActivityFeed() {
  const hasActivities = false;

  if (!hasActivities) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold">Activity Feed</h2>
        
        <div className="space-y-3">
          {placeholderActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <GlassCard className="p-4 hover:border-white/10 transition-all duration-300 group cursor-default">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-white/5 p-2 group-hover:bg-white/10 transition-colors mt-0.5">
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-medium">{activity.title}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <EmptyState
          icon={Bookmark}
          title="No recent activities"
          description="Your relationship timeline will appear here as you start using Cupidity together."
          className="py-8"
        />
      </motion.div>
    );
  }

  return null;
}
