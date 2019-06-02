'use strict'

// eslint-disable-next-line camelcase
var user_profile = {
  'firstName': 'Oscar',
  'lastName': 'FM',
  'picture': 'https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace5.jpg',
  'location': 'Portugal',
  'city': 'Porto',
  'logo': '<a href="https://odicforcesounds.com/" target="_blank"><img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="We Came in Peace"></a>',
  'player1': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2560697642/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
  'slogan': 'If Time is build within our selfs, then Time is our selfs, as result of Time it self.',
  'website': 'https://www.odicforcesounds.com/',
  'blog': 'This website aims to share some <q>useful</q> (at least for me) coding, to help me to build this website you are reading, from scratch! <br><br> If You click in the Top-Left Logo Image of this website, a new window will be open with the main domain of this project, that was made using <a href="https://angular.io" target="_blank">Angular</a>, which is a <b>JavaScript</b> Framework. <br><br> Even if You dont believe, I made that website without learning JavaScript. Therefor, I made this website to learn <b>JavaScript</b> from scratch. This means, I will not use a single <q>Outside Code</q> to build it. <br><br>Naturally this is <b>false</b>, because each <b>function</b> each language have, is someone else <q>creation</q> as a <b>variable</b> of the Language it Self, and by this date the <b>code</b> still is in a very <q>poor</q> quality as it should as I am learning, to build a website like a <q>professional</q>, while experience is what makes the difference, which makes all the sense of the world, since I really believe in My Own <b>Slogan</b> that is in the foot of this page. <br><br> So lets talk a little about me: <b>Monkeys</b> always like to play with <q><strong>Code</strong></q>, while writting any kind of <q>text</q> aka <q>subject</q> is coding as well, not computers, but possibly, minds who wish to learn about that specific subject! ',
  'social_media': [
    {
      'description': 'Facebook',
      'link': 'https://www.facebook.com/odicforcesounds'
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
    }
  ]
}

// LOGO
document.getElementById('logo').innerHTML = user_profile.logo

// USER PROFILE PICTURE
document.getElementById('welcome').innerHTML = 'Welcome Reader!'
document.getElementById('player1').innerHTML = user_profile.player1

// SubMenus
document.getElementById('welcome-message').innerHTML = user_profile.blog

// SOCIAL MEDIA LINKS
document.getElementById('blogspot').innerHTML = '<a href=' + user_profile.social_media[5].link + ' ' + 'target=_blank>Blogspot</a>'
document.getElementById('facebook').innerHTML = '<a href=' + user_profile.social_media[0].link + ' ' + 'target=_blank>Facebook</a>'
document.getElementById('twitter').innerHTML = '<a href=' + user_profile.social_media[1].link + ' ' + 'target=_blank>Twitter</a>'
document.getElementById('tumblr').innerHTML = '<a href=' + user_profile.social_media[2].link + ' ' + 'target=_blank>Tumblr</a>'
document.getElementById('instagram').innerHTML = '<a href=' + user_profile.social_media[3].link + ' ' + 'target=_blank>Instagram</a>'
document.getElementById('mastodon').innerHTML = '<a href=' + user_profile.social_media[4].link + ' ' + 'target=_blank>Mastodon</a>'

// SLOGAN
document.getElementById('slogan').innerHTML = user_profile.slogan
