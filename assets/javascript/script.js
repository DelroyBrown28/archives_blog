$(document).ready(function () {


    $('.race_post').click(function () {
        $('.blog_contents').fadeOut('fast', function () {
            $('.race_article').fadeIn();
        })
    })

    $('.back_button').click(function () {
        $('.race_article').fadeOut('fast', function () {
            $('.blog_contents').fadeIn();
        })
    })
})