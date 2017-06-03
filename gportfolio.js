"use strict";

function init() {
  var menu_elements = [];
  menu_elements.push(document.getElementById("header_about"));
  menu_elements.push(document.getElementById("header_portfolio"));
  menu_elements.push(document.getElementById("header_contact"));

  function headerManipulation(){
    Menu.setFixedHeader();
    Menu.activeMenuWhenScroll(menu_elements);
  }

  headerManipulation();

  document.addEventListener("scroll", headerManipulation);
}

window.addEventListener('load', init, false);
