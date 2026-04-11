import { PartnerHero } from '@/features/partner/PartnerHero'
import { AudienceStats } from '@/features/partner/AudienceStats'
import { AdTierGrid } from '@/features/partner/AdTierGrid'
import { PartnerInquiryForm } from '@/features/partner/PartnerInquiryForm'

export function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <AudienceStats />
      <AdTierGrid />
      <PartnerInquiryForm />
    </>
  )
}
