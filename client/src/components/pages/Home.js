import React from "react";
import { Link } from "react-router-dom";
import speakericon from "../../assets/icons/speakericon.png"
import HomeCarousel from "./Carousel.js";
import Search from "../search/Search";


export default function Home() {
  return (
    <div>

    <section>
    <div className="home-main">
      <div className="home-main-left">
      <h2>Find Your New Fave</h2>
      <Search />
      <button className="lucky-button">I'm feeling lucky!</button>
      </div>
      <div className="home-main-centre">
      <h2>Now Trending</h2>
      <HomeCarousel />
      </div>
      <div className="home-main-right">
        <h2>Up next<img src={speakericon} style={{width: '25px'}} /></h2>
       <p><Link to={"podcastlist/12"}>Go listen -></Link></p>
        <a href="http://localhost:3000/querypodcast/2cf30b44-6965-4485-bded-77173f835077"><img src="https://f.prxu.org/3492/images/01e4145d-1e06-4521-8548-d6c9072e53c3/Show_Cover_Normal_Gossip_red_v5.jpg" width="100" className="home-up-next" /></a>
        <a href="http://localhost:3000/querypodcast/1f14df6e-a01c-4a11-ae98-cef95d27d42f"><img src="https://image.simplecastcdn.com/images/2dcfae8f-b2e0-4826-a483-1306d3b8be06/d8c21569-e9eb-41d5-b1d0-70d9ea0c8ddc/3000x3000/dhj-podcastartwork-2021-v1.jpg?aid=rss_feed" width="100" className="home-up-next" /></a>
        <a href="http://localhost:3000/querypodcast/dc3ad56c-340a-4f34-adab-53c25da672cd"><img src="https://deow9bq0xqvbj.cloudfront.net/image-logo/13701264/TFC_logo_2022_small-03_mvcyi4.png" width="100" className="home-up-next" /></a><br></br>
        <a href="http://localhost:3000/querypodcast/08146843-ae79-452c-b0c3-531c4ed8ef7f"><img src="https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/6223229f-44ee-42fe-af91-83a4bdd87f00/3000x3000/screen-shot-2023-04-03-at-9-34-20-am.jpg?aid=rss_feed" width="100" className="home-up-next" /></a>
        <a href="http://localhost:3000/querypodcast/437b3e05-05e8-4723-aa4d-8933df7c9925"><img src="https://storage.buzzsprout.com/variants/2d605m8uneahqo4polewo18qw4f4/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg" width="100" className="home-up-next" /></a>
        <a href="http://localhost:3000/querypodcast/f89212f2-3123-4b2a-884d-c2da66dc2e45"><img src="https://f.prxu.org/187/images/4610f1dc-cafa-4b1b-8dd0-52a384c81214/Articles_of_Interest.png" width="100" className="home-up-next" /></a>
        <h2>Add To Your Lists</h2>
        <div>
      <h4><Link to={`/podcastlist/9`}>Top 8</Link></h4>
      <h4><Link to={`/podcastlist/2`}>Entertainment</Link></h4>
      <h4><Link to={`/podcastlist/5`}>The Best True Crime</Link></h4>
      <h4><Link to={`/podcastlist/8`}>Miscellaneous Pods</Link></h4>
      
    </div>
      </div>
    </div>
    </section>

    <br></br>
    
    <section>
    <div className="home-main">
    <div className="home-main">
      <div className="home-secondary-left"> 
      <h2>This Week's New Pods</h2>
        <p>By Try-Pods Staff<br></br>
        04/27/2023</p>
        <p>Lots of new pods to discuss this week! First up, "The Daily Shine" by Shine, a self-care app. This podcast offers daily, bite-sized episodes that focus on mental health, mindfulness, and overall wellbeing. Each episode is designed to help listeners start their day on the right foot and feel more grounded and centered throughout the day.</p>
        <p>For those interested in the world of business and entrepreneurship, "Masters of Scale with Reid Hoffman" is a must-listen. This podcast features interviews with some of the most successful entrepreneurs in the world, including Mark Zuckerberg, Arianna Huffington, and Reed Hastings, and explores the strategies they used to scale their businesses from startups <a href="#">Show more >></a></p>
      </div>
      <div className="home-secondary-centre">
        <h2>The Current State of the Podcast Industry</h2>
        <p>By Try-Pods Staff<br></br>
        04/25/2023</p>
        <p>The podcast industry is currently experiencing an unprecedented surge in popularity. According to the latest statistics, there are over 2 million podcasts and more than 48 million episodes available to listeners worldwide.</p><p> The pandemic has played a significant role in the growth of podcast consumption, with more people seeking entertainment and education while working from home or during their commute.</p>
        <p>One of the biggest changes in the podcast industry is the influx of big media players, such as Spotify and Amazon, who have invested heavily in podcasting in recent years. These companies are acquiring popular podcasts and podcast networks, as well as investing in <a href="#">Show more >></a></p>
      </div>
      <div className="home-secondary-right">
      <h3>Popular in Celebrity Pods</h3>
        <a href="http://localhost:3000/querypodcast/ccd308a6-2c1e-4d97-9cd5-c2dbc2e737df"><img src="https://image.simplecastcdn.com/images/9cfa2b6c-da19-4096-a178-91e4b3992a70/48e06851-50c2-4cff-a7da-29c1673df23b/3000x3000/armchair-expert-umbrella-cover.jpg?aid=rss_feed" width="80" className="home-find-new" /></a>
        <a href="http://localhost:3000/querypodcast/a99d609b-4f05-475c-b86d-864ebe7792ef"><img src="https://image.simplecastcdn.com/images/694c0bb5-785a-433e-ba62-0197fd51307e/d06cb4ba-2016-4d4d-b488-6b3118fcdb08/3000x3000/updated-sibling-artwork-aug-20.jpg?aid=rss_feed" width="80" className="home-find-new" /></a>
        <a href="http://localhost:3000/querypodcast/7b2659e9-849b-4469-b383-03dead87b71c"><img src="https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/2531b112-7436-47dc-8ed6-fb6b68296e3c/3000x3000/stitcher-cover-officeladies-3000x3000-final-1.jpg?aid=rss_feed" width="80" className="home-find-new" /></a><br></br>
        <h3>Popular in Sports Pods</h3>
        <a href="http://localhost:3000/querypodcast/5e04ca0a-abe4-4a5c-b0e7-e374bb8498c1"><img src="https://megaphone.imgix.net/podcasts/ca047470-781a-11ea-9a10-cfa05a5eeb3b/image/bill-simmons-podcast-FD-updated__1_.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" width="80" className="home-find-new" /></a>
        <a href="http://localhost:3000/querypodcast/d2abc3c3-a84c-4e8d-9009-779d0f916e6c"><img src="https://megaphone.imgix.net/podcasts/f9a9d960-7831-11ea-921c-ff8b2140ab24/image/RingerNBA_FanDuel-updated-white__1_.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" width="80" className="home-find-new" /></a>
        <a href="http://localhost:3000/querypodcast/7a2a88ea-9662-43ee-9f55-d823eb1408f2"><img src="https://podcasts.barstoolsports.com/_images/spittin_chiclets_itunes.1e3337ff729d.jpg" width="80" className="home-find-new" /></a><br></br>
      </div>
      </div>
      </div>
    </section>
    </div>
    
  );
}

