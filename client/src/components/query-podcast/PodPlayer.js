// import React from "react";
// import { useState } from "react";

// export default function PodPlayer(props) {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoad = () => {
//     setIsLoading(false);
//   };

//   const itunesId = `https://embed.podcasts.apple.com/us/podcast/id${props.itunesId}`;
//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//     <iframe
//       title="My Podcast Episode"
//       width="100%"
//       height={`${props.height}`}
//       frameBorder="0"
//       allowtransparency="true"
//       onLoad={(handleLoad())}
//       src={itunesId}
//     ></iframe>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function PodPlayer(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const itunesId = `https://embed.podcasts.apple.com/us/podcast/id${props.itunesId}`;

  return (
    <>
      {!isLoaded && <p>Loading...</p>}
      <iframe
        title="My Podcast Episode"
        width="100%"
        height={`${props.height}`}
        frameBorder="0"
        allowtransparency="true"
        src={itunesId}
        onLoad={handleLoad}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
}