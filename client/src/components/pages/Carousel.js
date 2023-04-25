import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class HomeCarousel extends Component {


    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://www.omnycontent.com/d/programs/796469f9-ea34-46a2-8776-ad0f015d6beb/6bf95617-5ffc-4269-a957-afcc015a4d66/image.jpg?t=1679432582&size=Large" />
                </div>
                <div>
                    <img src="https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/d24f5c7c-6413-4cd5-b874-abf101388631/4d22931d-dfa6-4665-93e9-abf10138f0ef/image.jpg?t=1678714559&size=Large" />
                </div>
                <div>
                    <img src="https://content.production.cdn.art19.com/images/f2/c3/d0/57/f2c3d057-7482-4a12-8275-64ab40fdec57/8219ba09564eb8780565c7a21f79f61ef73fe090e0a060136485a3b7cec6319fed0caa8e26af1dcb4487b1d4bc9254a4b43e2f1d446d939e275d11d7868dbd14.jpeg" />
                </div>
                <div>
                  <img src="https://image.simplecastcdn.com/images/00c81e60-45f9-4643-9fed-2184b2b6a3d3/86067ccd-bf9b-4390-bc6b-e248e3d6d439/3000x3000/stitcher-cover-lets-talk-off-camera-with-kelly-ripa-3000x3000-final-1.jpg?aid=rss_feed" />
                </div>
                <div>
                    <img src="https://megaphone.imgix.net/podcasts/fe1c0fc4-c2da-11ea-906d-ab34c27cab89/image/uploads_2F1600801759418-57ar9iiv53n-ec46bbc4a426831ee734fcf0ff3f5648_2FTMOP_Resize_1400x1400.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress" />
                </div>
                <div>
                    <img src="https://storage.buzzsprout.com/variants/4k2yt7zufginqdye9p6ws96sx8gj/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg" />
                </div>
            </Carousel>
        );
    }
};

