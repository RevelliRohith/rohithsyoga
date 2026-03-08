/* ---------------- PROGRAMS ---------------- */

const programs = [
"Beginner Yoga Training",
"Flexibility Development",
"Advanced Yogasana",
"Competition Preparation",
"Mudgar Training",
"Karasamu Training"
];

const programsContainer = document.querySelector(".programs-container");

if(programsContainer){
programs.forEach(program => {

const card = document.createElement("div");
card.classList.add("card");
card.textContent = program;

programsContainer.appendChild(card);

});
}


/* ---------------- GALLERY ---------------- */

const images = [
"coach.jpeg",
"yoga2.jpeg",
"mudgar1.jpeg",
"judge.jpeg"
];

const galleryContainer = document.querySelector(".gallery-container");

if(galleryContainer){
images.forEach(img => {

const image = document.createElement("img");
image.src = "images/" + img;

galleryContainer.appendChild(image);

});
}


/* ---------------- TYPING ANIMATION ---------------- */

const textArray = [
"Yoga Coach",
"National Yogasana Medalist",
"Taekwondo Black Belt",
"Mudgar & Karasamu Trainer"
];

let index = 0;
let charIndex = 0;
let currentText = "";

const typingElement = document.querySelector(".typing");

function type(){

if(charIndex < textArray[index].length){

currentText += textArray[index].charAt(charIndex);
typingElement.textContent = currentText;
charIndex++;

setTimeout(type,80);

}else{

setTimeout(erase,2000);

}

}

function erase(){

if(charIndex > 0){

currentText = textArray[index].substring(0,charIndex-1);
typingElement.textContent = currentText;
charIndex--;

setTimeout(erase,40);

}else{

index++;

if(index >= textArray.length) index = 0;

setTimeout(type,200);

}

}

document.addEventListener("DOMContentLoaded",function(){
if(typingElement){
type();
}
});


/* ---------------- WHATSAPP REGISTRATION ---------------- */

function sendToWhatsApp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let age = document.getElementById("age").value;
let program = document.getElementById("program").value;
let message = document.getElementById("message").value;

let text =
"New Student Registration:%0A%0A"+
"Name: "+name+"%0A"+
"Phone: "+phone+"%0A"+
"Email: "+email+"%0A"+
"Age: "+age+"%0A"+
"Program: "+program+"%0A"+
"Message: "+message;

let url = "https://wa.me/917680873626?text="+text;

window.open(url,"_blank");

}
