'use strict';

// eslint-disable-next-line camelcase
var user_profile = {
  'subtitle': 'What is Not a Function?',
  'intro': '<b>A B C D F G</b> <br> Introduction to Functions!',
  'player': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2451716309/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
  'pnote': 'So here I am Diving Into the Code I should to finish my Quest!',
  'pcode': '<h2> - Q: You know what is Fun?</h2 <br> - A: Yes, Actions! <br><br> % Master: So type those <b>codes</b> with your fingers which are the <b>DOM</b> Objects, the Browser can interpret (without a lot mistakes (compared to humans :P)), and see ( test ) their behaviors, while you learn! <br> ',
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'social_media': [
    {
      'description': 'Facebook',
      'link': 'https://www.facebook.com/odicforcesounds'
    },
    {
      'title': 'Github',
      'link': 'https://github.com/rakzhodekams'
    },
    {
      'description': 'Twitter',
      'link': 'https://twitter.com/odicforcesounds'
    },
    {
      'description': 'Tumblr',
      'link': 'https://rakzhodekams.tumblr.com/'
    },
    {
      'description': 'Instagram',
      'link': 'https://www.instagram.com/odicforcesounds/'
    },
    {
      'description': 'Mastodon',
      'link': 'https://mastodon.social/@odicforcesounds'
    },
    {
      'description': 'Blogspot',
      'link': 'https://odicforcesounds.blogspot.com/'
    },
    {
      'description': 'Youtube',
      'link': 'https://www.youtube.com/channel/UCKxb1p0OzXuiAQBkiY0dCGg'
    }
  ],
};

// LOGO
document.getElementById('logo').innerHTML = user_profile.logo;
document.getElementById('blogspot').innerHTML = '<a href=' + user_profile.social_media[6].link + ' ' + 'target=_blank><img src="../images/icons/icons8-blogger-48.png"></a>';
document.getElementById('facebook').innerHTML = '<a href=' + user_profile.social_media[0].link + ' ' + 'target=_blank><img src="../images/icons/icons8-facebook-circled-48.png"></a>';
document.getElementById('twitter').innerHTML = '<a href=' + user_profile.social_media[2].link + ' ' + 'target=_blank><img src="../images/icons/icons8-twitter-circled-48.png"></a>';
document.getElementById('tumblr').innerHTML = '<a href=' + user_profile.social_media[3].link + ' ' + 'target=_blank><img src="../images/icons/icons8-tumblr-48.png"></a>';
document.getElementById('instagram').innerHTML = '<a href=' + user_profile.social_media[4].link + ' ' + 'target=_blank><img src="../images/icons/icons8-instagram-48.png"></a>';
document.getElementById('github').innerHTML = '<a href=' + user_profile.social_media[1].link + ' ' + 'target=_blank><img src="../images/icons/icons8-github-48.png"></a>';
document.getElementById('youtube').innerHTML = '<a href=' + user_profile.social_media[7].link + ' ' + 'target=_blank><img src="../images/icons/icons8-youtube-48.png"></a>';

// BANDCAMP TRACK
var player = document.getElementById('player');
player.innerHTML = user_profile.player;

// INTRO

var intro = document.getElementById('mintro');
var subtitle = document.getElementById('subtitle');
var hereiam = document.getElementById('pnote');
var post1 = document.getElementById('pcode');

intro.innerHTML = user_profile.intro[0].TopMessage;
hereiam.innerHTML = user_profile.pnote;
subtitle.innerHTML = user_profile.subtitle;



// INSERT FIRST POST DATA

post1.innerHTML = user_profile.pcode;

// NEXT PAGE - UNDERSTANDING FUNCTIONS
/* var buttonNext = document.getElementById('btnNext')
var postList = 1
var i = 1
buttonNext.onclick = function() {
  var textContent = document.getElementById('pcode1')
  var postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  postList += 1
  i += 1
}

// Go Back
var buttonBack = document.getElementById('btnBack')
buttonBack.onclick = function() {
  var textContent = document.getElementById('pcode1')
  var postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  postList -= 1
  i -= 1
} */
