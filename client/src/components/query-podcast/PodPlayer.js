import React from "react";
import Iframe from "react-iframe";
// import { PodcastPlayer } from 'react-podcast-player';
// import 'react-podcast-player/dist/index.css';

export default function PodPlayer(props) {

  return (
<Iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/this-american-life/id201671138"></Iframe>
  );
};

{/* <PodPlayer
podcast={{
  name: props.name,
  imageUrl: props.imageUrl,
  feedUrl: props.feedUrl,
}}
height={300}
width={400}
/> */}