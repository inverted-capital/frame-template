import AccountView from './AccountView'

interface AppProps {
  skeleton?: boolean
}

function App({ skeleton }: AppProps) {
  return <AccountView skeleton={skeleton} />
}

export default App
