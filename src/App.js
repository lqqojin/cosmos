import { Outlet } from 'react-router-dom';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchHeader from './components/Navbar/SearchHeader';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
export default App;
