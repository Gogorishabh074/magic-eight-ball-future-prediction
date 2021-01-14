
function usertake(){
    let username = document.getElementById("user").value;
    localStorage.setItem('name' , username);
    let userNameValue = (username != "") ? "Hello " + username : "Hello Almighty, It will be easy for me if you will enter your name.";
    document.getElementById('messege').innerHTML = userNameValue;
    document.getElementById('fortune-btn').style.display = "block";
}

function prediction(){
let randomNumber = Math.floor(Math.random()*8);
let eightBall = "";
eightBall = randomNumber;
let magicEightBall;
switch(eightBall){
    case 0: 
       magicEightBall = "It is certain";
       break;
    case 1 : 
       magicEightBall = "It is decidedly so";
       break;
    case 2 :
        magicEightBall = "Reply hazy try again";
        break;
    case 3 : 
        magicEightBall = "Cannot predict now"; 
        break;
    case 4 :
        magicEightBall = 'Do not count on it';
        break; 
    case 5 :
        magicEightBall =  'My sources say no';
        break;
    case 6 :
        magicEightBall =  'Outlook not so good'
        break;
    case 7 : 
        magicEightBall = 'Signs point to yes';
        break;   
}

document.getElementById('fortune-prediction').innerHTML = magicEightBall;
document.getElementById('questions').style.display = "none";
}

function load() {
    document.getElementById("userhead").innerHTML = "Enter Your Question Mr." 
    + localStorage.getItem('name');
}