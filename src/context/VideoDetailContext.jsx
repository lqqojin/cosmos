import React, { createContext, useContext, useState } from 'react';

const VideoDetailContext = createContext();

export const VideoDetailProvider = ({ children }) => {
  const [videoDetail, setVideoDetail] = useState({});
  const clickVideoDetail = data => setVideoDetail(data);
  return (
    <VideoDetailContext.Provider value={{ videoDetail, clickVideoDetail }}>
      {children}
    </VideoDetailContext.Provider>
  );
};

export const useVideoDetail = () => useContext(VideoDetailContext);
