/**
 * ==================================================================================
 * serviceUtils : This is module for supply utils to all the services
 * ==================================================================================
 */
const serviceUtils = (() => {
  let objMenuAll = null;

  /**
   * ----------------------------------------------------------------------------------
   * public
   * moveToIndexPage : fetch All Menus
   * @param : event of click eventListener
   * ----------------------------------------------------------------------------------
   */
  const moveToIndexPage = (e) => {
    console.log(window.location.pathname);
    e.preventDefault();
    let urlPathname = window.location.pathname;
    let lastIndexOfSlash = -1;

    // two depth of path between index.php and header.php
    for (let i = 0; i < 2; i++) {
      lastIndexOfSlash = urlPathname.lastIndexOf("/");
      urlPathname = urlPathname.substr(0, lastIndexOfSlash);
    }
    urlPathname += "/index.php";
    window.location.href = urlPathname;

    return false;
  };

  /**
   * ----------------------------------------------------------------------------------
   * private
   * fetchMenu : fetch All Menus
   * ----------------------------------------------------------------------------------
   */
  const fetchMenu = () => {
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "../php/db.php", true);
    ajax.send();
    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        objMenuAll = JSON.parse(this.responseText);
        loadMenu(objMenuAll);
      }
    };
  };

  /**
   * ----------------------------------------------------------------------------------
   * private
   * loadMenu : load All Menus
   * @param : object of All menus
   * ----------------------------------------------------------------------------------
   */
  const loadMenu = (objParam) => {
    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 2) {
        let restaurants_dropdown = document.querySelector(
          "#restaurants_dropdown"
        );
        let restaurants_hamburger = document.querySelector(
          "#restaurants_hamburger"
        );

        restaurants_dropdown.innerHTML += "<li><a>" + menu_name + "</a></li>";
        restaurants_hamburger.innerHTML += "<li><a>" + menu_name + "</a></li>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 1) {
        let main_bars = document.querySelector("#main_bars");
        let main_bars_hamburger = document.querySelector(
          "#main_bars_hamburger"
        );

        main_bars.innerHTML +=
          "<ul class='multi-column-dropdown' id='" +
          menu_name +
          "_dropdown'><h5><a>" +
          menu_name +
          "</a></h5></ul>";
        main_bars_hamburger.innerHTML +=
          "<ul class='multi-column-dropdown' id='" +
          menu_name +
          "_hamburger'><h5><a>" +
          menu_name +
          "</a></h5></ul>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 15) {
        let bars_dropdown = document.querySelector("#Bars_dropdown");
        let bars_hamburger = document.querySelector("#Bars_hamburger");

        bars_dropdown.innerHTML += "<li><a>" + menu_name + "</a></li>";
        bars_hamburger.innerHTML += "<li><a>" + menu_name + "</a></li>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 24) {
        let main_beauty = document.querySelector("#main_beauty");
        let main_beauty_hamburger = document.querySelector(
          "#main_beauty_hamburger"
        );

        main_beauty.innerHTML +=
          "<ul class='multi-column-dropdown' id='" +
          menu_name +
          "_dropdown'><h5><a>" +
          menu_name +
          "</a></h5></ul>";
        main_beauty_hamburger.innerHTML +=
          "<ul class='multi-column-dropdown' id='" +
          menu_name +
          "_hamburger'><h5><a>" +
          menu_name +
          "</a></h5></ul>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 48) {
        let beauty_dropdown = document.querySelector("#Beauty_dropdown");
        let beauty_hamburger = document.querySelector("#Beauty_hamburger");

        beauty_dropdown.innerHTML += "<li><a>" + menu_name + "</a></li>";
        beauty_hamburger.innerHTML += "<li><a>" + menu_name + "</a></li>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 33) {
        let fashion_dropdown = document.querySelector("#fashion_dropdown");
        let fashion_hamburger = document.querySelector("#fashion_hamburger");

        fashion_dropdown.innerHTML += "<h5><a>" + menu_name + "</a></h5>";
        fashion_hamburger.innerHTML += "<h5><a>" + menu_name + "</a></h5>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 38) {
        let entertainment_dropdown = document.querySelector(
          "#entertainment_dropdown"
        );
        let entertainment_hamburger = document.querySelector(
          "#entertainment_hamburger"
        );

        entertainment_dropdown.innerHTML += "<h5><a>" + menu_name + "</a></h5>";
        entertainment_hamburger.innerHTML +=
          "<h5><a>" + menu_name + "</a></h5>";
      }
    }

    for (let i = 0; i < objParam.length; i++) {
      let upper_menu_id = objParam[i].upper_menu_id;
      let menu_name = objParam[i].menu_name;
      if (upper_menu_id == 43) {
        let services_dropdown = document.querySelector("#services_dropdown");
        let services_hamburger = document.querySelector("#services_hamburger");

        services_dropdown.innerHTML += "<h5><a>" + menu_name + "</a></h5>";
        services_hamburger.innerHTML += "<h5><a>" + menu_name + "</a></h5>";
      }
    }
  };

  /**
   * ----------------------------------------------------------------------------------
   * public
   * searchBizData : search for business & move to search result php page
   * @param : event of submit eventListener
   * ----------------------------------------------------------------------------------
   */
  const searchBizData = (e) => {
    e.preventDefault();

    // value of search key word.
    const searchKeyword = e.srcElement[1].value;

    // message when no keywords
    if (
      searchKeyword === undefined ||
      searchKeyword === null ||
      searchKeyword == ""
    ) {
      alert("Please enter the search keyword");
      return false;
    }

    // destination of file name.
    let fileMoveTo = "search_business.php";

    fileMoveTo += "?searchKeyword=" + searchKeyword;

    // move to search_business.php for search result page.
    let lastIndexOfSlash = window.location.pathname.lastIndexOf("/");
    window.location.href =
      window.location.pathname.substr(0, lastIndexOfSlash + 1) + fileMoveTo;
  };

  //fetch Menu
  fetchMenu();

  // supply utils
  return {
    searchBizData,
    moveToIndexPage
  };
})();
