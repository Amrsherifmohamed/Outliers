// jQuery(function ($) {

//   $(".sidebar-dropdown > a").click(function() {
// $(".sidebar-submenu").slideUp(200);
// if (
//   $(this)
//     .parent()
//     .hasClass("active")
// ) {
//   $(".sidebar-dropdown").removeClass("active");
//   $(this)
//     .parent()
//     .removeClass("active");
// } else {
//   $(".sidebar-dropdown").removeClass("active");
//   $(this)
//     .next(".sidebar-submenu")
//     .slideDown(200);
//   $(this)
//     .parent()
//     .addClass("active");
// }
// });

// $("#close-sidebar").click(function() {
// $(".page-wrapper").removeClass("toggled");
// });
// $("#show-sidebar").click(function() {
// $(".page-wrapper").addClass("toggled");
// });




// });
// $(function () {
//   $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function(event) {
//        var $panel = $(this).closest('.panel-google-plus');
//            $comment = $panel.find('.panel-google-plus-comment');

//        $comment.find('.btn:first-child').addClass('disabled');
//        $comment.find('textarea').val('');

//        $panel.toggleClass('panel-google-plus-show-comment');

//        if ($panel.hasClass('panel-google-plus-show-comment')) {
//            $comment.find('textarea').focus();
//        }
//   });
//   $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function(event) {
//        var $comment = $(this).closest('.panel-google-plus-comment');

//        $comment.find('button[type="submit"]').addClass('disabled');
//        if ($(this).val().length >= 1) {
//            $comment.find('button[type="submit"]').removeClass('disabled');
//        }
//   });
// });

// $.backstretch("img/login-bg.jpg", {
//   speed: 500
// });

function reloadPage(){
  location.reload(true);
}
