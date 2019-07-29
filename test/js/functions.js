'use strict'

// eslint-disable-next-line camelcase
var user_profile = {
  'subtitle': 'What is Not a Function?',
  'intro': '<b>A B C D F G</b> <br> Introduction to Functions!',
  'player1': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2451716309/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
  'pnote': 'So here I am Diving Into the Code I should to finish my Quest!',
  'pcode1': '<h2> - Q: You know what is Fun?</h2 <br> - A: Yes, Actions! <br><br> % Master: So type those <b>codes</b> with your fingers which are the <b>DOM</b> Objects, the Browser can interpret (without a lot mistakes (compared to humans :P)), and see ( test ) their behaviors, while you learn! ',
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'open_source': [
    {
      'description': 'GitHub',
      'link': 'https://github.com/rakzhodekams'
    }
  ]
}

// LOGO
let logo = document.getElementById('logo')
logo.innerHTML = user_profile.logo

// BANDCAMP TRACK
let player = document.getElementById('player1')
player.innerHTML = user_profile.player1

// INTRO
let fun = document.getElementById('subtitle')
let into = document.getElementById('mintro')
let hereiam = document.getElementById('pnote')
fun.innerHTML = user_profile.subtitle
into.innerHTML = user_profile.intro
hereiam.innerHTML = user_profile.pnote

// INSERT FIRST POST DATA
let post1 = document.getElementById('pcode1')
post1.innerHTML = user_profile.pcode1

// NEXT PAGE - UNDERSTANDING FUNCTIONS
/* let buttonNext = document.getElementById('btnNext')
let postList = 1
let i = 1
buttonNext.onclick = function() {
  let textContent = document.getElementById('pcode1')
  let postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  postList += 1
  i += 1
}

// Go Back
let buttonBack = document.getElementById('btnBack')
buttonBack.onclick = function() {
  let textContent = document.getElementById('pcode1')
  let postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  postList -= 1
  i -= 1
} */

// GITHUB FOOT
document.getElementById('github').innerHTML = '<a href=' + user_profile.open_source[0].link + ' ' + 'target=_blank>GitHub</a>'
