new WOW().init();

const btn = document.querySelector('.drawer-icon');
const content = document.querySelector('.drawer-content');
const contentLink = document.querySelectorAll('.drawer-content__link');
const drawerLink = document.querySelector('.drawer-logo--link');
const contactButton = document.querySelectorAll('.contactBtn');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    content.classList.toggle('slide');
    });


    // 各drawer-content__linkにクリックイベントリスナーを追加
contentLink.forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault(); // デフォルトのリンク動作を無効にする
      const targetId = link.getAttribute('href'); // リンクのhref属性からターゲットIDを取得
      const targetElement = document.querySelector(targetId); // ターゲットIDに対応する要素を取得
      
      // ドロワーを閉じる
      btn.classList.remove('open');
      content.classList.remove('slide');
      
      // スムーズスクロール
      targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


contactButton.forEach(button => {
  button.addEventListener('click', function() {
      // contact IDを持つ要素までスクロール
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      
      // ドロワーを閉じる
      btn.classList.remove('open');
      content.classList.remove('slide');
  });
});

const swiper1 = new Swiper('.swiper', {
// Optional parameters
loop: true,
autoplay:{
    delay: 3000,
    disableOnInteraction: false,
},

effect:'fade',
speed:3000,

});

const swiper2 = new Swiper(".swiper-voice", {
  centeredSlides: true, // 1枚目のスライドを中央にする
  slidesPerView: 2, // デフォルトのスライドの表示枚数
  spaceBetween: 30, // デフォルトのスライド間のスペース

  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // ループ
  loop: true,
  // 自動再生
  autoplay: {
    delay: 2500, // スライドの切り替え間隔（ミリ秒）
    disableOnInteraction: false, // ユーザーの操作後も自動再生を続けるか
  },

  breakpoints: {
    1280: {
      slidesPerView: 4, // 1280px以上の画面幅の場合のスライドの表示枚数
      spaceBetween: 40, // 1280px以上の画面幅の場合のスライド間のスペース
    },
    768: {
      slidesPerView: 4, // 768px以上の画面幅の場合のスライドの表示枚数
      spaceBetween: 40, // 768px以上の画面幅の場合のスライド間のスペース
    },
  }
});


// スクロール検知
jQuery(window).on("scroll", function() {

// トップから300px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {

// is-showクラスをつける
  jQuery('.to-top').addClass( 'is-show' );
  } else {

// 300pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
  });

  // スムーススクロール
jQuery('a[href^="#"]').on('click',function(){

  var header = jQuery('.header').innerHeight();
  var id= jQuery(this).attr('href');
  var position = 0;
  if ( id != '#'){
      position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
  scrollTop:position
  } ,
  500);
  });

  const contactButtons = document.querySelectorAll('.contactBtn');

  contactButtons.forEach(button => {
    button.addEventListener('click', function() {
        // contact IDを持つ要素までスクロール
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});
