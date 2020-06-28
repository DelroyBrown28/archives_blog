$(document).ready(function () {



    // Takes you to "Go back to Africa" article
    $('.back_to_africa').click(function () {
        $('.blog_posts').animate({
            left: '200px',
            opacity: '0'
        }, function () {
            $('.padding_wrap').fadeOut('fast', function () {
                $('.backToAfrica_wrap').fadeIn('slow', function () {
                    $('.to_articles_btn').animate({
                        opacity: '1'
                    }, 100)
                })
            });
        })

    })


    // Takes you back to all articles
    $('.to_articles_btn').click(function () {
        $('.backToAfrica_wrap').fadeOut('fast', function () {
            $('.padding_wrap').fadeIn('slow', function () {
                $('.blog_posts').animate({
                    left: '0'
                }, function () {
                    $('.blog_posts').animate({
                        opacity: '1'
                    }, 100)
                })
            });
        });
    })

    // Article image enlarge

    $('.in_blog_image').click(function () {
        $('.backToAfrica_article').animate({
            opacity: '0'
        }, function () {
            $('.popup_article_image').animate({
                opacity: '1'
            }, function () {
                $('.close_btn').animate({
                    opacity: '1'
                })
            })
        })
    })


    // Closes article image

    $('.close_btn').click(function () {
        $('.popup_article_image').animate({
            opacity: '0'
        }, function () {
            $('.backToAfrica_article').animate({
                opacity: '1'
            })
        })
    })

});