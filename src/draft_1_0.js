import 'swiper/css';
import 'swiper/css/pagination';

import '../public/css/normalize.css';
import '../public/css/draft_common.scss';
import '../public/css/draft_1_0.scss';

import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
Swiper.use([Autoplay, Pagination]);
//---------------------------

const mainBanner = new Swiper('.banner-wrap', {
  speed: 400,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const btns = document.querySelectorAll('.nav-btn-item');

btns.forEach(function(btn, idx){
  btn.addEventListener('mouseover', function(){
    document.querySelector('.sub-menu-wrap').classList.add('active');
    document.querySelector('.main').classList.add('move');
  });
  btn.addEventListener('mouseleave', function(){
    document.querySelector('.sub-menu-wrap').classList.remove('active');
    document.querySelector('.main').classList.remove('move');
  });
})




