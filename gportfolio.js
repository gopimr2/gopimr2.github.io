"use strict";

class Helper {
  /**
   * @param element - elements need to be add a class
   * @param classNames -  classNames with space separated;
   * */
  static addClass(element, classNames) {
    console.log("add Class ", element.className);
    if (element.className === undefined) {
      element.className = classNames;
    } else if (element.className.indexOf(classNames) === -1) {
      element.className = element.className.trim() + " " + classNames;
    }
  }

  /**
   * @param element - elements need to be remove a class
   * @param className -  a class name
   * */
  static removeClass(element, className) {
    console.log("REMOVE CLASS - ", element.className);
    if (element.className !== undefined && element.className.indexOf(className) !== -1) {
      element.className = element.className.replace(className, "");
    }
  }
}

document.addEventListener("scroll", function () {
  var nav = document.getElementsByTagName("nav")[0];
  if (window.scrollY > 50) {
    Helper.addClass(nav, "scrolled");
  } else {
    Helper.removeClass(nav, "scrolled");
  }
});