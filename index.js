// CAPSLOCK 
// window.addEventListener('keyup',event =>{
// var caps = event.getModifierState('CapsLock');
// if(caps){
//     document.getElementById('alert').innerHTML='WARNING! Capslock on';
// }else{
//     document.getElementById('alert').innerHTML='WARNING! Capslock off';
// }
// })
// Space validation
var space = /\s/g;
var alert = document.getElementById('alert');
function white(elem){
    var isCheck = space.test(elem);
    if(isCheck){
        alert.innerHTML='Space is Not-allow';
    }else{
        alert.innerHTML=' ';
    }
}

// more validation in password
function passCheck(data){
    var passClass = document.getElementsByClassName('password-check');
    const lowercase = new RegExp('(?=.*[a-z])');
    const uppercase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const SpecialChar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightChar = new RegExp('(?=.{8,})');

    if(eightChar.test(data)){
        passClass[0].style.color='#fff';
        }else{
          passClass[0].style.color='grey';
        }
        
        if(lowercase.test(data)){
            passClass[1].style.color='#fff';
            }else{
              passClass[1].style.color='grey';
            }
        
        if(uppercase.test(data)){
            passClass[2].style.color='#fff';
            }else{
              passClass[2].style.color='grey';
            }
        
        if(number.test(data)){
            passClass[3].style.color='#fff';
            }else{
              passClass[3].style.color='grey';
            }
        
        if(SpecialChar.test(data)){
            passClass[4].style.color='#fff';
            }else{
              passClass[4].style.color='grey';
            }
}

var pass = document.getElementById('pass');
var flag =1; // 1 -> no error | 0 -> error 
function check(elem){
    if(elem.value.length > 0){
        if(elem.value != pass.value){
            document.getElementById('alert').innerText='Please enter the correct value';
            flag = 0;
        }else{
            document.getElementById('alert').innerText=" ";
            flag = 1;
        }
    }else{
        document.getElementById('alert').innerText = 'plese enter confirm password'
        flag = 0;
        
    }
    
}

function validate(){
    if(flag == 1){
        return true;
    }else{
        return false;
    }
}