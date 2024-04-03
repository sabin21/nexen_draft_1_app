import 'swiper/css';
import 'swiper/css/pagination';

import '../public/css/normalize.css';
import '../public/css/draft_common.scss';
import '../public/css/draft_1_0.scss';
import '../public/css/nav.scss';

import './nav_1.js';

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

//---------------------------





