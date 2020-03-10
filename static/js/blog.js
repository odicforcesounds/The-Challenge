'use strict';

// eslint-disable-next-line camelcase
var user_profile = {
  'firstName': 'Oscar',
  'lastName': 'FM',
  'picture': '<img  width="300px" height="270" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/Machine%20World/MachineWorld.jpg">',
  'location': 'Portugal',
  'city': 'Porto',
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'player1': '<iframe style="border: 0; width: 60%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2560697642/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
  'slogan': 'If Time is build within our selfs, then Time is our selfs, as result of Time it self',
  'website': 'https://odicforcesounds.com/',
  'blog': 'A little about me: <b>Monkeys</b> always like to play with <q><strong>Code</strong></q>, while writting any kind of <q>text</q> aka <q>subject</q> is coding as well, not computers, but possibly, minds who wish to learn about that specific subject, as they did pay attention to!! About that, I write a lot! Right now I am playing  with css and learning more about loops. This pages will change in Time. Loops will be tested in <span style="color:yellow;background-color:black">C</span> page.  ',
  'blog1':'This project is hosted in <a  href="https://github.com/odicforcesounds" target="_blank">Github</a> (subscribe this repo). <br> For our Backend we will use Google Firebase Databases. <br> Soon, the <b>De</b> menu will open sharing some maps to build this application.',
  'blog2': '<li id="art"><a  href="https://wiki.odicforcesounds.com/art/">Art</a></li>: <b>Odicforcesounds</b> Creative ( Fantastic & Logic ) Expression<br><li id="blog"><a  href="./b.html">B</a></li>: stands for Blogs - (<b>Welcome</b> to this.blogs page)<br><li id="code"><a  href="./c.html">C</a></li>: stands for <b>Challenge Code</b> (testing zone) <br><span style="color:gray;background-color:black"> D </span>: stands for <b>Design & Develop</b> (active soon)<br><span style="color:gray;background-color:black"> E </span>: // Null<br> <li id="fun"><a  href="./f.html">F</a></li>: Fire Functions (static page aka cartoon aka shell talk commit) <br><span style="color:gray;background-color:black"> G </span>: stands for <b>Github</b> + <b>Game</b> (Final Login Application)<br><li id="wiki"><a  href="https://wiki.odicforcesounds.com/docs/">Wiki</a></li>: <b>The Challenge</b>: Dive into My Dream, Your Dream, Our Dream...',
  'blog3': 'I made <b>Art website-sub-menu</b> using <b>Angular</b>, without know <b>JavaScript</b> but how Angular <b>routes</b> work. <br> Then I paste the content I made ( artistic "if you wish to call it that", and build that crazy site. <br> As You may think, if you pay attention ( I need to dive into the "The World of JavaScript", because is the Expression of <b>Our</b> (including you(reader)) <b>Spiritual Algorithm</b>. Read more about them in the <span style="background-color:black;color:orange">F</span> menu Link-Page. <br> Oh yes, here we are using static HTML pages to show our content, but we are injecting the content we are reading from a <b>JSON</b> Object with Arrays of Objects. Read more about JavaScript at <span style="color:yellow;background-color:black">C</span>. <br> As You may see, the Loop is not well made. I am diving into a New-World, where Imagination and Creativity is built within Logic ( which makes sense )! Sometimes I wish to have Full Free Choice, but even if we think that most have, most do not have that opportunity. As You may think or know, any abstraction (even when is purelly <b>Fantastic</b> is as well the first step or <b>ignition</b> as <b>Fire</b> aka <b>Lamp</b> aka <b>Light</b> of any new <b>App</b> aka <b>Project</b> ). ',
  'blog4': 'You shall accept to help me / you / everyone else, or else, you are included in our Eternal License! You may read it in our <b>Github Repository</b> or in our Art Expression. <br> By the way: check my last CSS approach <a hreF="https://rakzhodekams.github.io/Fireup/" target="_blank">Here</a>. I Love it :D ',
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
    },
    {
      'description': 'stackoverflow',
      'link': 'https://stackoverflow.com/users/6806076/odicforcesounds'
    },
    {
      'description': 'redit',
      'link': 'https://www.reddit.com/user/odicforcesounds'
    }
  ]
};

// LOGO

// document.getElementById('logo').innerHTML = user_profile.logo;
// SLOGAN
document.getElementById('slogan').innerHTML = user_profile.slogan;
// USER PROFILE PICTURE
//document.getElementById('welcome').innerHTML = 'Welcome Reader!';
document.getElementById('player1').innerHTML = user_profile.player1;

// SubMenus
document.getElementById('welcome-message').innerHTML = user_profile.blog2;
document.getElementById('picture').innerHTML = user_profile.picture;
document.getElementById('welcome-message2').innerHTML = user_profile.blog;
document.getElementById('welcome-message1').innerHTML = user_profile.blog1;
document.getElementById('welcome-message3').innerHTML = user_profile.blog3;
document.getElementById('welcome-message4').innerHTML = user_profile.blog4;
