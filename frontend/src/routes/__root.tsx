import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../components/Header'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <div className='h-screen'>
      <Header />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
