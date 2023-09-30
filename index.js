$('#Font').on('change',function(){
    $('h3, .caps-switch').css("font-family",$(this).val() + ', sans-serif')
})
$('.caps-switch').on('click',function(){
    $('h3, .caps-switch').toggleClass('uppercase');
})
$('#Background').on('change',function(){
    if ($(this).val().includes("mp4")){
        $('video').attr('src', $(this).val())
        $('video').removeAttr('hidden');
    }
    else {
        $('video').attr('hidden','hidden');
        if ($(this).val() == "bg2.jpg"){
            document.body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ),url(bg2.jpg)';
            $('body').css({
                "background-position":"0 -30rem",
                "background-size":"cover"
            })
        }
        if ($(this).val() == "bg.png"){
            document.body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ),url(bg.png)';
            $('body').css({
                "background-position":"0 0",
                "background-size":"cover"
            })
        }
        if ($(this).val() == "bg3.jpg"){
            document.body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(bg3.jpg)';
            $('body').css({
                "background-position":"0 -50rem",
                "background-size":"cover"
            })
        }
        if ($(this).val() == "bg4.jpg"){
            document.body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(bg4.jpg)';
            $('body').css({
                "background-position":"0 0rem",
                "background-size":"cover"
            })
        }
    }
})