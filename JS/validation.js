
let submitBtn=document.getElementById("submit");

let error_e= document.getElementById("error_e");
let error_p= document.getElementById("error_p");
let error_n= document.getElementById("error_n");

 
let regname='admin';
let regpwd=12345;

submitBtn.addEventListener('click', (e)=>{

    let username= document.getElementById("username");
    let pwd= document.getElementById("pwd");
    let message =(alertmessage)=>{
        alert(alertmessage);
    }
    validateForm(username.value, pwd.value, message)
})
let validateForm=(name,password,callback)=>{
 if(name==""){
     callback("Please enter username");
     return false;
 }else if(name!=regname){
    callback("Incorrect username");
 }else if(password==""){
    callback("Please enter password");
 }else if(password!=regpwd){
    callback("Incorrect password");
 }else{
    callback("Form Validated");
 }
}