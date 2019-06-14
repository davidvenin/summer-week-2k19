import 'normalize.css';
import 'flexboxgrid';
import AOS from 'aos';
import lottie from 'lottie-web';
import 'aos/dist/aos.css';

import youtube from '../assets/animations/youtube.json';
import facebook from '../assets/animations/facebook.json';
import twitter from '../assets/animations/twitter.json';
import linkedin from '../assets/animations/linkedin.json';

document.addEventListener('DOMContentLoaded', () => {
  const socials = [
    {name: 'youtube', data: youtube},
    {name: 'facebook', data: facebook},
    {name: 'linkedin', data: linkedin},
    {name: 'twitter', data: twitter},
  ];

  AOS.init();

  for(let i = 0; i < socials.length; i++) {
    lottie.loadAnimation({
      container: document.querySelector(`#${socials[i].name}`), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: socials[i].data, // the path to the animation json
    });
  }

});
