import React from 'react';
import { useParams } from 'react-router-dom';
import { formatAgo } from '../utils/date';
import { useVideoDetail } from '../context/VideoDetailContext';

export default function VideosDetail() {
  const { videoId } = useParams();
  const { videoDetail } = useVideoDetail();
  const { thumbnails, title, channelTitle, publishedAt } = videoDetail.snippet;
  console.log(videoId);
  console.log(videoDetail);
  return (
    <div>
      <img className="w-full" src={thumbnails.standard.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </div>
  );
}
