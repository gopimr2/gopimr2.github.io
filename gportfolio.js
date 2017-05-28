"use strict";

function init() {
  var menu_elements = [];
  menu_elements.push(document.getElementById("header_home"));
  menu_elements.push(document.getElementById("header_work"));
  menu_elements.push(document.getElementById("header_about"));
  menu_elements.push(document.getElementById("header_contact"));

  Helper.addClass(menu_elements[0], "selected");

  document.addEventListener("scroll", function () {
    Menu.setFixedHeader();
    Menu.activeMenuWhenScroll(menu_elements);
  });

}

window.addEventListener('load', init, false);