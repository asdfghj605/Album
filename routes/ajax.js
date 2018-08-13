
window.onload=function(){
    var email = document.getElementById('email');
    var passwd = document.getElementById('passwd');
    var nickname = document.getElementById('nickname');
    var send = document.getElementById('send');  
    var show = document.getElementById('show');
    var show2 = document.getElementById('show2');

    /* 中文字 */
    var re = /[\u4e00-\u9fa5]/g;
    /* 特殊符號 */
    var sp = /[^\w]/g;
    /* 非英文字 */
    var en = /[^a-zA-Z]/g;


   email.onblur=function(){
        if(re.test(this.value)){
            show.innerHTML='不能打中文';
        }

        else if(this.value==""){
            show.innerHTML='不能為空值';
        }

        else if(name.value.length<8){
           show.innerHTML='請輸入8個以上字符';
        }

        else if(sp.test(this.value)){
            show.innerHTML='不能使用特殊符號';
        }
    }


    passwd.onblur=function(){
        if(this.value==""){
            show2.innerHTML='不能為空值';
        }
    }

/* AJAX */

    send.addEventListener('click',function(){
        
        var emailVal = email.value;
        var passwdVal = passwd.value;
        var nickVal = nickname.value;
        var xhr = new XMLHttpRequest();
        xhr.open('post','/signup');
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        var data = [
            'account:'+ emailVal,
            'password:'+ passwdVal,
            'nickname:'+ nickVal
        ]

        xhr.send(data);

        xhr.onload = function(){
            console.log(xhr.responseText);
        }
    });

}

