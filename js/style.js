
// new WOW().init();

if(!navigator.userAgent.match(/(iPhone|iPod|Android)/)){new WOW().init();}
// $(".gallery").modaal({
//   type: 'image'
//  });

$(function(){
  // ページのロード完了時にローディング画面をフェードアウト
$(window).on('load', function() {
  $(".page-loader").delay(500).fadeOut(600);
});
  
// ページのロードが完了しない場合でも10秒たったら強制的にローディング画面をフェードアウト
setTimeout('stoploading()', 10000); 
function stoploading() {
  $(".page-loader").fadeOut('fast');
}

});
 


$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 200; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


$(document).ready(function() {
   $('.drawer').drawer();
   $('.toggle-hd , .drawer-nav').on('click', function() {
    $('.drawer').drawer('close');
  });

});

$(function(){
  // ボタンを表示するタイミング
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 500) { /* 500以上スクロールされた時 */
      $(".floating").fadeIn("fast"); /* 表示 */
    } else {
      $(".floating").fadeOut("fast"); /* 非表示 */
    }
  });

  // ここでスムーススクロール
  $(".floating").click(function(){
    $('body,html').animate({
      scrollTop: 0 /* 一番上まで移動 */
    }, 500, 'swing');
    return false;
  });
});


$(document).ready(function () {

  $('#js-form').submit(function (event) {
    var formData = $('#js-form').serialize();
    let $form = $('#js-form')
    $.ajax({
      url: $form.attr('action'),
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したとき
          $(".contact-item").slideUp()
          // $("#js-success").slideDown();
          // $(".-submit").fadeOut();
          // window.location.href = "thanks.html";
        },
        200: function () {
          $(".contact-item").slideUp()
          // $(".#js-error").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

// let $submit = $('#js-submit')
// $('#js-form input , #js-form textarea').on('change' , function(){
//   if(
//     $('#js-form input[type="text"]').val() !== "" &&
//     $('#js-form input[type="email"]').val() !== "" &&
//     $('#js-form input[name="entry.1781035130"]').prop('checked') === true
//   ){
//     $submit.prop('disabled' , false)
//     $submit.addClass('-active')
//   }else{
//     $submit.prop('disabled' , true)
//     $submit.removeClass('-active')
//   }

// })
 
