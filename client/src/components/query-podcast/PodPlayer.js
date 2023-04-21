import React from "react";

export default function PodPlayer(props) {

  const itunesId = `https://embed.podcasts.apple.com/us/podcast/id${props.itunesId}`
  return (
    <iframe
      title="My Podcast Episode"
      width="100%"
      height="400"
      frameborder="0"
      allowtransparency="true"
      src={itunesId}>
    </iframe>
  );
}