$(document).ready(function(){
    setTimeout(() => {
        $('.preloader').fadeOut('slow')
    }, 2100);

    $('.home .talk').click(function(){
        $('.layer').fadeIn('slow')
    })
    
    $('.home .cv').click(function(){
        window.open("https://github.com/hakim4web/cv/raw/main/pdf/cv_2023.pdf")
    })

    $('.close').click(function(){
        $('.layer').fadeOut('slow')
    })

    $('.sendmsg').click(function(){
        check();
    })
})


function check() {
    switch (0) {
        case $('.email').val().length:
            alert('Enter your email please');
            break;

        case $('.message').val().length:
            alert('Say something ;)');
            break;

        default:
            send();
            break;
    }
}

function send() {

    $('.mini-loader').fadeIn(0)
    
    var xh = new XMLHttpRequest();
    var msg = document.getElementsByClassName('message')[0].value;
    var email = document.getElementsByClassName('email')[0].value;
    var data = 'email=' + email + '&msg=' + msg;

    xh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var rsp = this.responseText;
            $('.mini-loader').fadeOut(0,function(){
                document.getElementsByClassName('res')[0].innerHTML = rsp
            })
        }
    }
    xh.open("POST", "http://localhost/mail/index.php", true);
    xh.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xh.send(data);
}
