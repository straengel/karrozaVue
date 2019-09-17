'use strict';

window.addEventListener('DOMContentLoaded', () => {

const menu = document.querySelector('.mobile-menu');
  document.body.addEventListener('click', event => {
    if (event.target.closest('.mobile-menu') && !menu.classList.contains('active')) {
      menu.classList.add('active');
    } else if (menu.classList.contains('active') && !event.target.closest('.toggle-menu')) {
      menu.classList.remove('active');
    }
  });

});
