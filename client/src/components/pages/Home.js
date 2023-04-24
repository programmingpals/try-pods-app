import React, { useContext } from "react";
import { Link } from "react-router-dom";
import speakericon from "../../assets/icons/speakericon.png";
import HomeCarousel from "./Carousel.js";
import Search from "../search/Search";
import { searchContext } from "../../providers/SearchToggleProvider";
import searchblack from "../../assets/icons/search-black.png";
import folder from "../../assets/icons/folder.png";
import "./Home.scss";

export default function Home() {
  const { height, setHeight } = useContext(searchContext);

  const podArray = [
    "2f93ed9e-8cf4-4b44-ac8f-8538ba2606a4",
    "bda1891d-94a3-4335-8fd9-0ddee5a8b4a4",
    "f6e7c39d-3bdb-4cd6-a33f-468bd893080b",
    "1ea8ccc8-508c-4e9c-9c69-e3f65c820fd8",
    "345212ed-525f-4383-86ca-b66f262fdcf3",
    "3a8d3cdf-b2aa-4c97-abdf-5b6787cbf0fe",
    
  ];

  const random = Math.floor(Math.random() * podArray.length);
  const randomPodId = podArray[random];

  return (
    <div>
      <section>
        <div className="home-main">
          <div className="home-main-left">
            <div className="home-search">
              <h2>Find Your New Fave</h2>
              <a
                href="#/"
                aria-expanded={height !== 0}
                aria-controls="example-panel"
                onClick={() => setHeight(height === 0 ? "auto" : 0)}
              >
                {<img src={searchblack} style={{ width: "50px" }} />}
              </a>
            </div>
            <div className="home-lucky">
              <Link to={`/querypodcast/${randomPodId}`}>
                <button className="lucky-button">I'm feeling lucky!</button>
              </Link>
            </div>
            <div className="home-friends-container">
              <h2>See What Your Friends Are Listening To</h2>
              <Link to="profilepage/3">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/3Kate.png"
                  width="60"
                  className="home-friends"
                ></img>
              </Link>
              <Link to="profilepage/2">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/2Liz.png"
                  width="60"
                  className="home-friends"
                ></img>
              </Link>
              <a href="#/">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/4Mike.png"
                  width="60"
                  className="home-friends"
                ></img>
              </a>

              <a href="#/">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/12Roger.png"
                  width="60"
                  className="home-friends"
                ></img>
              </a>
              <a href="#/">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/11Bill.png"
                  width="60"
                  className="home-friends"
                ></img>
              </a>
              <a href="#/">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/9Meaghan.png"
                  width="60"
                  className="home-friends"
                ></img>
              </a>
              <a href="#/">
                <img
                  src="https://raw.githubusercontent.com/bootonk/try-pods-app/master/client/src/assets/8Pete.png"
                  width="60"
                  className="home-friends"
                ></img>
              </a>
            </div>
          </div>

          <div className="home-main-centre">
            <h2>Now Trending</h2>
            <div className="home-carousel-container">
              <HomeCarousel />
            </div>
          </div>

          <div className="home-main-right">
            <div className="home-up-next-container">
              <h2>
                Up next
                <img src={speakericon} style={{ width: "25px" }} />
              </h2>
              <p>
                <Link to={"podcastlist/12"}>Go listen</Link>
              </p>
              <a href="http://localhost:3000/querypodcast/2cf30b44-6965-4485-bded-77173f835077">
                <img
                  src="https://f.prxu.org/3492/images/01e4145d-1e06-4521-8548-d6c9072e53c3/Show_Cover_Normal_Gossip_red_v5.jpg"
                  width="100"
                  className="home-up-next"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/1f14df6e-a01c-4a11-ae98-cef95d27d42f">
                <img
                  src="https://image.simplecastcdn.com/images/2dcfae8f-b2e0-4826-a483-1306d3b8be06/d8c21569-e9eb-41d5-b1d0-70d9ea0c8ddc/3000x3000/dhj-podcastartwork-2021-v1.jpg?aid=rss_feed"
                  width="100"
                  className="home-up-next"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/dc3ad56c-340a-4f34-adab-53c25da672cd">
                <img
                  src="https://deow9bq0xqvbj.cloudfront.net/image-logo/13701264/TFC_logo_2022_small-03_mvcyi4.png"
                  width="100"
                  className="home-up-next"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/08146843-ae79-452c-b0c3-531c4ed8ef7f">
                <img
                  src="https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/6223229f-44ee-42fe-af91-83a4bdd87f00/3000x3000/screen-shot-2023-04-03-at-9-34-20-am.jpg?aid=rss_feed"
                  width="100"
                  className="home-up-next"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/437b3e05-05e8-4723-aa4d-8933df7c9925">
                <img
                  src="https://storage.buzzsprout.com/variants/2d605m8uneahqo4polewo18qw4f4/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg"
                  width="100"
                  className="home-up-next"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/f89212f2-3123-4b2a-884d-c2da66dc2e45">
                <img
                  src="https://f.prxu.org/187/images/4610f1dc-cafa-4b1b-8dd0-52a384c81214/Articles_of_Interest.png"
                  width="100"
                  className="home-up-next"
                />
              </a>
            </div>
            <div className="home-add-container">
              <h2>Add To Your Lists</h2>
              <div>
                <h4 className="list-option">
                  <img src={folder} style={{ width: "25px" }} />
                  <Link to={`/podcastlist/9`}>Top 8</Link>
                </h4>
                <h4 className="list-option">
                  <img src={folder} style={{ width: "25px" }} />
                  <Link to={`/podcastlist/2`}>Entertainment</Link>
                </h4>
                <h4 className="list-option">
                  <img src={folder} style={{ width: "25px" }} />
                  <Link to={`/podcastlist/5`}>The Best True Crime</Link>
                </h4>
                <h4 className="list-option">
                  <img src={folder} style={{ width: "25px" }} />
                  <Link to={`/podcastlist/8`}>Miscellaneous Pods</Link>
                </h4>
              </div>
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
              <p>
                By Try-Pods Staff<br></br>
                04/27/2023
              </p>
              <p>
                Lots of new pods to discuss this week! First up, TV host Kelly Ripa has a new 
                show called Let's Talk Off Camera. She says, "This is the show that goes on in 
                my head, when the cameras stop rolling. I get to ask the questions that I really
                 want to know and talk to friends and experts about the topics I really want
                 to discuss. It's unfiltered and often unhinged." This new show is from Stitcher.
              </p>
              <p>
                Another new one is Table Read, a one-of-a-kind podcast experience that brings the 
                excitement of a live theater performance to your ears. Each episode features a 
                selection of exceptional, award-winning scripts performed live by a talented cast
                 of 20 working actors in a world-class studio. Featuring some of the most respected 
                 writers in the industry, including Sonny Postiglione, Bobby Smith Jr., and Peter 
                 Lefcout, who have written hit shows like Vampire Diaries, Bloodline, Jason's Lyric, 
                 and Desperate Housewives...
              </p>
              <p>
                <a href="#/">Show more >></a>
              </p>
            </div>
            <div className="home-secondary-centre">
              <h3>Popular in Celebrity Pods</h3>
              <a href="http://localhost:3000/querypodcast/ccd308a6-2c1e-4d97-9cd5-c2dbc2e737df">
                <img
                  src="https://image.simplecastcdn.com/images/9cfa2b6c-da19-4096-a178-91e4b3992a70/48e06851-50c2-4cff-a7da-29c1673df23b/3000x3000/armchair-expert-umbrella-cover.jpg?aid=rss_feed"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/a99d609b-4f05-475c-b86d-864ebe7792ef">
                <img
                  src="https://image.simplecastcdn.com/images/694c0bb5-785a-433e-ba62-0197fd51307e/d06cb4ba-2016-4d4d-b488-6b3118fcdb08/3000x3000/updated-sibling-artwork-aug-20.jpg?aid=rss_feed"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/7b2659e9-849b-4469-b383-03dead87b71c">
                <img
                  src="https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/2531b112-7436-47dc-8ed6-fb6b68296e3c/3000x3000/stitcher-cover-officeladies-3000x3000-final-1.jpg?aid=rss_feed"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <br></br>
              <h3>Popular in Sports Pods</h3>
              <a href="http://localhost:3000/querypodcast/5e04ca0a-abe4-4a5c-b0e7-e374bb8498c1">
                <img
                  src="https://megaphone.imgix.net/podcasts/ca047470-781a-11ea-9a10-cfa05a5eeb3b/image/bill-simmons-podcast-FD-updated__1_.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/d2abc3c3-a84c-4e8d-9009-779d0f916e6c">
                <img
                  src="https://megaphone.imgix.net/podcasts/f9a9d960-7831-11ea-921c-ff8b2140ab24/image/RingerNBA_FanDuel-updated-white__1_.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/7a2a88ea-9662-43ee-9f55-d823eb1408f2">
                <img
                  src="https://podcasts.barstoolsports.com/_images/spittin_chiclets_itunes.1e3337ff729d.jpg"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <br></br>
              <h3>Popular in News Pods</h3>
              <a href="http://localhost:3000/querypodcast/1af11028-eb05-495f-bd63-8ebc371b1018">
                <img
                  src="https://image.simplecastcdn.com/images/c77f2da6-ce42-4942-aa94-b3a327f6e6fe/24fdd7f3-0ba9-4a1d-af15-7f106fc16ad8/3000x3000/wad.jpg?aid=rss_feed"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/cb8d858a-3ef4-4645-8942-67e55c0927f2">
                <img
                  src="https://image.simplecastcdn.com/images/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/2cce5659-f647-4366-b318-46e4b67afcfa/3000x3000/c81936f538106550b804e7e4fe2c236319bab7fba37941a6e8f7e5c3d3048b88fc5b2182fb790f7d446bdc820406456c94287f245db89d8656c105d5511ec3de.jpeg?aid=rss_feed"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <a href="http://localhost:3000/querypodcast/4e883d98-43d1-4ac7-8de8-4afc13244393">
                <img
                  src="https://media.npr.org/assets/img/2022/09/23/up-first_tile_npr-network-01_sq-cd1dc7e35846274fc57247cfcb9cd4dddbb2d635.jpg?s=1400&c=66&f=jpg"
                  width="80"
                  className="home-find-new"
                />
              </a>
              <br></br>
            </div>
            <div className="home-secondary-right">
              <h2>The Current State of the Podcast Industry</h2>
              <p>
                By Try-Pods Staff<br></br>
                04/25/2023
              </p>
              <p>
                The podcast industry is currently experiencing an unprecedented
                surge in popularity. According to the latest statistics, there
                are over 2 million podcasts and more than 48 million episodes
                available to listeners worldwide.
              </p>
              <p>
                {" "}
                The pandemic has played a significant role in the growth of
                podcast consumption, with more people seeking entertainment and
                education while working from home or during their commute.
              </p>
              <p>
                One of the biggest changes in the podcast industry is the influx
                of big media players, such as Spotify and Amazon, who have
                invested heavily in podcasting in recent years. These companies
                are acquiring popular podcasts and podcast networks, as well as
                investing in...
              </p>
              <p>
                <a href="#/">Show more >></a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="footer">Copyright 2023 Bootcamp Buds</div>
      </section>
    </div>
  );
}
