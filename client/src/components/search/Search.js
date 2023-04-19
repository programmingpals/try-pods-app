import React, { useState } from 'react';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import PodResultItem from './PodResultItem';
import { client } from '../../taddyClient';

export default function Search() {

  const [searchQuery, setsearchQuery] = useState('');
  const [podcast, setPodcast] = useState([]);

  function handleQueryChange(event) {
    setsearchQuery(event.target.value);
  }


  function taddyCall() {
    client
      .query({
        query: gql`
        {
          searchForTerm(term:"${searchQuery}", filterForTypes:PODCASTSERIES){
                searchId
                podcastSeries{
                    uuid
                    name
                    itunesId
                    description (shouldStripHtmlTags: true)
                    websiteUrl
                    language
                    authorName
                    isCompleted
                    totalEpisodesCount
                    rssUrl
                    imageUrl
                }
            }
        }
        `,
      })
      .then((result) => {
        const podcast = result.data.searchForTerm.podcastSeries;
        setPodcast(podcast);
      })
      .catch((err) => console.log(err));
  }

  const podcastResults = podcast.map((p) => {
    return (
     <PodResultItem
      key={p.uuid}
      attributes={p}
      uuid={p.uuid}
      name={p.name}
      description={p.description}
      image={p.imageUrl}
    />
    )
  })

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleQueryChange} />
      <button onClick={() => {taddyCall()}}>Search</button>
      {podcastResults}
    </div>
  );
}