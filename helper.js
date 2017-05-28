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

class Menu {

  static setFixedHeader() {
    let nav = document.getElementsByTagName("nav")[0];
    if (window.scrollY > 50) {
      Helper.addClass(nav, "scrolled");
    } else {
      Helper.removeClass(nav, "scrolled");
    }
  }

  static activeMenuWhenScroll(menuElements) {
    let work = document.getElementById("work");
    let about = document.getElementById("about");
    let contact = document.getElementById("contact");

    console.log(window.scrollY, work.getBoundingClientRect().top, about.getBoundingClientRect().top, contact.getBoundingClientRect().top);
    let activeMenu;
    if ((work.getBoundingClientRect().top - 1) < 0) {
      //console.warn("work ", work.getBoundingClientRect().top);
      activeMenu = menuElements[1];

    }
    if ((about.getBoundingClientRect().top - 1) < 0) {
      activeMenu = menuElements[2];
      //console.warn("about ",about.getBoundingClientRect().top);
    }
    if (( contact.getBoundingClientRect().top - 90) < 0) {
      activeMenu = menuElements[3];
      //console.warn("contact ",contact.getBoundingClientRect().top);
    }
    if (window.scrollY < 50) {
      activeMenu = menuElements[0];
      //console.warn("home");
    }

    Helper.addClass(activeMenu, "selected");

    menuElements.forEach(function (aTag) {
      if (aTag != activeMenu) {
        console.log(aTag.innerHTML);
        Helper.removeClass(aTag, "selected");
      }
    })
  }
}