import { Router } from './component/Router'
import { PrimeReactProvider } from 'primereact/api';

export const App = () => {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Router />
    </PrimeReactProvider>
  )
}
