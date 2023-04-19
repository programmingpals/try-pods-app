import React, { useState } from 'react';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import PodResultItem from './PodResultItem';
import { Link } from 'react-router-dom';


function Search() {

  const [searchQuery, setsearchQuery] = useState('');
  const [podcast, setPodcast] = useState([]);

  function handleQueryChange(event) {
    setsearchQuery(event.target.value);
  }

  const client = new ApolloClient({
    uri: "https://api.taddy.org",
    cache: new InMemoryCache(),
    headers: {
      "Content-Type": "application/JSON",
      "X-API-KEY": "f96cd004b23eb23c834f2e6e7e6331aa0aca4024d6e16a74e8358e1c6171424c949a568942c8fbe62b9beb7cdd07cd8e81",
      "X-USER-ID": "346",
    },
  });

  function taddyCall() {
    console.log("searchQuery:", searchQuery)
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
        console.log('podcastName:', podcast);
      })
      .catch((err) => console.log(err));
  }

  const podcastResults = podcast.map((p) => {
    console.log("p results:", p)
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


  console.log("podcastResults:", podcastResults)

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleQueryChange} />
      <button onClick={() => {taddyCall()}}>Search</button>
      {/* {podcast && (
        <div>
          <h2>{podcast}</h2>
        </div>
      )} */}
      {podcastResults}
    </div>
  );
}

export default Search;