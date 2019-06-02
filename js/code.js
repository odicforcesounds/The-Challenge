'use strict'

// eslint-disable-next-line camelcase
var user_profile = {
  'intro': '<b>A B C D F G</b> <br><br> Introduction to Web Technologies,<br> sharing them while I learn them and use them here!!',
  'player1': '<iframe style="border: 0; width: 50%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=997256964/size=small/bgcol=333333/linkcol=0f91ff/track=398268745/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/spiritual-algorithm">Spiritual Algorithm by Odicforcesounds</a></iframe>',
  'pnote': 'So here I am Diving Into the Code I should to finish my Quest!',
  'pcode1': 'As much I understand <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>, we use it to serve us on how we organize <i>Data</i>, so we know how to <i> access </i> it when ever we wish to, and display it in our browsers in real-time. <br><br>In <b>JavaScript</b> we organize data in <b>arrays[]</b>, which style is based in <a href="https://www.json.org/" target="_blank">JSON</a>. This way we can build our <b>Objects{}</b>. <br><br> With our Data organized in <b>Objects{}</b>, we can access that data and display it inside <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a> tags using <b>JavaScript</b> <b>Functions()</b>. So when we see this page, we know most Data comes from a <b>JavaScript</b> <b>Objects.array[]</b>. <br><br> <b>HTML</b> "was the old way" to store data, but we still have <a href="https://www.xml.com/" target="_blank">XML</a> for Static Data, while with <b>JavaScript</b>, we can hide (ninja style) that data from the source page, and change it without reloading the full page again, or even "worst", we dont need to create a new <b>HTML</b> page and change the values we wish as a "new Link" to change the content, while I dont know how to do that! :) <br><br> <b>HTML</b> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html" target="_blank">Tags</a> can have [id="Value"] and [class="someotherValue"] to guarantee a way to access that particular <b>HTML</b> Tag, called proprieties with <b>CSS</b> or <b>JavaScript</b>, so we can manipulate it, which means: change data, behavior, forms and colors. <br><br> Most web sites use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> to store all data Tags positions and colors, while we can change those "on the fly" with <b>JavaScript</b> <b>Functions()</b>. <br><br> With all of this concepts in Mind, we are ready to talk about my motivations to learn <b>JavaScript</b>. <br> <br> Is all about <b>Logic</b>! <br> <br> 1 + 1 = 1 OR 3 ( Tao / Dao ) ==> <small>Is what I call: <br> E.g. "The Wind of God" OR "the Way of God"</small> <br><br> Fantasy[1] + Logic[1] = Application[1] ==> <br> E.g. Web Applications <br><br> OM[1] + Spirit[1] = Expression[1] ==> <br> E.g. Human Behaviors <br><br> (objects) + (functions) = (data) ==> <br> E.g. Programming Languages <br><br> Maybe we may think is curious that the sum of 2 <b>True</b> absolute and independent <q>realities</q> as being useful to the each others, which result in a new way to access data as a <q>Love relationship</q>, because without one of those, we cannot use none of them. Makes Sense? <br><br>If we have no Data, we cannot organized information because we dont have it, therefor we dont feel that need, therefor we cannot use it in any case! <br><br> A little abstraction: <br><br> Q: What is Data? <br> A: Everything that we are able to describe: <br> feel, see, hear, touch and taste! <br> Q: What can we do with Data? <br> A: Nothing more than use it or appreciate it. <br><br> Q: What are <b>Objects{}</b>? <br>A: Everything we are able to describe.<br> Q: What can we do with <b>Objects{}</b>? <br> A: Nothing more that use them or appreciate them. <br><br> Q: What are <b>Functions()</b>? <br> A: Any Logic Relationship we can do between Data or <b>Objects{}</b>. <br> Q: For What <b>Functions()</b> are used? <br> A: To Test Data and <b>Objects{}</b>! <br><br> Q: What is a Test? <br> A: Is a way to ensure by Logic that Data is <b>Boolen</b>. <br> Q: For what tests are used? <br> A: To know if our <b>Boolen</b> value is <b> <b>True</b> </b> or <b>False</b> <br><br> Q: What is a <b>Boolen</b> value? <br> A: Some value that can be <b>True</b> or <b>False</b>. <br> Q: How we know if our value is <b>True</b> or <b>False</b>? <br> A: If is <b>True</b>, it exist and we can access it, if is <b>False</b>, we cannot! <br><br> If <b> I C U</b> & If <b>U C ME</b> & If <b>ALL C US</b>, then is <b>True</b> we exist? :P <br><br> Now we can dive into the <a href="https://wiki.odicforcesounds.com" target="_blank">Challenge</a> where I <b>Target</b> Everyone, which is in fact what I am going to develop using <b>JavaScript</b> and <a href="https://firebase.google.com" target="_blank">Firebase</a> to build it for me and for everyone who wish to see the code, as he/she shall participate in making this Mobil and Web Application possible, because it is written in Our World Wide Target <b>Eternal License</b>! <br><br> Keep reading JavaScript <b>FUN</b>ctions!',
  'logo': '<a href="https://odicforcesounds.com/" target="_blank"><img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="We Came in Peace"></a>',
  'open_source': [
    {
      'description': 'GitHub',
      'link': 'https://github.com/rakzhodekams'
    }
  ]
}

// LOGO
document.getElementById('logo').innerHTML = user_profile.logo

// INTRO
document.getElementById('mintro').innerHTML = user_profile.intro
document.getElementById('pnote').innerHTML = user_profile.pnote

// BANDCAMP TRACK
document.getElementById('player1').innerHTML = user_profile.player1

// INSERT FIRST POST DATA
document.getElementById('pcode1').innerHTML = user_profile.pcode1

// NEXT PAGE - UNDERSTANDING FUNCTIONS

// GITHUB FOOT
document.getElementById('github').innerHTML = '<a href=' + user_profile.open_source[0].link + ' ' + 'target=_blank>GitHub</a>'
