$(function(){

    $('.logo').click(function(){
        location.href = "index.html"
    })
    $('.menu_list').click(function(){
        location.href = "index.html"
    })
    $('.news_block').click(function(){
        location.href = "news_page.html"
    })
    $('.login_open_bttn').click(function(){
        location.href = "login.html"
    })



    // Mobile menu
    $('.menu_open').click(function(){
        $('.menu').css('display', 'block')
        $('.menu').animate({left: '123px'}, 200)
        $('.menu_background').fadeIn(600)
        $('.close_mobile_menu').css('display', 'block')
    })
    $('.close_mobile_menu').click(function(){closeMenu()})

    function closeMenu() {
        $('.menu').animate({left: '500px'}, 200)
        $('.menu_background').fadeOut(100)
        $('.close_mobile_menu').css('display', 'none')
    }

    $('.menu_background').click(function(){closeMenu()})


    var userOutCheck = false;
    $('.arrow_down').click(function(){
        if(userOutCheck == false) {
            $('.arrow_down').css("transform", "rotate(180deg)")
            userOutCheck = true
            $('.user_out').slideDown()
        } else {
            $('.arrow_down').css("transform", "rotate(0deg)")
            userOutCheck = false
            $('.user_out').slideUp()
        }
    })


    $('.views_icon').mouseover(function(){ $('.views_count').slideDown(); }) // Просмотры статьи
    $('.views_icon').mouseout(function(){ $('.views_count').slideUp() })     // Просмотры статьи


    $('.comment_write').focus(function(){ // Написать комментарий
        $('.send_comment').slideDown()
        po()
    })
    $('.comment_write').blur(function(){
        $('.send_comment').slideUp()
    })
   
    $('.comment_write').keyup(po)
    function po (){
    setTimeout(function(){
    if($('.comment_write').val() == "") {
        $(".send_comment").css("background-color", "#54536c")
    } else {
        $(".send_comment").css("background-color", "#3e37a4")
    }}, 50)}
    autosize($('.comment_write'));

$('.send_comment').click(function(){
    $('.comment_write').val("")
    console.log("hvckjgghc")
})



$('.select_login_bttn').click(function(){
    $('.register_form').toggle()
    $('.login_form').toggle()
})


})