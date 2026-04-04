import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { NotFoundPage } from '@/pages/NotFoundPage'

const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })))
const ArchivePage = lazy(() => import('@/pages/ArchivePage').then(m => ({ default: m.ArchivePage })))
const ShopPage = lazy(() => import('@/pages/ShopPage').then(m => ({ default: m.ShopPage })))
const PartnerPage = lazy(() => import('@/pages/PartnerPage').then(m => ({ default: m.PartnerPage })))

function PageLoader() {
  return (
    <div className="min-h-screen bg-field flex items-center justify-center">
      <div className="text-smoke text-sm">Loading...</div>
    </div>
  )
}

function withSuspense(Component) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(HomePage),
    errorElement: <NotFoundPage />,
  },
  {
    path: '/archive',
    element: withSuspense(ArchivePage),
  },
  {
    path: '/shop',
    element: withSuspense(ShopPage),
  },
  {
    path: '/partner',
    element: withSuspense(PartnerPage),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
