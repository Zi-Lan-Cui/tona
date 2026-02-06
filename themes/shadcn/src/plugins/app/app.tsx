import { Toaster } from '../../components/ui/sonner'
import { Page } from './components/page'
import { AvatarContext } from './context/avatar-context'
import 'tona-sonner/dist/index.css'
import { useAvatar } from './hooks/use-avatar'

function PageWrapper() {
  const avatar = useAvatar()

  return (
    <AvatarContext.Provider value={avatar}>
      <Page />
    </AvatarContext.Provider>
  )
}

export function App() {
  return (
    <>
      <PageWrapper />
      <Toaster />
    </>
  )
}
