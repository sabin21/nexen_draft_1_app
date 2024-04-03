const btnSitemapClose = document.querySelector('.btn-sitemap-close');
const btnSitemapOpen = document.querySelector('.btn-sitemap-open');
const pageOverlay = document.querySelector('.back-overlay');

const pageOverlayShow = function(){
  pageOverlay.classList.add('active');
}
const pageOverlayHide = function(){
  pageOverlay.classList.remove('active');
}

btnSitemapClose.addEventListener('click', function(){
  document.body.classList.remove('scrollstop');
  document.querySelector('.sitemap-wrap').classList.remove('active');
  pageOverlayHide();
});

btnSitemapOpen.addEventListener('click', function(){
  document.body.classList.add('scrollstop');
  document.querySelector('.sitemap-wrap').classList.add('active');
  pageOverlayShow();
});

const btns = document.querySelectorAll('.nav-btn-item');

btns.forEach(function(btn, i){
  btn.addEventListener('mouseover', function(){
    btn.children[1].classList.add('active');
    document.querySelector('.main').classList.add('move');
  });
  btn.addEventListener('mouseleave', function(){
    btn.children[1].classList.remove('active');
    document.querySelector('.main').classList.remove('move');
  });
});