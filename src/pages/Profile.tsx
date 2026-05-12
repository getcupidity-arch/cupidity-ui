import { AnimatedPage } from '@/components/common/AnimatedPage';
import { ProfileCard } from '@/features/profile/components/ProfileCard';
import { ProfileDetails } from '@/features/profile/components/ProfileDetails';
import { SkeletonProfile } from '@/components/common/SkeletonLoader';
import { useAuth } from '@/hooks/useAuth';

export function ProfilePage() {
  const { user, isLoading } = useAuth();

  if (isLoading || !user) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <SkeletonProfile />
      </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="max-w-3xl mx-auto space-y-6">
        <ProfileCard user={user} />
        <ProfileDetails user={user} />
      </div>
    </AnimatedPage>
  );
}
