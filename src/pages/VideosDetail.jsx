import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RelatedVideos from '../components/Videos/RelatedVideos';
import ChannelInfo from '../components/Videos/ChannelInfo';
// import { formatAgo } from '../utils/date';

export default function VideosDetail() {
  const { videoId } = useParams();
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  // console.log(videoDetail);
  return (
    <section key={videoId}>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          title="play"
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <section>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
