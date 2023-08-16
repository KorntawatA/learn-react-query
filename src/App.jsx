import './App.css'
import ReactQuery from './components/ReactQuery'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
