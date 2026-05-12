import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

const textSizes = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

export function Logo({ className, size = 'md', showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative">
        <Heart
          className={cn(sizes[size], 'text-primary fill-primary')}
          strokeWidth={0}
        />
        <Heart
          className={cn(
            sizes[size],
            'absolute inset-0 text-primary fill-primary animate-pulse opacity-50 blur-sm',
          )}
          strokeWidth={0}
        />
      </div>
      {showText && (
        <span className={cn(textSizes[size], 'font-bold gradient-text')}>
          Cupidity
        </span>
      )}
    </div>
  );
}
