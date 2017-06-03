class G_Helper {
  /**
   * @param element - elements need to be add a class
   * @param classNames -  classNames with space separated;
   * */
  static addClass(element, classNames) {
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
    if (element.className !== undefined && element.className.indexOf(className) !== -1) {
      element.className = element.className.replace(className, "");
    }
  }
}

class Menu {

  static setFixedHeader() {
    let nav = document.getElementsByTagName("nav")[0];
    if (window.scrollY > 50) {
      G_Helper.addClass(nav, "scrolled");
    } else {
      G_Helper.removeClass(nav, "scrolled");
    }
  }

  static activeMenuWhenScroll(menuElements) {
    let work = document.getElementById("portfolio");
    let contact = document.getElementById("contact");

    let work_top_position = work.getBoundingClientRect().top,
        contact_top_position = contact.getBoundingClientRect().top;

    //console.log(window.scrollY, work_top_position, contact_top_position);

    let activeMenu;
    if ((work_top_position - 1) < 0) {
      //console.warn("work ", work_top_position);
      activeMenu = menuElements[1];
    }
    if (( contact_top_position - 1) < 0) {
      //console.warn("contact ",contact_top_position);
      activeMenu = menuElements[2];
    }
    if (window.scrollY < 50) {
      //console.warn("home");
      activeMenu = menuElements[0];
    }

    if(activeMenu) {
      G_Helper.addClass(activeMenu, "selected")
      menuElements.forEach(function (aTag) {
        if (aTag != activeMenu) {
          //console.log(aTag.innerHTML);
          G_Helper.removeClass(aTag, "selected");
        }
      })
    }
  }
}
