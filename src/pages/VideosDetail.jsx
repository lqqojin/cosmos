import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideosDetail() {
	const { videoId } = useParams();
	console.log(videoId);
	return (
		<div>VideosDetail {videoId}</div>
	);
}
