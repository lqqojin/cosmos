import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useVideoDetail } from '../context/VideoDetailContext';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/Videos/VideoCard';
// import { Youtube } from '../api/youtube';
// import { FakeYoutube } from '../api/FakeYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const navigate = useNavigate();
  const { clickVideoDetail } = useVideoDetail();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    // const youtube = new FakeYoutube(); // new Youtube();
    return youtube.search(keyword);
  });
  const handleClick = video => {
    clickVideoDetail(video);
    navigate(`/videos/watch/${video.id}`);
  };
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong`🥹</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y--4">
          {videos.map(video => (
            <button
              onClick={() => {
                handleClick(video);
              }}
              key={video.id}
            >
              <VideoCard key={video.id} video={video} />
            </button>
          ))}
        </ul>
      )}
    </>
  );
}
