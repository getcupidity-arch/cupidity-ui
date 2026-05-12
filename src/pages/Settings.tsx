import { motion } from 'framer-motion';
import {
  Moon,
  Bell,
  Shield,
  Globe,
  ChevronRight,
  Palette,
  Heart,
} from 'lucide-react';
import { AnimatedPage } from '@/components/common/AnimatedPage';
import { GlassCard } from '@/components/common/GlassCard';
import { Separator } from '@/components/ui/separator';

interface SettingsItemProps {
  icon: React.ElementType;
  label: string;
  description: string;
  badge?: string;
}

function SettingsItem({ icon: Icon, label, description, badge }: SettingsItemProps) {
  return (
    <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group text-left">
      <div className="rounded-xl bg-white/5 p-2.5 group-hover:bg-white/10 transition-colors">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">{label}</p>
          {badge && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
    </button>
  );
}

const settingSections = [
  {
    title: 'Appearance',
    items: [
      { icon: Moon, label: 'Theme', description: 'Dark mode is enabled', badge: 'Active' },
      { icon: Palette, label: 'Color Accent', description: 'Customize your accent color', badge: 'Soon' },
    ],
  },
  {
    title: 'Notifications',
    items: [
      { icon: Bell, label: 'Push Notifications', description: 'Manage notification preferences', badge: 'Soon' },
    ],
  },
  {
    title: 'Privacy & Security',
    items: [
      { icon: Shield, label: 'Privacy Settings', description: 'Control your visibility and data', badge: 'Soon' },
      { icon: Globe, label: 'Connected Accounts', description: 'Manage linked accounts', badge: 'Google' },
    ],
  },
  {
    title: 'Relationship',
    items: [
      { icon: Heart, label: 'Partner Settings', description: 'Manage your relationship preferences', badge: 'Soon' },
    ],
  },
];

export function SettingsPage() {
  return (
    <AnimatedPage>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your preferences and account settings
          </p>
        </div>

        {settingSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
          >
            <GlassCard className="p-4">
              <h3 className="text-sm font-semibold text-muted-foreground px-3 mb-2">
                {section.title}
              </h3>
              <div className="space-y-0.5">
                {section.items.map((item, index) => (
                  <div key={item.label}>
                    <SettingsItem {...item} />
                    {index < section.items.length - 1 && (
                      <Separator className="mx-3" />
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </AnimatedPage>
  );
}
