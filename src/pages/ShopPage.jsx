import { ShopHero } from '@/features/shop/ShopHero'
import { ProductGrid } from '@/features/shop/ProductGrid'
import { SubscribeSection } from '@/features/subscribe/SubscribeSection'

export function ShopPage() {
  return (
    <>
      <ShopHero />
      <div className="py-12 px-4">
        <ProductGrid />
      </div>
      <SubscribeSection />
    </>
  )
}
