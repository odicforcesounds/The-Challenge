'use strict';

// eslint-disable-next-line camelcase
var user_profile = {
  'firstName': 'Oscar',
  'lastName': 'FM',
  'picture': '<img  width="300px" height="300" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace5.jpg">',
  'location': 'Portugal',
  'city': 'Porto',
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'player1': '<iframe style="border: 0; width: 90%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=997256964/size=small/bgcol=333333/linkcol=0f91ff/track=697635667/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/spiritual-algorithm">Spiritual Algorithm by Odicforcesounds</a></iframe>',
  'slogan': 'If Time is build within our selfs, then Time is our selfs, as result of Time it self.',
  'website': 'https://www.odicforcesounds.com/',
  'blog': 'A little about me: <b>Monkeys</b> always like to play with <q><strong>Code</strong></q>, while writting any kind of <q>text</q> aka <q>subject</q> is coding as well, not computers, but possibly, minds who wish to learn about that specific subject, as they did pay attention to!! About that, I write a lot! Right now I am playing  with css and learning more about loops. This pages will change in Time. Loops will be tested in <span style="color:yellow;background-color:black">C</span> page.  ',
  'blog2': '<li id="art"><a  href="https://wiki.odicforcesounds.com/art/">Art</a></li>: Odicforcesounds Creative ( Fantastic & Logic ) Expression<br><li id="blog"><a  href="./b.html">B</a></li>: stands for Blogs - (Welcome to this.blogs page)<br><li id="code"><a  href="./c.html">C</a></li>: stands for Code Challenge<br><span style="color:gray;background-color:black"> D </span>: stands for Design & Develop (active soon)<br><span style="color:gray;background-color:black"> E </span>: // Null<br> <li id="fun"><a  href="./f.html">F</a></li>: Fire Functions<br><span style="color:gray;background-color:black"> G </span>: stands for Game (Final Login Application)<br><li id="wiki"><a  href="https://wiki.odicforcesounds.com/docs/">Wiki</a></li>: The Challenge: Dive into...',
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
  ]
};

// LOGO
// document.getElementById('logo').innerHTML = user_profile.logo;
document.getElementById('blogspot').innerHTML = '<a href=' + user_profile.social_media[6].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-blogger-48.png"></a>';
document.getElementById('facebook').innerHTML = '<a href=' + user_profile.social_media[0].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-facebook-circled-48.png"></a>';
document.getElementById('twitter').innerHTML = '<a href=' + user_profile.social_media[2].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-twitter-circled-48.png"></a>';
document.getElementById('tumblr').innerHTML = '<a href=' + user_profile.social_media[3].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-tumblr-48.png"></a>';
document.getElementById('instagram').innerHTML = '<a href=' + user_profile.social_media[4].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-instagram-48.png"></a>';
document.getElementById('github').innerHTML = '<a href=' + user_profile.social_media[1].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-github-48.png"></a>';
document.getElementById('youtube').innerHTML = '<a href=' + user_profile.social_media[7].link + ' ' + 'target=_blank><img width="24px" src="../../images/icons/icons8-youtube-48.png"></a>';

// USER PROFILE PICTURE
//document.getElementById('welcome').innerHTML = 'Welcome Reader!';
document.getElementById('player1').innerHTML = user_profile.player1;

// SubMenus
document.getElementById('welcome-message').innerHTML = user_profile.blog2;
document.getElementById('picture').innerHTML = user_profile.picture;
document.getElementById('welcome-message2').innerHTML = user_profile.blog;

// SLOGAN
document.getElementById('slogan').innerHTML = user_profile.slogan;
