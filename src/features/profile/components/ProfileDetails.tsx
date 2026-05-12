import { motion } from 'framer-motion';
import { User, Mail, Heart, FileText } from 'lucide-react';
import { GlassCard } from '@/components/common/GlassCard';
import { Separator } from '@/components/ui/separator';
import type { User as UserType } from '@/types';

interface ProfileDetailsProps {
  user: UserType;
}

const statusLabels: Record<string, string> = {
  single: 'Single',
  in_relationship: 'In a Relationship',
  complicated: "It's Complicated",
  engaged: 'Engaged',
  married: 'Married',
};

export function ProfileDetails({ user }: ProfileDetailsProps) {
  const details = [
    { icon: User, label: 'Full Name', value: user.name },
    { icon: Mail, label: 'Email', value: user.email },
    { icon: Heart, label: 'Relationship Status', value: statusLabels[user.relationshipStatus] || 'Single' },
    { icon: FileText, label: 'Bio', value: user.bio || 'Not set' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold mb-4">Account Details</h3>
        <div className="space-y-0">
          {details.map((detail, index) => (
            <div key={detail.label}>
              <div className="flex items-center gap-3 py-3">
                <div className="rounded-lg bg-white/5 p-2">
                  <detail.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{detail.label}</p>
                  <p className="text-sm font-medium truncate">{detail.value}</p>
                </div>
              </div>
              {index < details.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
