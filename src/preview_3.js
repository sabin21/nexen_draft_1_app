import 'swiper/css';
import 'swiper/css/navigation';

import '../public/css/normalize.css';
import '../public/css/draft_common.scss';
import '../public/css/preview.scss';


import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
Swiper.use([Autoplay, Pagination, Navigation]);

//---------------------------

const previewSwiper = new Swiper('.preview-swiper', {
  speed: 400,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//---------------------------





