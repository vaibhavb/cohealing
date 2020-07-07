'use strict';

// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
});

function dismissDonate(){
  var donate = document.getElementById('cta-notification');
  donate.style.display = "none";
}