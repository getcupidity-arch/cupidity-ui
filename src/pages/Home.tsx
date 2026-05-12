import { AnimatedPage } from '@/components/common/AnimatedPage';
import { WelcomeSection } from '@/features/home/components/WelcomeSection';
import { ActivityFeed } from '@/features/home/components/ActivityFeed';
import { useAuth } from '@/hooks/useAuth';
import { LoadingScreen } from '@/components/common/LoadingScreen';

export function HomePage() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) {
    return <LoadingScreen />;
  }

  return (
    <AnimatedPage>
      <div className="space-y-8">
        <WelcomeSection user={user} />
        <ActivityFeed />
      </div>
    </AnimatedPage>
  );
}
