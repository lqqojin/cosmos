import { createContext, useContext } from 'react';
import { FakeYoutube } from '../api/FakeYoutube';
import { Youtube } from '../api/youtube';

export const YoutubeApiContext = createContext();

const youtube =
  process.env.REACT_APP_YOUTUBE_DATA === 'MOCK'
    ? new FakeYoutube()
    : new Youtube();

export const YoutubeApiProvider = ({ children }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => useContext(YoutubeApiContext);
