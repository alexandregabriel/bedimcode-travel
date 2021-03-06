/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}



/*===== MENU HIDDEN =====*/
if (navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu')

  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const header = document.getElementById('header');

  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
  if(videoFile.paused){
    //Play video
    videoFile.play()

    // We change the icon
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  }else{
    // Pause video
    videoFile.pause()

    //We change the icon
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
  }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
  //Video ends, icon change
  videoIcon.classList.remove('ri-pause-line')
  videoIcon.classList.add('ri-play-line')
}
//ended, whe the video ends
videoFile.addEventListener('ended', finalVideo)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== SCROLL REVEAL ANIMATION ====================*/


/*==================== DARK LIGHT THEME ====================*/ 


// Previously selected topic (if user selected)


// We obtain the current theme that the interface has by validating the dark-theme class


// We validate if the user previously chose a topic


// Activate / deactivate the theme manually with the button
