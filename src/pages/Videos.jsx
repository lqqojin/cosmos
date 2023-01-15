import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/Videos/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then(res => res.data.items);
  });
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : `🔥`}</div>;
      {isLoading && <p>Loading...</p>}
      {error && (
        <p>
          Something is wrong `videos/{keyword ? 'search' : 'popular'}.json`🥹
        </p>
      )}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
