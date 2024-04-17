var lM = document.getElementById("loginModal");
var rM = document.getElementById("registrationModal");
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("openBtn");
var ll = [];

const getLocalStorage = function(){
    const todoStorage = localStorage.getItem('list');
    if (todoStorage === 'undefined' || todoStorage === null){
        list = [];
    }
    else{
        list = JSON.parse(todoStorage);
    }
}

const setLocalStorage = function(list,l){
    localStorage.setItem(list, JSON.stringify(l));
}

getLocalStorage();

function opn() {
    document.getElementById('registrationModal').style.display = "block";
}

function logCls() {
    document.getElementById('loginModal').style.display = "none";
}
function regCls() {
    document.getElementById('registrationModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == lM) {
        lM.style.display = "none";
    }
    if (event.target == rM) {
        rM.style.display = "none";
    }
}

function Regis(){
    document.getElementById('loginModal').style.display = "none";
    document.getElementById('registrationModal').style.display = "block";
}

function logIn() {
    document.getElementById('loginModal').style.display = "block";
    document.getElementById('registrationModal').style.display = "none";
}

function regSub(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var cnfpass = document.getElementById('cnfpass').value;
    var mobile = document.getElementById('mobile').value;
    var gender ="";
    var city = document.getElementById('city').value;
    var state = document.getElementById('dropdown').value;
    

    if(document.getElementById('radd1').checked == true) {   
        gender = "male";   
    } 
    else if(document.getElementById('radd1').checked == true){
        gender = "female";
    }
    else {  
        gender = "";
    }  

    if(name ===""){
        alert("Name must be filled out");
        return false;
    }
    else if(email===""){
        alert("Email must be filled out");
        return false;
    }
    else if(password === ""){
        alert("Password must be filled out");
        return false;
    }
    else if(cnfpass === ""){
        alert("Confirm Password must be filled out");
        return false;
    }
    else if(password !== cnfpass){
        alert("Password & Confirm Password must be same");
        return false;
    }
    else if(mobile ===""){
        alert("Mobile number must be filled out");
        return false;
    }
    else if(gender === ""){
        alert("Gender must be selected");
        return false;
    }
    else if(city===""){
        alert("City must be filled out");
        return false;
    }
    else if(state === ""){
        alert("Select the State");
        return false;
    }
    else{
        ll.push(name);
        ll.push(email);
        ll.push(password);
        setLocalStorage("list",ll);
        alert("Registration Successful!")
    }
}

function logSub(){
    var logemail = document.getElementById('logemail').value;
    var logpass = document.getElementById('logpass').value;

    if(logemail === ll[1]){
        if(logpass === ll[2]){
            alert("Login Successful!!");
            return false;
        }
        else if(logpass === ""){
            alert("Enter password");
            return false;
        }
        else{
            alert("Invalid Password!!");
            return false;
        }
    }
    else{
        alert("Email not registered");
        return false;
    }
}