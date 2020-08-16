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