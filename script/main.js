'use strict'

function openSignInForm() {
    let form = document.getElementById('signInForm');
    form.style.display='block';
}

function closeSignInForm() {
    let form = document.getElementById('signInForm');
    form.style.display='none';
}

function openSignUpForm() {
    let form = document.getElementById('signUpForm');
    form.style.display='block';
}

function closeSignUpForm() {
    let form = document.getElementById('signUpForm');
    form.style.display='none';
}

function openSearchForm(){
    let form  = document.getElementById('searchForm');
    form.style.display='block';
}

function closeSearchForm(){
    let form  = document.getElementById('searchForm');
    form.style.display='none';
}

function openDropDownMenu() {
    let menu = document.getElementById('dropdownMenu');
    menu.style.display='flex';
}

//go through images 
//TODO

/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}*/