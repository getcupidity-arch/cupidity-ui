import { motion } from 'framer-motion';
import { MapPin, Calendar, Heart, Edit3 } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/common/GlassCard';
import type { User } from '@/types';

interface ProfileCardProps {
  user: User;
}

const statusLabels: Record<string, string> = {
  single: 'Single',
  in_relationship: 'In a Relationship',
  complicated: "It's Complicated",
  engaged: 'Engaged',
  married: 'Married',
};

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard variant="glow" className="overflow-hidden">
        {/* Cover gradient */}
        <div className="h-32 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        </div>

        {/* Profile info */}
        <div className="px-6 pb-6 -mt-12 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4">
            <Avatar className="h-24 w-24 ring-4 ring-surface">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback className="text-2xl">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            <Button variant="outline" size="sm" className="gap-2">
              <Edit3 className="h-3.5 w-3.5" />
              Edit Profile
            </Button>
          </div>

          {/* Bio */}
          <div className="mt-6 space-y-4">
            {user.bio ? (
              <p className="text-sm text-muted-foreground">{user.bio}</p>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                No bio yet. Tell the world about yourself!
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-primary" />
                <span>{statusLabels[user.relationshipStatus] || 'Single'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>Joined {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
