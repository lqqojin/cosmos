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
    <section key={videoId} className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          title={title}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
