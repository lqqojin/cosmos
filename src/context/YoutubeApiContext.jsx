import { createContext, useContext } from 'react';
import { Youtube } from '../api/youtube';
// import { FakeYoutubeClient } from '../api/FakeYoutubeClient';
import { YoutubeClient } from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

const youtube =
  // process.env.REACT_APP_YOUTUBE_DATA === 'MOCK'
  //   ?
  // new Youtube(new FakeYoutubeClient());
  // :
  new Youtube(new YoutubeClient());

export const YoutubeApiProvider = ({ children }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => useContext(YoutubeApiContext);
