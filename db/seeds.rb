# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
List.destroy_all
Podcast.destroy_all
Friendship.destroy_all

user1 = User.create(first_name: "Rowan", last_name: "Mackenzie", email: "row.row@gmail.com", password: "123123", avatar: "bingbong")

user2 = User.create(first_name: "Liz", last_name: "Fosdick", email: "lf@gmail.com", password: "123123", avatar: "bingbong")

user3 = User.create(first_name: "Kate", last_name: "Booton", email: "kb@gmail.com", password: "123123", avatar: "bingbong")

rowlist1 = List.create(user_id: 1, name: "All Time Faves", description: "My top podcasts", series: true)

rowlist2 = List.create(user_id: 1, name: "Entertainment", description: "Movies, music, tv and more", series: true)

rowlist3 = List.create(user_id: 1, name: "Comedy Pods", description: "Hahaha", series: true)

rowlist4 = List.create(user_id: 1, name: "News & Politics", description: "Keeping up with the times", series: true)

rowlist5 = List.create(user_id: 1, name: "The Best True Crime", description: "All my favourite murder shows", series: true)

lizlist6 = List.create(user_id: 2, name: "Top Pods", description: "My absolute favourites", series: true)

katelist7 = List.create(user_id: 3, name: "My Favourites", description: "All-time fave podcasts", series: true)

rowlist8 = List.create(user_id: 1, name: "Miscellaneous Pods", description: "Just a bunch of randoms", series: true)

podcast1 = Podcast.create(list_id: 4,
pod_uuid: "0dd477b0-976e-4f37-98ac-28367a6f4b88",
title: "Pod Save America",
itunes_id: 1192761536,
description: "Four former aides to President Obama—Jon Favreau, Jon Lovett, Dan Pfeiffer and Tommy Vietor—are joined by journalists, politicians, activists, and more for a no-b******t conversation about politics. They cut through the noise to break down the week’s news, and help people figure out what matters and how they can help. You can listen to new episodes twice a week on Tuesdays and Thursdays.",
link: "https://crooked.com/",
language: "ENGLISH",
authorName: "Crooked Media",
isCompleted: false,
totalEpisodeCount: 681,
rssUrl: "https://feeds.simplecast.com/dxZsm5kX",
image: "https://image.simplecastcdn.com/images/9aa1e238-cbed-4305-9808-c9228fc6dd4f/eb7dddd4-ecb0-444c-b379-f75d7dc6c22b/3000x3000/uploads-2f1595947484360-nc4atf9w7ur-dbbaa7ee07a1ee325ec48d2e666ac261-2fpodsave100daysfinal1800.jpg?aid=rss_feed",
release_date: 1483719600
)

podcast2 = Podcast.create(list_id: 4,
pod_uuid: "cb8d858a-3ef4-4645-8942-67e55c0927f2",
title: "The Daily",
itunes_id: 1200361736,
description: "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro and Sabrina Tavernise. Twenty minutes a day, five days a week, ready by 6 a.m.",
link: "https://www.nytimes.com/the-daily",
language: "ENGLISH",
authorName: "The New York Times",
isCompleted: false,
totalEpisodeCount: 1810,
rssUrl: "https://feeds.simplecast.com/54nAGcIl",
image: "https://image.simplecastcdn.com/images/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/2cce5659-f647-4366-b318-46e4b67afcfa/3000x3000/c81936f538106550b804e7e4fe2c236319bab7fba37941a6e8f7e5c3d3048b88fc5b2182fb790f7d446bdc820406456c94287f245db89d8656c105d5511ec3de.jpeg?aid=rss_feed",
release_date: 1484687987
)

podcast3 = Podcast.create(list_id: 1,
pod_uuid: "d682a935-ad2d-46ee-a0ac-139198b83bcc",
title: "This American Life",
itunes_id: 201671138,
description: "This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 2.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards.",
link: "https://www.thisamericanlife.org",
language: "ENGLISH",
authorName: "This American Life",
isCompleted: false,
totalEpisodeCount: 10,
rssUrl: "https://www.thisamericanlife.org/podcast/rss.xml",
image: "https://files.thisamericanlife.org/sites/all/themes/thislife/img/tal-name-1400x1400.png",
release_date: 1630879200
)

podcast4 = Podcast.create(list_id: 8,
"pod_uuid": "77463435-ab26-4af3-96d7-b9173f5d6ff3",
"title": "TED Talks Daily",
"itunes_id": 160904630,
"description": "Every weekday, TED Talks Daily brings you the latest talks in audio. Join host and journalist Elise Hu for thought-provoking ideas on every subject imaginable — from Artificial Intelligence to Zoology, and everything in between — given by the world's leading thinkers and creators. With TED Talks Daily, find some space in your day to change your perspectives, ignite your curiosity, and learn something new.",
"link": "https://www.ted.com/talks",
"language": "ENGLISH",
"authorName": "TED",
"isCompleted": false,
"totalEpisodeCount": 184,
"rssUrl": "https://www.google.com/sorry/index?continue=https://feeds.feedburner.com/TEDTalks_audio&q=EgQi2Uj1GJ-KjJ8GIjBy1q7u3XbFFwRKfNhtpuTXKhcBSekrRex1KI_rUo-y7qxPUvd4guqtTTwfvoOOYXUyAmNy",
"image": "https://pl.tedcdn.com/rss_feed_images/ted_talks_main_podcast/audio.png",
"release_date": 1616413891
)

podcast5 = Podcast.create(list_id: 8,
"pod_uuid": "bcb3f0ee-90ab-4313-8549-cc8ec9a0ca3e",
"title": "Serial",
"itunes_id": 917918570,
"description": "Serial Productions makes narrative podcasts whose quality and innovation transformed the medium. “Serial” began in 2014 as a spinoff of the public radio show “This American Life.” In 2020, we joined the New York Times Company. Our shows have reached many millions of listeners and have won nearly every major journalism award for audio, including the first-ever Peabody Award given to a podcast.\n\nSubscribe to our newsletter for the latest Serial Productions news: https://bit.ly/3FIOJj9\n\nHave thoughts or feedback on our shows? Email us at serialshows@nytimes.com",
"link": "https://serialpodcast.org",
"language": "ENGLISH",
"authorName": "Serial Productions & The New York Times",
"isCompleted": false,
"totalEpisodeCount": 76,
"rssUrl": "https://feeds.simplecast.com/xl36XBC2",
"image": "https://image.simplecastcdn.com/images/420025f0-46ea-493d-bf27-5999548228e9/a4c10b58-706f-4037-bc5b-4ec0f60d759b/3000x3000/nyt-serialprod-album-1400.jpg?aid=rss_feed",
"release_date": 1412343900
)

podcast6 = Podcast.create(list_id: 5,
"pod_uuid": "bcb3f0ee-90ab-4313-8549-cc8ec9a0ca3e",
"title": "Serial",
"itunes_id": 917918570,
"description": "Serial Productions makes narrative podcasts whose quality and innovation transformed the medium. “Serial” began in 2014 as a spinoff of the public radio show “This American Life.” In 2020, we joined the New York Times Company. Our shows have reached many millions of listeners and have won nearly every major journalism award for audio, including the first-ever Peabody Award given to a podcast.\n\nSubscribe to our newsletter for the latest Serial Productions news: https://bit.ly/3FIOJj9\n\nHave thoughts or feedback on our shows? Email us at serialshows@nytimes.com",
"link": "https://serialpodcast.org",
"language": "ENGLISH",
"authorName": "Serial Productions & The New York Times",
"isCompleted": false,
"totalEpisodeCount": 76,
"rssUrl": "https://feeds.simplecast.com/xl36XBC2",
"image": "https://image.simplecastcdn.com/images/420025f0-46ea-493d-bf27-5999548228e9/a4c10b58-706f-4037-bc5b-4ec0f60d759b/3000x3000/nyt-serialprod-album-1400.jpg?aid=rss_feed",
"release_date": 1412343900
)

podcast7 = Podcast.create(list_id: 5,
"pod_uuid": "597cf4cc-4088-4435-a95a-466db04f8a76",
"title": "Bear Brook",
"itunes_id": 1423306695,
"description": "Jason Carroll is serving life in prison for a murder he says he didn’t commit. The only evidence against him? His own taped confession. More than 30 years later, is it possible to get to the truth – and who gets to tell it?\n\nMore at bearbrookpodcast.com",
"link": "https://www.bearbrookpodcast.com/",
"language": "ENGLISH",
"authorName": "NHPR",
"isCompleted": false,
"totalEpisodeCount": 20,
"rssUrl": "https://feeds.simplecast.com/RGpV1rjX",
"image": "https://image.simplecastcdn.com/images/b2f51d28-b3c7-4fd9-9447-abfd02b11418/edaa29d5-078d-414c-abdc-7f37ca397197/3000x3000/bb2-logofinal.jpg?aid=rss_feed",
"release_date": 1533675120
)

podcast8 = Podcast.create(list_id: 5,
"pod_uuid": "5f7044eb-cb1d-4ec7-a1ca-c246f4a8737c",
"title": "My Favorite Murder with Karen Kilgariff and Georgia Hardstark",
"itunes_id": 1074507850,
"description": "Lifelong fans of true crime stories Karen Kilgariff and Georgia Hardstark tell each other their favorite tales of murder and hear hometown crime stories from friends and fans.",
"link": "https://wondery.com/shows/my-favorite-murder/",
"language": "ENGLISH",
"authorName": "Exactly Right",
"isCompleted": false,
"totalEpisodeCount": 733,
"rssUrl": "https://rss.art19.com/erm-mfm",
"image": "https://content.production.cdn.art19.com/images/a0/41/3a/14/a0413a14-d1e5-4504-bc80-536db1f74ad9/f89549f7a47bd7b39fda30cfc5636b72dd3103592fe5bc3e19d3b50845720c3215dc336b34fe868a3e04a979835b526a17f57847ac83c77252861d6ea581e531.jpeg",
"release_date": 1452731900
)

podcast9 = Podcast.create(list_id: 5,
"pod_uuid": "fc3c8bb1-1b2a-4619-a029-8866610ae292",
"title": "Crime Junkie",
"itunes_id": 1322200189,
"description": "If you can never get enough true crime... Congratulations, you’ve found your people.",
"link": "https://crimejunkiepodcast.com/",
"language": "ENGLISH",
"authorName": "audiochuck",
"isCompleted": false,
"totalEpisodeCount": 314,
"rssUrl": "https://feeds.simplecast.com/qm_9xx0g",
"image": "https://image.simplecastcdn.com/images/7d68c467-d3d7-41c3-b7c0-92218b530432/2751cf9a-6c0b-442d-be20-579194bd385b/3000x3000/crime-junkie-show-art.jpg?aid=rss_feed",
"release_date": 1513555260
)

podcast10 = Podcast.create(list_id: 3,
"pod_uuid": "08146843-ae79-452c-b0c3-531c4ed8ef7f",
"title": "Conan O’Brien Needs A Friend",
"itunes_id": 1438054347,
"description": "After 25 years at the Late Night desk, Conan realized that the only people at his holiday party are the men and women who work for him. Over the years and despite thousands of interviews, Conan has never made a real and lasting friendship with any of his celebrity guests. So, he started a podcast to do just that. Deeper, unboundedly playful, and free from FCC regulations, Conan O’Brien Needs a Friend is a weekly opportunity for Conan to hang out with the people he enjoys most and perhaps find some real friendship along the way.",
"link": "https://www.earwolf.com/show/conan-obrien/",
"language": "ENGLISH",
"authorName": "Team Coco & Earwolf",
"isCompleted": false,
"totalEpisodeCount": 362,
"rssUrl": "https://feeds.simplecast.com/dHoohVNH",
"image": "https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/6223229f-44ee-42fe-af91-83a4bdd87f00/3000x3000/screen-shot-2023-04-03-at-9-34-20-am.jpg?aid=rss_feed",
"release_date": 1538607600)

podcast11 = Podcast.create(list_id: 5,
"pod_uuid": "de7ecc53-b64e-49ed-ab7b-ff8887a9cc59",
"title": "Dr. Death | S1: Dr. Duntsch",
"itunes_id": 1421573955,
"description": "We’re at our most vulnerable when we go to our doctors. We trust the person at the other end of that scalpel. We trust the hospital. We trust the system. Christopher Duntsch was a neurosurgeon who radiated confidence. He claimed he was the best in Dallas. If you had back pain, and had tried everything else, Dr. Duntsch could give you the spine surgery that would take your pain away. But soon his patients started to experience complications, and the system failed to protect them. Which begs the question: who - or what - is that system meant to protect? From Wondery, the network behind the hit podcast Dirty John, DR. DEATH is a story about a charming surgeon, 33 patients and a spineless system. Reported and hosted by Laura Beil.Listen to Dr. Death Seasons 2 and 3 exclusively on Wondery+ or on Amazon Music with a Prime membership or Amazon Music Unlimited subscription. Join Wondery+ at https://wondery.app.link/drdeath.",
"link": "https://wondery.com/shows/dr-death/?utm_source=rss",
"language": "ENGLISH",
"authorName": "Wondery",
"isCompleted": false,
"totalEpisodeCount": 13,
"rssUrl": "https://rss.art19.com/dr-death",
"image": "https://content.production.cdn.art19.com/images/d4/06/1f/5b/d4061f5b-c6d1-4304-b9d7-5e793455243a/70623915db6adec4a72cdaa15bbab7d79575e4eaaf31e3daabc2d6ea87a45d53f726ae8a94d6027f5d5a5413df5431bd21a46dc575968c0bc42e7e8acbbc4b89.jpeg",
"release_date": 1534921500
)

podcast12 = Podcast.create(list_id: 8,
"pod_uuid": "709f1ef1-25b0-49c0-ace2-99a18b713a8f",
"title": "The Trojan Horse Affair",
"itunes_id": 1606918193,
"description": "A strange letter appears on a city councillor’s desk in Birmingham, England, laying out an elaborate plot by Islamic extremists to infiltrate the city’s schools. The plot has a code name: Operation Trojan Horse. The story soon explodes in the news and kicks off a national panic. By the time it all dies down, the government has launched multiple investigations, beefed up the country’s counterterrorism policy, revamped schools and banned people from education for the rest of their lives. \n\nTo Hamza Syed, who is watching the scandal unfold in his city, the whole thing seemed … off. Because through all the official inquiries and heated speeches in Parliament, no one has ever bothered to answer a basic question: Who wrote the letter? And why? The night before Hamza is to start journalism school, he has a chance meeting in Birmingham with the reporter Brian Reed, the host of the hit podcast S-Town. Together they team up to investigate: Who wrote the Trojan Horse letter? They quickly discover that it’s a question people in power do not want them asking. \n\nFrom Serial Productions and The New York Times comes The Trojan Horse Affair: a mystery in eight parts.",
"link": "https://trojan-horse.simplecast.com",
"language": "ENGLISH",
"authorName": "Serial Productions & The New York Times",
"isCompleted": false,
"totalEpisodeCount": 9,
"rssUrl": "https://feeds.simplecast.com/B9KgArY4",
"image": "https://image.simplecastcdn.com/images/4105a47a-42e5-4ccc-887a-832af7989986/994e07c0-bda9-48e1-bc7f-729c161e685b/3000x3000/nyt-s-thorse-albumartwork-3000.jpg?aid=rss_feed",
"release_date": 1643281200
)

podcast13 = Podcast.create(list_id: 2,
"pod_uuid": "e81999d2-0ece-4794-b41e-489763a6237b",
"title": "Song Exploder",
"itunes_id": 788236947,
"description": "Song Exploder is a podcast where musicians take apart their songs, and piece by piece, tell the story of how they were made. Each episode features an artist discussing a song of theirs, breaking down the sounds and ideas that went into the writing and recording. Hosted and produced by Hrishikesh Hirway.",
"link": "http://www.songexploder.net",
"language": "ENGLISH",
"authorName": "Hrishikesh Hirway",
"isCompleted": false,
"totalEpisodeCount": 274,
"rssUrl": "https://feed.songexploder.net/SongExploder",
"image": "https://f.prxu.org/song-exploder/images/be38e299-c8df-4c7c-ac77-ea4b8723e23d/Song_Exploder.png",
"release_date": 1388565000
)


podcast14 = Podcast.create(list_id: 2,
"pod_uuid": "c0ed39fc-3410-43ab-ac49-a1bad6ae9014",
"title": "How Did This Get Made?",
"itunes_id": 409287913,
"description": "Have you ever seen a movie so bad that it's amazing? Paul Scheer, June Diane Raphael and Jason Mantzoukas want to hear about it! We'll watch it with our funniest friends, and report back to you with the results.",
"link": "http://www.earwolf.com/show/how-did-this-get-made/",
"language": "ENGLISH",
"authorName": "Earwolf and Paul Scheer, June Diane Raphael, Jason Mantzoukas",
"isCompleted": false,
"totalEpisodeCount": 60,
"rssUrl": "https://feeds.simplecast.com/Ao0C24M8",
"image": "https://image.simplecastcdn.com/images/a35fca4e-944a-4ccb-bc7b-d678b2c11e9d/9a9cbdd6-22c3-4a6f-be04-49316ffeeaa7/3000x3000/ear-cover-hdtgm-3000x3000-r2017-final.jpg?aid=rss_feed",
"release_date": 1291190400
)

podcast15 = Podcast.create(list_id: 7,
"pod_uuid": "437b3e05-05e8-4723-aa4d-8933df7c9925",
"title": "You're Wrong About",
"itunes_id": 1380008439,
"description": "Sarah is a journalist obsessed with the past. Every week she reconsiders a person or event that's been miscast in the public imagination.",
"link": "https://www.buzzsprout.com/1112270",
"language": "ENGLISH",
"authorName": "Sarah Marshall",
"isCompleted": false,
"totalEpisodeCount": 189,
"rssUrl": "https://feeds.buzzsprout.com/1112270.rss",
"image": "https://storage.buzzsprout.com/variants/2d605m8uneahqo4polewo18qw4f4/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg",
"release_date": 1525291200
)

podcast16 = Podcast.create(list_id: 7,
"pod_uuid": "2cf30b44-6965-4485-bded-77173f835077",
"title": "Normal Gossip",
"itunes_id": 1597761181,
"description": "Normal Gossip delivers juicy, strange, funny, and utterly banal gossip about people you’ll never know and never meet. Host Kelsey McKinney discusses reader-submitted comedic gossip with guests, diving into the lives and decisions of complete strangers. The second-hand truth really is stranger than fiction. Produced by Alex Sujong Laughlin. Show art by Tara Jacoby.",
"link": "http://defector.com",
"language": "ENGLISH",
"authorName": "Normal Gossip",
"isCompleted": false,
"totalEpisodeCount": 32,
"rssUrl": "https://publicfeeds.net/f/3492/feed-rss.xml",
"image": "https://f.prxu.org/3492/images/01e4145d-1e06-4521-8548-d6c9072e53c3/Show_Cover_Normal_Gossip_red_v5.jpg",
"release_date": 1637188021
)

podcast17 = Podcast.create(list_id: 2,
"pod_uuid": "c43f609a-61ae-40c9-9831-c90caea85f60",
"title": "Keep It!",
"itunes_id": 1324606666,
"description": "Wherever pop culture and politics collide, Ira Madison III and Louis Virtel are on hand to examine the gorgeous wreckage from their uniquely queer perspective. Each week, our “Princes of Pop Culture” are joined by the likes of Michelle Yeoh, Hunter Doohan, John Boyega, Connie Britton, Gabrielle Union, and Sheryl Lee Ralph to unpack the latest controversies, laude character actress appreciation, and all the shade that’s fit to throw. New episodes drop every Wednesday.",
"link": "https://crooked.com/",
"language": "ENGLISH",
"authorName": "Crooked Media",
"isCompleted": false,
"totalEpisodeCount": 276,
"rssUrl": "https://feeds.simplecast.com/CbCOMZ03",
"image": "https://image.simplecastcdn.com/images/ff5c9684-fb4e-4966-a33d-7941e89e2281/1063f746-604d-4707-bd43-a1520175a218/3000x3000/keepit-ig-1080x1080.jpg?aid=rss_feed",
"release_date": 1513091797
)

podcast18 = Podcast.create(list_id: 2,
"pod_uuid": "1e07eaa6-d151-4825-a8ec-604bf8fda33d",
"title": "You Must Remember This",
"itunes_id": 858124601,
"description": "You Must Remember This is a storytelling podcast exploring the secret and/or forgotten histories of Hollywood’s first century. It’s the brainchild and passion project of Karina Longworth (founder of Cinematical.com, former film critic for LA Weekly), who writes, narrates, records and edits each episode. It is a heavily-researched work of creative nonfiction: navigating through conflicting reports, mythology, and institutionalized spin, Karina tries to sort out what really happened behind the films, stars and scandals of the 20th century.",
"link": "http://youmustrememberthispodcast.com/",
"language": "ENGLISH",
"authorName": "Karina Longworth",
"isCompleted": false,
"totalEpisodeCount": 215,
"rssUrl": "https://feeds.megaphone.fm/YMRT7068253588",
"image": "https://megaphone.imgix.net/podcasts/9da5743e-d296-11ea-b5e1-0f0c0fb63e47/image/image.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
"release_date": 1397683140
)

podcast19 = Podcast.create(list_id: 2,
"pod_uuid": "7b2659e9-849b-4469-b383-03dead87b71c",
"title": "Office Ladies",
"itunes_id": 1480311435,
"description": "The Office co-stars and best friends, Jenna Fischer and Angela Kinsey, are doing the ultimate The Office re-watch podcast for you. Each week Jenna and Angela will break down an episode of The Office and give exclusive behind the scene stories that only two people who were there, can tell you.",
"link": "https://www.earwolf.com/show/office-ladies/",
"language": "ENGLISH",
"authorName": "Earwolf & Jenna Fischer and Angela Kinsey",
"isCompleted": false,
"totalEpisodeCount": 184,
"rssUrl": "https://feeds.simplecast.com/PxEW_ipK",
"image": "https://image.simplecastcdn.com/images/d139afc2-e8b0-4ec2-bc74-fdc3c88f649a/2531b112-7436-47dc-8ed6-fb6b68296e3c/3000x3000/stitcher-cover-officeladies-3000x3000-final-1.jpg?aid=rss_feed",
"release_date": 1569409200
)

podcast20 = Podcast.create(list_id: 2,
"pod_uuid": "81b2a312-6976-4d22-bc54-4e3991fee332",
"title": "Pop Culture Happy Hour",
"itunes_id": 278974813,
"description": "Get obsessed with us. Five days a week, Pop Culture Happy Hour serves you recommendations and commentary on the buzziest movies, TV, music, books, videogames and more. Join arts journalists Linda Holmes, Glen Weldon, Stephen Thompson, and Aisha Harris - plus a rotating cast of guest pop culture aficionados. The Happy Hour team leaves room at the table for exploring a range of reactions and opinions on every bit of the pop universe. From lowbrow to highbrow to the stuff in between, they take it all with a shot of cheer. Make your happy hour even happier with Pop Culture Happy Hour Plus! Your subscription supports the podcast and unlocks a sponsor-free feed.",
"link": "https://www.npr.org/podcasts/510282/pop-culture-happy-hour",
"language": "ENGLISH",
"authorName": "NPR",
"isCompleted": false,
"totalEpisodeCount": 300,
"rssUrl": "https://feeds.npr.org/510282/podcast.xml",
"image": "https://media.npr.org/assets/img/2022/09/23/popculture-happyhour_tile_npr-network-01_sq-a6085eb399896271a87a1983ae3c6c702f69dcd9.jpg?s=1400&c=66&f=jpg",
"release_date": 1598540525
)

podcast21 = Podcast.create(list_id: 3,
"pod_uuid": "60def796-e182-4542-9b92-4fb885180c18",
"title": "WTF with Marc Maron Podcast",
"itunes_id": 329875043,
"description": "Marc Maron welcomes comedians, actors, directors, writers, authors, musicians and folks from all walks of life to his home for amazingly revealing conversations. Marc's probing, comprehensive interview style allows guests to express themselves in ways listeners have never heard. \nSign up here for WTF+ to get the full show archives and weekly bonus material! Hosted on Acast.",
"link": "http://wtfpod.com/",
"language": "ENGLISH",
"authorName": "Marc Maron",
"isCompleted": false,
"totalEpisodeCount": 960,
"rssUrl": "https://access.acast.com/rss/62a222737c02140013aa4c03/",
"image": "https://assets.pippa.io/shows/62a222737c02140013aa4c03/1656679440477-8e0e5db81e3f07c927b0032af2591499.jpeg",
"release_date": 1401296880
)

podcast22 = Podcast.create(list_id: 3,
"pod_uuid": "b62bb530-33ee-4745-8de6-34bf943b0484",
"title": "Comedy Bang Bang: The Podcast",
"itunes_id": 316045799,
"description": "Join host Scott Aukerman (\"Comedy Bang! Bang!\" on IFC, \"Mr. Show\") for a weekly podcast that blends conversation and character work from today's funniest comedians. While Scott begins by traditionally interviewing the celebrities, the open-door policy means an assortment of eccentric oddballs can pop by at any moment to chat, compete in games, and engage in comic revelry. With all that, and regular bonus episodes, we bet your favorite part will still be the plugs!",
"link": "http://www.earwolf.com/show/comedy-bang-bang/",
"language": "ENGLISH",
"authorName": "Earwolf and Scott Aukerman",
"isCompleted": false,
"totalEpisodeCount": 111,
"rssUrl": "https://feeds.simplecast.com/byb4nhvN",
"image": "https://image.simplecastcdn.com/images/a35fca4e-944a-4ccb-bc7b-d678b2c11e9d/ff9cb7ab-74e1-4a8a-98c5-48613e5d500b/3000x3000/ear-cover-comedybangbang-2018refresh-3000x3000-final-1.jpg?aid=rss_feed",
"release_date": 1241136000
)

podcast23 = Podcast.create(list_id: 3,
"pod_uuid": "a56da4ac-139f-461e-9066-46b8cda8f2b5",
"title": "Wait Wait... Don't Tell Me!",
"itunes_id": 121493804,
"description": "NPR's weekly news quiz. Have a laugh and test your knowledge with today's funniest comedians. And if you can't get enough, try our new mid-week show, Everyone & Their Mom. Each Wednesday, host Emma Choi takes the story everyone's talking about and uses it as an excuse to hang out with culture makers, Wait Wait panelists, and hilarious new comedians. Hate free content? Try a subscription to Wait Wait... Don't Tell Me!+. Your subscription supports public radio and unlocks fun bonus episodes along with sponsor-free listening.",
"link": "https://www.npr.org/podcasts/344098539/wait-wait-don-t-tell-me",
"language": "ENGLISH",
"authorName": "NPR",
"isCompleted": false,
"totalEpisodeCount": 300,
"rssUrl": "https://feeds.npr.org/344098539/podcast.xml",
"image": "https://media.npr.org/assets/img/2022/09/23/waitwait-don-t-tell-me_tile_npr-network-01_sq-d51413832c7ccf5301741d7f1ee2e1853fed9597.jpg?s=1400&c=66&f=jpg",
"release_date": 1537903380
)

podcast24 = Podcast.create(list_id: 4,
"pod_uuid": "b6e39067-4512-4c84-a905-8d4675668ebd",
"title": "CBC News At Issue",
"itunes_id": 1310502047,
"description": "The National's Rosemary Barton tackles the week's big political stories with Canada's leading political journalists, including Chantal Hébert and Andrew Coyne.  A podcast that helps you understand the why behind the moves and decisions of your elected officials.",
"link": "http://www.cbc.ca/thenational",
"language": "ENGLISH",
"authorName": "CBC Radio",
"isCompleted": false,
"totalEpisodeCount": 29,
"rssUrl": "https://www.cbc.ca/podcasting/includes/atissue.xml",
"image": "https://www.cbc.ca/radio/podcasts/images/atissue-promo.jpg",
"release_date": 1622693400
)

podcast25 = Podcast.create(list_id: 4,
"pod_uuid": "cdddcc43-68f2-4225-bd70-9204cfe734c6",
"title": "Pivot",
"itunes_id": 1073226719,
"description": "Every Tuesday and Friday, tech journalist Kara Swisher and NYU Professor Scott Galloway offer sharp, unfiltered insights into the biggest stories in tech, business, and politics. They make bold predictions, pick winners and losers, and bicker and banter like no one else. After all, with great power comes great scrutiny. From New York Magazine and the Vox Media Podcast Network.",
"link": "nymag.com/pivot",
"language": "ENGLISH",
"authorName": "New York Magazine",
"isCompleted": false,
"totalEpisodeCount": 435,
"rssUrl": "https://feeds.megaphone.fm/pivot",
"image": "https://megaphone.imgix.net/podcasts/d6280242-e5c9-11e8-a7e3-d766bb7d2d3e/image/uploads_2F1589209751803-3cf2fk1zbft-d7b74cb4d52d7b18877546f240df7151_2FPivot_TileArt_FINAL.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
"release_date": 1537812480
)

podcast26 = Podcast.create(list_id: 4,
"pod_uuid": "521aa8c4-ebe9-40ba-8167-371bb3f50ee9",
"title": "Today, Explained",
"itunes_id": 1346207297,
"description": "News comes at you fast. Join us at the end of your day to understand it. Today, Explained is your all-killer, no-filler, Monday to Friday news explainer co-hosted by Sean Rameswaram and Noel King. Every episode features the finest reporters from the Vox Media Podcast Network and beyond.",
"link": "https://www.vox.com/todayexplained",
"language": "ENGLISH",
"authorName": "Vox",
"isCompleted": false,
"totalEpisodeCount": 1300,
"rssUrl": "https://feeds.megaphone.fm/VMP5705694065",
"image": "https://megaphone.imgix.net/podcasts/23d52a2a-1c5f-11ea-9a0e-b70170f2a827/image/uploads_2F1588357113366-jjsdfzx6x4m-c0339c10f9b113a5fcc93436e66e5ef4_2FTodayExplained%2BV2_Tile_3000x3000%2B_281_29.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
"release_date": 1519073400
)

podcast27 = Podcast.create(list_id: 1,
"pod_uuid": "5c38907e-fd99-493d-a82f-c442f8705f3f",
"title": "S-Town",
"itunes_id": 1212558767,
"description": "S-Town is a podcast hosted by Brian Reed from Serial Productions, a New York Times company. The story follows a man named John who despises his Alabama town and decides to do something about it. He asks Brian to investigate the son of a wealthy family who's allegedly been bragging that he got away with murder. But when someone else ends up dead, the search for the truth leads to a nasty feud, a hunt for hidden treasure, and an unearthing of the mysteries of one man's life.",
"link": "https://stownpodcast.org",
"language": "ENGLISH",
"authorName": "Serial Productions",
"isCompleted": false,
"totalEpisodeCount": 8,
"rssUrl": "https://feeds.simplecast.com/CpvnpIaj",
"image": "https://image.simplecastcdn.com/images/198280b3-d57c-4a19-b5cf-5da06323f149/bb86886a-34ff-4f96-a350-c6590ebb2e60/3000x3000/s-town-itunes-artwork.jpg?aid=rss_feed",
"release_date": 1490689800
)

podcast28 = Podcast.create(list_id: 6,
"pod_uuid": "5aa1a1b8-2879-46ae-b0ae-a25bd65af2f0",
"title": "Why Won't You Date Me? with Nicole Byer",
"itunes_id": 1314759544,
"description": "Nicole Byer is single and has been for decades. She’s smart, funny, fat, and loves love. So the question is why is she perpetually single? This podcast is a quest to find that answer. Every week, Nicole invites a comedian, friend, or ex-fling to interview their dating life and figure out her own.",
"link": "https://teamcoco.com/podcasts",
"language": "ENGLISH",
"authorName": "Team Coco & Nicole Byer",
"isCompleted": false,
"totalEpisodeCount": 286,
"rssUrl": "https://feeds.simplecast.com/pjFgZKk1",
"image": "https://image.simplecastcdn.com/images/2253ffaf-48ca-4d43-8cae-d5b0932e6e0a/c6e18a44-14e5-4c7a-bfa6-65a882ed04db/3000x3000/image.jpg?aid=rss_feed",
"release_date": 1510776524
)

podcast29 = Podcast.create(list_id: 3,
"pod_uuid": "345212ed-525f-4383-86ca-b66f262fdcf3",
"title": "My Brother, My Brother And Me",
"itunes_id": 367330921,
"description": "Free advice from three of the world's most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we're obviously doing such a great job of it so far.",
"link": "http://www.mbmbam.com",
"language": "ENGLISH",
"authorName": "The McElroys",
"isCompleted": false,
"totalEpisodeCount": 669,
"rssUrl": "https://feeds.simplecast.com/wjQvYtdl",
"image": "https://image.simplecastcdn.com/images/9ba52d4c-4e8c-4203-a3de-be89969671f2/13b53677-6ef7-4079-a079-80814f584e14/3000x3000/mbmbam-cover-final.jpg?aid=rss_feed",
"release_date": 1271035560
)

podcast30 = Podcast.create(list_id: 1,
"pod_uuid": "075bef27-dcf2-470f-861d-2f1213d06fee",
"title": "SmartLess",
"itunes_id": 1521578868,
"description": "\"SmartLess\" with Jason Bateman, Sean Hayes, &amp; Will Arnett is a podcast that connects and unites people from all walks of life to learn about shared experiences through thoughtful dialogue and organic hilarity. A nice surprise: in each episode of SmartLess, one of the hosts reveals his mystery guest to the other two. What ensues is a genuinely improvised and authentic conversation filled with laughter and newfound knowledge to feed the SmartLess mind. New episodes on Mondays for free. Listen 1-week early and to all episodes ad-free with Wondery+ or Amazon Music with a Prime membership or Amazon Music Unlimited subscription.",
"link": "https://wondery.com/shows/smartless/?utm_source=rss",
"language": "ENGLISH",
"authorName": "Jason Bateman, Sean Hayes, Will Arnett",
"isCompleted": false,
"totalEpisodeCount": 148,
"rssUrl": "https://rss.art19.com/smartless",
"image": "https://content.production.cdn.art19.com/images/f2/c3/d0/57/f2c3d057-7482-4a12-8275-64ab40fdec57/8219ba09564eb8780565c7a21f79f61ef73fe090e0a060136485a3b7cec6319fed0caa8e26af1dcb4487b1d4bc9254a4b43e2f1d446d939e275d11d7868dbd14.jpeg",
"release_date": 1594126800
)

podcast31 = Podcast.create(list_id: 6,
"pod_uuid": "2cf30b44-6965-4485-bded-77173f835077",
"title": "Normal Gossip",
"itunes_id": 1597761181,
"description": "Normal Gossip delivers juicy, strange, funny, and utterly banal gossip about people you’ll never know and never meet. Host Kelsey McKinney discusses reader-submitted comedic gossip with guests, diving into the lives and decisions of complete strangers. The second-hand truth really is stranger than fiction. Produced by Alex Sujong Laughlin. Show art by Tara Jacoby.",
"link": "http://defector.com",
"language": "ENGLISH",
"authorName": "Normal Gossip",
"isCompleted": false,
"totalEpisodeCount": 32,
"rssUrl": "https://publicfeeds.net/f/3492/feed-rss.xml",
"image": "https://f.prxu.org/3492/images/01e4145d-1e06-4521-8548-d6c9072e53c3/Show_Cover_Normal_Gossip_red_v5.jpg",
"release_date": 1637188021
)

podcast32 = Podcast.create(list_id: 6,
"pod_uuid": "1f14df6e-a01c-4a11-ae98-cef95d27d42f",
"title": "Dear Hank & John",
"itunes_id": 1002937870,
"description": "Hosts John and Hank Green (authors and YouTubers) offer both humorous and heartfelt advice about life’s big and small questions. They bring their personal passions to each episode by sharing the week’s news from Mars (the planet) and AFC Wimbledon (the fourth-tier English football club).",
"link": "https://www.wnycstudios.org/podcasts/dear-hank-john",
"language": "ENGLISH",
"authorName": "Complexly",
"isCompleted": false,
"totalEpisodeCount": 369,
"rssUrl": "https://feeds.simplecast.com/9YNI3WaL",
"image": "https://image.simplecastcdn.com/images/2dcfae8f-b2e0-4826-a483-1306d3b8be06/d8c21569-e9eb-41d5-b1d0-70d9ea0c8ddc/3000x3000/dhj-podcastartwork-2021-v1.jpg?aid=rss_feed",
"release_date": 1433764800
)

podcast33 = Podcast.create(list_id: 7,
"pod_uuid": "eced78c5-9621-415a-a4d1-7e54b4bec98f",
"title": "Ologies with Alie Ward",
"itunes_id": 1278815517,
"description": "Volcanoes. Trees. Drunk butterflies. Mars missions. Slug sex. Death. Beauty standards. Anxiety busters. Beer science. Bee drama. Take away a pocket full of science knowledge and charming, bizarre stories about what fuels these professional -ologists' obsessions. Humorist and science correspondent Alie Ward asks smart people stupid questions and the answers might change your life.",
"link": "https://www.alieward.com/ologies",
"language": "ENGLISH",
"authorName": "Alie Ward",
"isCompleted": false,
"totalEpisodeCount": 318,
"rssUrl": "https://feeds.simplecast.com/FO6kxYGj",
"image": "https://image.simplecastcdn.com/images/89060b63-e603-4297-b6e8-5a654e50244e/f9713c33-7eca-4512-8d96-7a668e274cb2/3000x3000/image.jpg?aid=rss_feed",
"release_date": 1504501979
)

podcast34 = Podcast.create(list_id: 7,
"pod_uuid": "c4cd80a4-3105-491c-8cd3-20b77cb54290",
"title": "Off Menu with Ed Gamble and James Acaster",
"itunes_id": 1442950743,
"description": "Comedians Ed Gamble and James Acaster invite special guests into their magical restaurant to each choose their favourite starter, main course, side dish, dessert and drink. Ever wanted to eat your dream meal? It's time to order Off Menu. Hosted on Acast.",
"link": "https://www.offmenupodcast.co.uk",
"language": "ENGLISH",
"authorName": "Plosive",
"isCompleted": false,
"totalEpisodeCount": 216,
"rssUrl": "https://feeds.acast.com/public/shows/b19ac1f5-6adf-4c8b-aa1a-2af2160f99e4",
"image": "https://assets.pippa.io/shows/61ba04aa1a8cbee88a3cf0d8/show-cover.jpg",
"release_date": 1542391959
)

podcast35 = Podcast.create(list_id: 7,
"pod_uuid": "8ec964df-93de-441c-ad76-e7c1fe35a4df",
"title": "The Adventure Zone",
"itunes_id": 947899573,
"description": "Justin, Travis and Griffin McElroy from My Brother, My Brother and Me have recruited their dad Clint for a campaign of high adventure. Join the McElroys as they find their fortune and slay an unconscionable number of ... you know, kobolds or whatever in ... The Adventure Zone..",
"link": "https://adventurezone.simplecast.com",
"language": "ENGLISH",
"authorName": "The McElroys",
"isCompleted": false,
"totalEpisodeCount": 278,
"rssUrl": "https://feeds.simplecast.com/cYQVc__c",
"image": "https://image.simplecastcdn.com/images/9ba52d4c-4e8c-4203-a3de-be89969671f2/67af38f8-6bc7-4905-b899-1fa5b4f15e74/3000x3000/steeplechase.jpg?aid=rss_feed",
"release_date": 1417621203
)

podcast36 = Podcast.create(list_id: 7,
"pod_uuid": "bb074200-64c0-47bd-ad27-0b1efae29912",
"title": "Maintenance Phase",
"itunes_id": 1535408667,
"description": "Debunking the junk science behind health fads, wellness scams and nonsensical nutrition advice.",
"link": "http://maintenancephase.com",
"language": "ENGLISH",
"authorName": "Aubrey Gordon & Michael Hobbes",
"isCompleted": false,
"totalEpisodeCount": 64,
"rssUrl": "https://feeds.buzzsprout.com/1411126.rss",
"image": "https://storage.buzzsprout.com/variants/4k2yt7zufginqdye9p6ws96sx8gj/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg",
"release_date": 1602457200
)

podcast37 = Podcast.create(list_id: 6,
"pod_uuid": "bb074200-64c0-47bd-ad27-0b1efae29912",
"title": "Maintenance Phase",
"itunes_id": 1535408667,
"description": "Debunking the junk science behind health fads, wellness scams and nonsensical nutrition advice.",
"link": "http://maintenancephase.com",
"language": "ENGLISH",
"authorName": "Aubrey Gordon & Michael Hobbes",
"isCompleted": false,
"totalEpisodeCount": 64,
"rssUrl": "https://feeds.buzzsprout.com/1411126.rss",
"image": "https://storage.buzzsprout.com/variants/4k2yt7zufginqdye9p6ws96sx8gj/5cfec01b44f3e29fae1fb88ade93fc4aecd05b192fbfbc2c2f1daa412b7c1921.jpg",
"release_date": 1602457200
)

podcast38 = Podcast.create(list_id: 6,
"pod_uuid": "515997a2-2e3c-4b5a-b2a2-55d947db0eb9",
"title": "Happier with Gretchen Rubin",
"itunes_id": 969519520,
"description": "Gretchen Rubin is HAPPIER, and she wants you to be happier too. The #1 bestselling author of The Happiness Project and Better Than Before gets more personal than ever as she brings her practical, manageable advice about happiness and good habits to this lively, thought-provoking podcast. Gretchen’s cohost and guinea pig is her younger sister, Elizabeth Craft, a TV writer and producer living in Los Angeles, who (lovingly) refers to Gretchen as her happiness bully. Part of the Cadence13 Network.",
"link": "http://www.gretchenrubin.com",
"language": "ENGLISH",
"authorName": "Gretchen Rubin / The Onward Project",
"isCompleted": false,
"totalEpisodeCount": 847,
"rssUrl": "https://feeds.megaphone.fm/happier",
"image": "https://megaphone.imgix.net/podcasts/32ecfb42-8289-11e5-b42a-8f36c3d2bc76/image/Happier_with_Gretchen_Rubin_FINAL.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
"release_date": 1424829480
)

podcast39 = Podcast.create(list_id: 6,
pod_uuid: "0dd477b0-976e-4f37-98ac-28367a6f4b88",
title: "Pod Save America",
itunes_id: 1192761536,
description: "Four former aides to President Obama—Jon Favreau, Jon Lovett, Dan Pfeiffer and Tommy Vietor—are joined by journalists, politicians, activists, and more for a no-b******t conversation about politics. They cut through the noise to break down the week’s news, and help people figure out what matters and how they can help. You can listen to new episodes twice a week on Tuesdays and Thursdays.",
link: "https://crooked.com/",
language: "ENGLISH",
authorName: "Crooked Media",
isCompleted: false,
totalEpisodeCount: 681,
rssUrl: "https://feeds.simplecast.com/dxZsm5kX",
image: "https://image.simplecastcdn.com/images/9aa1e238-cbed-4305-9808-c9228fc6dd4f/eb7dddd4-ecb0-444c-b379-f75d7dc6c22b/3000x3000/uploads-2f1595947484360-nc4atf9w7ur-dbbaa7ee07a1ee325ec48d2e666ac261-2fpodsave100daysfinal1800.jpg?aid=rss_feed",
release_date: 1483719600
)

Friendship.create(user_id: 1, friend_id: 2)