import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VideoCard from '../../components/Videos/VideoCard';
import { useYoutubeApi } from '../../context/YoutubeApiContext';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong`🥹</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
