var social = {
    bandcamp: '',
    blogspot: '<a target="_blank" href="https://odicforcesounds.blogspot.com/"><img width="18px" src="../../icons/icons8-blogger-48.png"></a>',
    facebook: '',
    github: '',
    gitlab: '<a target="_blank" href="https://gitlab.com/OdicforceSounds"><img width="18px" src="../../icons/icons8-gitlab-48.png"></a>',
    instagram: '',
    keybase: '',
    linkedin: '<a target="_blank" href="https://pt.linkedin.com/in/rakzhodekams"><img width="18px" src="../../icons/icons8-linkedin-48.png"></a>',
    mixcloud: ',
    reddit: '<a target="_blank" href="https://www.reddit.com/user/odicforcesounds/"><img width="18px" src="../../icons/icons8-reddit-48.png"></a>',
    soundcloud: '',
    spotify: '',
    tumblr: '',
    youtube: '',
};
  
function populate(){
    for (var property in social) {
        if (social.hasOwnProperty(property)) {
            var target = document.getElementById(property);
            if ( target !== null ) {
            target.innerHTML = social[property];
            }
        }
    }
}populate();
  
