import { createBrowserRouter, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'

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
    element: (
      <ErrorBoundary>
        <div className="min-h-screen flex flex-col bg-field">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    ),
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'archive', element: withSuspense(ArchivePage) },
      { path: 'shop', element: withSuspense(ShopPage) },
      { path: 'partner', element: withSuspense(PartnerPage) },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
