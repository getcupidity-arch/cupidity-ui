import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'strong' | 'glow';
}

export function GlassCard({ children, className, variant = 'default', ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variant === 'default' && 'glass',
        variant === 'strong' && 'glass-strong',
        variant === 'glow' && 'glass border-primary/20 shadow-glow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
