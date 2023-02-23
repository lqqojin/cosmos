import { Outlet } from 'react-router-dom';
// import { VideoDetailProvider } from './context/VideoDetailContext';
// import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './components/context/AuthContext';
import ShoppyNavbar from './components/Navbar/ShoppyNavbar';
// import SearchHeader from './components/Navbar/SearchHeader';

const queryClient = new QueryClient();
function App() {
  return (
    <AuthContextProvider>
      <ShoppyNavbar />
      {/*<SearchHeader />*/}
      {/*<YoutubeApiProvider>*/}
      {/*  <VideoDetailProvider>*/}
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      {/*  </VideoDetailProvider>*/}
      {/*</YoutubeApiProvider>*/}
    </AuthContextProvider>
  );
}
export default App;
