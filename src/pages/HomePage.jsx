import { HeroSection } from '@/features/hero/HeroSection'
import { ValueSection } from '@/features/value/ValueSection'
import { RecentIssuesSection } from '@/features/newsletter/RecentIssuesSection'
import { SubscribeSection } from '@/features/subscribe/SubscribeSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <RecentIssuesSection />
      <SubscribeSection />
    </>
  )
}
