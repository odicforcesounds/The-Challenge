' use strict '

// JAVASCRIPT IS USED TO INJECT DATA INTO HTML
// JSON IS USED TO STORE DATA
// NEXT PAGE - UNDERSTANDING FUNCTIONS
// WHAT IS NOT A FUNCTION?
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
// eslint-disable-next-line camelcase
// SINGLE PAGE APPLICATION (SPA)
const spa = {
  'domain': 'https://odicforcesounds.com',
  'website': 'https://wiki.odicforcesounds.com/',
  'sitemap': 'https://wiki.odicforcesounds.com/sitemap.xml',
  'globalNotePage': 'So here I am Diving Into the Code I should to finish my Quest!',
  'topMenu': [
    {
      'logo': '<img id="logo" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace3.jpg" alt="">',
      'topMenuMusicLink': '<a href="#" onclick="return false">Music</a>',
      'topMenuFunLink': '<a href="#" onclick="return true">Fun</a>',
      'topMenuBlogLink': '<a href="#" onclick="goBlog()">Blog</a>',
      'topMenuCodeLink': '<a href="#" onclick="return true"">Code</a>',
      'topMenuDeLink': '<a href="#" onclick="return false">De</a>',
      'topMenuGameLink': '<a href="#" onclick="return false">Game</a>',
      'topMenuWikiLink': '<a href="https://wiki.odicforcesounds.com/docs/">Wiki</a>',
      'topMenuArtLink': '<a href="https://wiki.odicforcesounds.com/art/">Art</a>'
    }
  ],
  'blogPage': 'index',
  'postBlogPage': [
    {
      'blogPagePicture': '<img  width="290px" height="290" src="https://path_of_shields.keybase.pub/Myth-illusions-Memories/SpaceTrip/WeCameInPeace5.jpg">',
      'blogPagePlayer': '<iframe style="border: 0 width: 50% height: 42px" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2560697642/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
      'blogPost': 'This website aims to share some <q>useful</q> (at least for me) coding, to help me to build this website you are reading, from scratch! <br><br> If You click in the Top-Left-Link called <b>Art</b> of this website, you will be redirected to the main content of this project, that was made using <a href="https://angular.io" target="_blank">Angular</a>, which is a <b>JavaScript</b> Framework. <br><br> Even if You dont believe, I made that website without learning JavaScript. Therefor, I made this website to learn <b>JavaScript</b> from scratch. This means, I will not use a single <q>Outside Code</q> to build it. <br><br>Naturally this is <b>false</b>, because each <b>function</b> each language have, is someone else <q>creation</q> as a <b>variable</b> of the Language it Self, and by this date the <b>code</b> still is in a very <q>poor</q> quality as it should as I am learning, to build a website like a <q>professional</q>, while experience is what makes the difference, which makes all the sense of the world, since I really believe in My Own <b>Slogan</b> that is in the foot of this page. <br><br> So lets talk a little about me: <b>Monkeys</b> always like to play with <q><strong>Code</strong></q>, while writting any kind of <q>text</q> aka <q>subject</q> is coding as well, not computers, but possibly, minds who wish to learn about that specific subject, as they did pay attention to!! <br> About that, I write a lot! Anyone can <b>read</b> my <b>Notes</b> of Facebook without Login In into Facebook :)<br> <br> So I decide to share them here, so you can click on them and read, while the technique to share them, will use the last approach I did learn with sucess using <b>JavaScript</b> '
    }
  ],
  'codePage': 'index',
  'codePageContent': [
    {
      'codeTopMessage': '<b>A B C D F G</b> <br> Introduction to Web Technologies,<br> sharing them while I learn them and use them here. <br> Check the Code, Follow my Dream!',
      'codeBtnLeft': '',
      'codeBtnRight': '',
      'codePageTrack': '<iframe style="border: 0 width: 50% height: 42px" src="https://bandcamp.com/EmbeddedPlayer/album=997256964/size=small/bgcol=333333/linkcol=0f91ff/track=398268745/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/spiritual-algorithm">Spiritual Algorithm by Odicforcesounds</a></iframe>',
      'CodePagePosts': [
        {
          'content': 'As much I understand <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>, we use it to serve us on how we organize <i>Data</i>, so we know how to <i> access </i> it when ever we wish to, and display it in our browsers in real-time. '
        },
        {
          'content': 'In <b>JavaScript</b> we organize data in <b>arrays[]</b>, which style is based in <a href="https://www.json.org/" target="_blank">JSON</a>. This way we can build our <b>Objects{}</b>. '
        },
        {
          'content': 'With our Data organized in <b>Objects{}</b>, we can access that data and display it inside <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a> tags using <b>JavaScript</b> <b>Functions()</b>. '
        },
        {
          'content': 'So when we see this page, we know most Data comes from a <b>JavaScript</b> <b>Objects.array[]</b>.'
        },
        {
          'content': '<b>HTML</b> "was the old way" to store data, but we still have <a href="https://www.xml.com/" target="_blank">XML</a> for Static Data, while with <b>JavaScript</b>, we can hide (ninja style) that data from the source page, and change it without reloading the full page again, or even "worst", we dont need to create a new <b>HTML</b> page and change the values we wish as a "new Link" to change the content! :)'
        },
        {
          'content': '<b>HTML</b> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html" target="_blank">Tags</a> can have [id="Value"] and [class="someotherValue"] to guarantee a way to access that particular <b>HTML</b> Tag, called proprieties with <b>CSS</b> or <b>JavaScript</b>, so we can manipulate it, which means: change data, behavior, forms and colors.'
        },
        {
          'content': 'Most web sites use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a> to store all data Tags positions and colors, while we can change those "on the fly" with <b>JavaScript</b> <b>Functions()</b>.'
        },
        {
          'content': 'With all of this concepts in Mind, we are ready to talk about my motivations to learn <b>JavaScript</b>. '
        },
        {
          'content': 'Is all about <b>Logic</b>! <br> <br> 1 + 1 = 1 OR 3 ( Tao / Dao ) ==> <small>Is what I call: <br> E.g. "The Wind of God" OR "the Way of God"</small>'
        },
        {
          'content': 'Fantasy[1] + Logic[1] = Application[1] ==> <br> E.g. Web Applications '
        },
        {
          'content': 'OM[1] + Spirit[1] = Expression[1] ==> <br> E.g. Human Behaviors '
        },
        {
          'content': '(objects) + (functions) = (data) ==> <br> E.g. Programming Languages'
        },
        {
          'content': 'Maybe we may think is curious that the sum of 2 <b>True</b> absolute and independent <q>realities</q> as being useful to the each others, which result in a new way to access data as a <q>Love relationship</q>, because without one of those, we cannot use none of them. Makes Sense?'
        },
        {
          'content': 'If we have no Data, we cannot organized information because we dont have it, therefor we dont feel that need, therefor we cannot use it in any case! '
        },
        {
          'content': 'A little abstraction: <br><br> Q: What is Data? <br> A: Everything that we are able to describe: <br> feel, see, hear, touch and taste! <br> Q: What can we do with Data? <br> A: Nothing more than use it or appreciate it.'
        },
        {
          'content': 'Q: What are <b>Objects{}</b>? <br>A: Everything we are able to describe.<br> Q: What can we do with <b>Objects{}</b>? <br> A: Nothing more that use them or appreciate them.'
        },
        {
          'content': 'Q: What are <b>Functions()</b>? <br> A: Any Logic Relationship we can do between Data or <b>Objects{}</b>. <br> Q: For What <b>Functions()</b> are used? <br> A: To Test Data and <b>Objects{}</b>! '
        },
        {
          'content': 'Q: What is a Test? <br> A: Is a way to ensure by Logic that Data is <b>Boolen</b>. <br> Q: For what tests are used? <br> A: To know if our <b>Boolen</b> value is <b> <b>True</b> </b> or <b>False</b>'
        },
        {
          'content': 'Q: What is a <b>Boolen</b> value? <br> A: Some value that can be <b>True</b> or <b>False</b>. <br> Q: How we know if our value is <b>True</b> or <b>False</b>? <br> A: If is <b>True</b>, it exist and we can access it, if is <b>False</b>, we cannot!'
        },
        {
          'content': 'If <b> I C U</b> & If <b>U C ME</b> & If <b>ALL C US</b>, then is <b>True</b> we exist? :P'
        },
        {
          'content': 'Now we can dive into the <a href="https://wiki.odicforcesounds.com/docs" target="_blank">Wiki</a> where I <b>Target</b> Everyone, which is in fact what I am going to develop using <b>JavaScript</b> and <a href="https://firebase.google.com" target="_blank">Firebase</a> to build it for me and for everyone who wish to see the code, as he/she shall participate in making this Mobil and Web Application possible, because it is written in Our World Wide Target <b>Eternal License</b>! '
        },
        {
          'content': 'Keep reading JavaScript <b>FUN</b>ctions! The main "problem" when starting to learn how to develop any programming language: <b>Functions</b>! <br><br> <q>We dont need to fully understand something to work with, use it for or experience it, since we dont have fully understanding how our body <il>Works</il> aka <i>Process all Information</i> to work as it should, while to understand we need to compare Data / Information</q>.'
        },
        {
          'content': 'I will try to explain functions, while I am still learning about them, so this text will have "two" pages. I <b>challenge</b> my self to be a <q>Dynamic Web-Page</q> in a clickable button with the [Next] option, to clean the actual page content and <i>Inject</i> the new <q>Page</q> content.'
        },
        {
          'content': 'In any way to create any kind of communication, we need to make relations between <b>Objects{}</b> or Data it self, using <b>Functions()</b> to find some "truth" in Data / Objects that exist or Not. '
        },
        {
          'content': 'So where we were? Oh yes.. How to understand and learn about <b>functions</b> in <b>JavaScript</b>. Well, if I ask my self, how do I write this code in a simplistic way?:'
        },
        {
          'content': '<q> The Brain needs to auto compare what is going to be expressed, while expressing, to find if what is expressed is <b>True</b> or <b>False</b></q> and deeper <b>Right</b> or <b>Wrong</b>. <br><br>This means what most everyone in the world know by experience: <q> We Learn from Our Errors, which means, everyone must do mistakes to learn or at least, to understand.</q>'
        },
        {
          'content': 'Browsers like <a href="https://www.chromium.org/getting-involved/download-chromium" target="_blank">Chromium</a> or <a href="https://www.mozilla.org/en-US/" target="_blank">Firefox</a> have a tool to <b>Inspect</b> websites code called Browser <a href="https://developer.mozilla.org/en-US/docs/Tools/Browser_Console" target="_blank">Console</a> by opening it using <q>F12</q>, therefor we use it in our localhost. But in this case, I can simply open the file using the keyword combination <q>CTRL+O</q> and refresh the page using <q>F5</q> to see how the page looks like and behave (test).'
        },
        {
          'content': 'Learning how to program is like learning how to behave, seeing others behaviors, defending those behaviors with an explanation. Education. I Like to COPY because is impossible to NOT copy anything we wish to learn.'
        },
        {
          'content': 'You have the right to copy or download all the content of my pages, since in fact everything I share is here (including the music) for you, free to Download, and with the content in your hard drive, you have the right to Mix, Change, and delete? LoL ...  since that part is not included in the <a href="https://odicforcesounds.com/#/license" target="_blank">License</a>. '
        },
        {
          'content': 'First July of 2019 and I have a lot of work to do, till the end of this year. I read and re-read and re-read again. The cycling redundant process of studing to understand anything is what we expect as a path to learn any subject in this Long-Short life experience we all live, and lets assume, <b>JavaScript</b> is like any other programming language, a way to <q>Manipulate</q> static data to give us a <q>Sensation</q> of <q>Natural Life Reaction</q> that exist in any <q>Living Body</q> which is a <q> Informational State</q>, that normally reacts in the moment we <q>TEST</q> what we wish to find if what we are searching for, is <b>defined</b>.'
        },
        {
          'content': ' <b>Noob confession</b>: I pass all my life trying to know / find the limits of any <q>Programming Language</q>... and in the middle-time, I discover that I define the limits, which is super-very-obvious to most everyone, who wish to define the reason to use <b> Programming Languages</b>. LoL'
        },
        {
          'content': 'By that principle, if I define the limits where any <q>Programming Language</q> have no limits, I <b>define</b> what I need to learn, which are my limits!! '
        },
        {
          'content': 'Q: So what each need to learn to learn what each desire to learn? <br>  A: Each needs to Learn how To <b>define</b> the limits of <q>Life Interaction</q> with... <br> A: with Any <q>Language</q> he/she connects with, where each, try to find each one <b>truth</b> of what each did <b>Define</b> as their own limits, in other <b>Objects</b> aka with the <b>Class</b> person that is a <b>Class</b> of <q>living organisms</q> .'
        },
        {
          'content': 'So lets talk about the WEB! <br> The Web is DATA aka metadata ( confirmation of data ) and DATA have several <b>types</b> of it self. Numbers, Booleans, Strings, Arrays, Objects, Class\'s and many other fragments of DATA structures (ways of organizing data) aka <b>knowledge</b> that can be used in a functional relationship in reality to find the <b>truth</b> of it self. '
        },
        {
          'content': 'As you may know, <b>Truth</b> can only exist in a relationship of two or more <q>persons</q> or <q>functions</q> that try to find some <b>truth</b> in what they wish to define as truth, which means that truth is only the confirmation of others information. aka <b>metadata</b>. '
        },
        {
          'content': 'So I have no Choice to assume that <b>JavaScript</b> is good to <q>Hide</q> or automate how in this case, the page behaves, but not really to share (expand) DATA! Therefor I need to dedicate some Time to organize a XML book to give more <b>metadata</b> to <a href="https://www.google.com/" target="_blank">Google</a> Index-Bots (records) to expand more my Manifest!!'
        },
        {
          'content': 'The Coolest detail is: <b>Android</b> make a lot of use of <b>XML</b> technology, which will help me to simplify how this website will work. Maybe as a bridge to talk with Web clients [Computers] and Our Own Mobil Application clients that we need to define to build this challenge!! '
        },
        {
          'content': 'Maybe is not a bad idea to organize one or more <b>XML</b> books to serve all domains of this project. Till now (1): This subdomain, since everything is hosted in GitHub :)  '
        },
        {
          'content': 'Anyway I made a Google search to compare <b>XML</b> vs <b>JSON</b> and I did find <a href="https://www.javatpoint.com/json-vs-xml" target="_blank">this</a> link, where we can read what we should use in our needs! To my Needs and to this Project-Page Needs, we need Both! So I will define some files for many proposes of this project! By the way, <b>Github</b> have awesome shares from awesome group of people who made the Web as it is! <b><a href="https://github.com/w3c/web-roadmaps" target="_blank">W3C</a></b>, which are who define the Web, and they share everything we need to help us in this choice as that link above. I have no experience or enough knowledge of <q>Project Design</q> but lets say, since XML is good for documentation and asked by Google to index page content, XML is useful to that propose, while is useful as well for Mobil Applications.'
        },
        {
          'content': 'Mr.JSON is part of JS World as XML. I need to follow the easy funny part of what is already defined by the <q>Oracle</q>: <a href="https://docs.oracle.com/en/database/oracle/oracle-database/12.2/adjsn/lot.html" target="_blank">JSON</a> !! <br><br> To continue... :p '
        }
      ]
    }
  ],
  'dePage': 'index',
  // DESIGN AND DEVELOP
  'postDePage': [

  ],
  'funPage': 'index',
  // FUN
  'postFunPage': [
    {
      'subtitleFunPage': 'What is Not a Function?',
      'introFunPage': '<b>A B C D F G</b> <br> Introduction to Functions!',
      'playerFunPage': '<iframe style="border: 0 width: 50% height: 42px" src="https://bandcamp.com/EmbeddedPlayer/album=3048830850/size=small/bgcol=333333/linkcol=0f91ff/track=2451716309/transparent=true/" seamless><a href="http://odicforcesounds.bandcamp.com/album/emotional-signals">Emotional Signals by Odicforcesounds</a></iframe>',
      'postFunPage': '<h2> - Q: You know what is Fun?</h2 <br> - A: Yes, Actions! <br><br> % Master: So type those <b>codes</b> with your fingers which are the <b>DOM</b> Objects, the Browser can interpret (without a lot mistakes (compared to humans :P)), and see ( test ) their behaviors, while you learn!'
    }
  ],
  'gamePage': 'index',
  // GAME PAGE CONTENT APPLICATION
  'postGamePage': [

  ],
  'musicPage': 'index',
  // MUSIC PAGE CONTENT
  'postMusicPage': [

  ],
  // SOCIAL MEDIA
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
    },
    {
      'description': 'GitHub',
      'link': 'https://github.com/rakzhodekams'
    }
  ],
  // SLOGAN OF TIME AND CONSCIENCE
  'slogan': 'If Time is build within our selfs, then Time is our selfs, as result of Time it self.'
}

// TOP MENU LINKS
// LOGO
let taoLogo = document.getElementById('ofslogo')
taoLogo.innerHTML = spa.topMenu[0].logo
// ART TOP MENU LINK
let ofsArt = document.getElementById('ofsart')
ofsArt.innerHTML = spa.topMenu[0].topMenuArtLink
// BLOG TOP MENU LINK
let ofsBlog = document.getElementById('ofsblog')
ofsBlog.innerHTML = spa.topMenu[0].topMenuBlogLink

document.onclick = inputChange

function inputChange(e) {
  let blogPostPlayer = document.getElementById('player1')
  let topMessage = document.getElementById('topMessage')
  let pictureBlogPost = document.getElementById('picture')
  let noteBlogPost = document.getElementById('pnote')
  let codeBlogPost = document.getElementById('pcode1')
  let cBP = codeBlogPost.innerHTML
  let cBPConntent = spa.postBlogPage[0].blogPost
  let bpInsert = blogPostPlayer.innerHTML
  let bpPlayer = spa.postBlogPage[0].blogPagePlayer
  let bptmInsert = topMessage.innerHTML
  let bptmContent = spa.postBlogPage[0].codePageContent[0].codeTopMessage
  let bpPictureInsert = pictureBlogPost.innerHTML
  let bpPictureContent = spa.postBlogPage[0].pictureBlogPost
  let nBP = noteBlogPost.innerHTML
  let nBPContent = spa.globalNotePage
  bpInsert = bpPlayer
  bptmInsert = bptmContent
  bpPictureInsert = bpPictureContent
  nBP = nBPContent
  cBP = cBPConntent
}

let ofscode = document.getElementById('ofscode')
ofscode.innerHTML = spa.topMenu[0].topMenuCodeLink

let ofsdev = document.getElementById('ofsdev')
ofsdev.innerHTML = spa.topMenu[0].topMenuDeLink

let ofsfun = document.getElementById('ofsfun')
ofsfun.innerHTML = spa.topMenu[0].topMenuFunLink

let ofsgame = document.getElementById('ofsgame')
ofsgame.innerHTML = spa.topMenu[0].topMenuGameLink

let ofswiki = document.getElementById('ofswiki')
ofswiki.innerHTML = spa.topMenu[0].topMenuWikiLink

// SOCIAL MEDIA LINKS
document.getElementById('blogspot').innerHTML = '<a href=' + spa.social_media[5].link + ' ' + 'target=_blank>Blogspot</a>'
document.getElementById('facebook').innerHTML = '<a href=' + spa.social_media[0].link + ' ' + 'target=_blank>Facebook</a>'
document.getElementById('twitter').innerHTML = '<a href=' + spa.social_media[1].link + ' ' + 'target=_blank>Twitter</a>'
document.getElementById('tumblr').innerHTML = '<a href=' + spa.social_media[2].link + ' ' + 'target=_blank>Tumblr</a>'
document.getElementById('instagram').innerHTML = '<a href=' + spa.social_media[3].link + ' ' + 'target=_blank>Instagram</a>'
document.getElementById('mastodon').innerHTML = '<a href=' + spa.social_media[4].link + ' ' + 'target=_blank>Mastodon</a>'

// SLOGAN
document.getElementById('slogan').innerHTML = spa.slogan

// Functions!
