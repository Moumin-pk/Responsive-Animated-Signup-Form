// CAPSLOCK 
window.addEventListener('keyup',event =>{
var caps = event.getModifierState('CapsLock');
if(caps){
    document.getElementById('alert').innerHTML='WARNING! Capslock on';
}else{
    document.getElementById('alert').innerHTML='WARNING! Capslock off';
}
})

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