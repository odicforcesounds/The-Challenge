'use strict'

// eslint-disable-next-line camelcase
const user_profile = {
  'intro': [
    {
      'TopMessage': '<b>A B C D F G</b> <br> Introduction to Web Technologies,<br> sharing them while I learn them and use them here. <br> Check the Code, Follow my Dream!'
    }
  ],
  'player': [
    {
      'title': 'Dive Into the World of JavaScrpt',
      'track': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=997256964/size=small/bgcol=333333/linkcol=0f91ff/track=398268745/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/spiritual-algorithm">Spiritual Algorithm by Odicforcesounds</a></iframe>'
    }
  ],
  'pnote': 'So here I am Diving Into the Code I should to finish my Quest!',
,
  'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
  'open_source': [

  ]
}

// LOGO
const logo = document.getElementById('logo')
logo.innerHTML = user_profile.logo

// INTRO
const intro = document.getElementById('mintro')
intro.innerHTML = user_profile.intro[0].TopMessage

const note = document.getElementById('pnote')
note.innerHTML = user_profile.pnote

// BANDCAMP TRACK
const player = document.getElementById('player1')
player.innerHTML = user_profile.player[0].track

// INSERT FIRST POST DATA
const firstPost = document.getElementById('pcode1')
firstPost.innerHTML = user_profile.postsList[0].content

// document.getElementById('pcode1').innerHTML = user_profile.pcode1

// NEXT PAGE - UNDERSTANDING FUNCTIONS
let buttonNext = document.getElementById('btnNext')
let postList = 1
let i = 1
let count = 1

buttonNext.onclick = function(e) {
  let textContent = document.getElementById('pcode1')
  let postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  count += 1
  postList += 1
  i += 1
}
// Go Back
let buttonBack = document.getElementById('btnBack')
buttonBack.onclick = function(e) {
  let textContent = document.getElementById('pcode1')
  let postList = user_profile.postsList[i].content.length
  textContent.innerHTML = user_profile.postsList[i].content
  count -= 1
  postList -= 1
  i -= 1
}

// GITHUB FOOT
const gh = document.getElementById('github')
gh.innerHTML = '<a href=' + user_profile.open_source[0].link + ' ' + 'target=_blank>GitHub</a>'
