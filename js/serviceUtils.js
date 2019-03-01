/**
 * ==================================================================================
 * serviceUtils : This is module for supply utils to all the services
 * ==================================================================================
 */
const serviceUtils = (() => {
  let objMenuAll = null;

  /**
   * ----------------------------------------------------------------------------------
   * private
   * blIndexOrNot : findout whether current page is index.php or not.
   * @return : true=> index.php / false=> not index.php
   * ----------------------------------------------------------------------------------
   */
  const blIndexOrNot = () => {
    let blResult = false;

    // find out whether the file is index.php or not
    let urlPathname = window.location.pathname;
    let arryPath = urlPathname.split("/");

    if (arryPath[arryPath.length - 1] === "index.php") blResult = true;

    return blResult;
  };

  /**
   * ----------------------------------------------------------------------------------
   * public
   * moveToIndexPage : fetch All Menus
   * @param : event of click eventListener
   * ----------------------------------------------------------------------------------
   */
  const moveToIndexPage = (e) => {
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
   * public
   * fetchMenu : fetch All Menus
   * ----------------------------------------------------------------------------------
   */
  const fetchMenu = () => {
    let ajaxUrl = "../php/db.php";

    if (blIndexOrNot()) ajaxUrl = "php/db.php";

    let ajax = new XMLHttpRequest();
    ajax.open("POST", ajaxUrl, true);
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
      let strInnerHTML = "";

      switch (upper_menu_id) {
        case "1":
          let main_bars = document.querySelector("#main_bars");
          let main_bars_hamburger = document.querySelector(
            "#main_bars_hamburger"
          );

          strInnerHTML = setATagForMenu(objParam[i], "<h5>", "</h5>");

          main_bars.innerHTML +=
            "<ul class='multi-column-dropdown' id='" +
            menu_name +
            "_dropdown'>" +
            strInnerHTML +
            "</ul>";
          main_bars_hamburger.innerHTML +=
            "<ul class='multi-column-dropdown' id='" +
            menu_name +
            "_hamburger'>" +
            strInnerHTML +
            "</ul>";
          break;

        case "2":
          let restaurants_dropdown = document.querySelector(
            "#restaurants_dropdown"
          );
          let restaurants_hamburger = document.querySelector(
            "#restaurants_hamburger"
          );

          // "<li><a>" + menu_name + "</a></li>";
          strInnerHTML = setATagForMenu(objParam[i], "<li>", "</li>");

          restaurants_dropdown.innerHTML += strInnerHTML;
          restaurants_hamburger.innerHTML += strInnerHTML;
          break;

        case "15":
          let bars_dropdown = document.querySelector("#Bars_dropdown");
          let bars_hamburger = document.querySelector("#Bars_hamburger");

          strInnerHTML = setATagForMenu(objParam[i], "<li>", "</li>");

          bars_dropdown.innerHTML += strInnerHTML;
          bars_hamburger.innerHTML += strInnerHTML;
          break;

        case "24":
          let main_beauty = document.querySelector("#main_beauty");
          let main_beauty_hamburger = document.querySelector(
            "#main_beauty_hamburger"
          );

          strInnerHTML = setATagForMenu(objParam[i], "<h5>", "</h5>");

          main_beauty.innerHTML +=
            "<ul class='multi-column-dropdown' id='" +
            menu_name +
            "_dropdown'>" +
            strInnerHTML +
            "</ul>";
          main_beauty_hamburger.innerHTML +=
            "<ul class='multi-column-dropdown' id='" +
            menu_name +
            "_hamburger'>" +
            strInnerHTML +
            "</ul>";
          break;

        case "33":
          let fashion_dropdown = document.querySelector("#fashion_dropdown");
          let fashion_hamburger = document.querySelector("#fashion_hamburger");

          strInnerHTML = setATagForMenu(objParam[i], "<h5>", "</h5>");

          fashion_dropdown.innerHTML += strInnerHTML;
          fashion_hamburger.innerHTML += strInnerHTML;
          break;

        case "38":
          let entertainment_dropdown = document.querySelector(
            "#entertainment_dropdown"
          );
          let entertainment_hamburger = document.querySelector(
            "#entertainment_hamburger"
          );

          strInnerHTML = setATagForMenu(objParam[i], "<h5>", "</h5>");
          entertainment_dropdown.innerHTML += strInnerHTML;
          entertainment_hamburger.innerHTML += strInnerHTML;
          break;

        case "43":
          let services_dropdown = document.querySelector("#services_dropdown");
          let services_hamburger = document.querySelector(
            "#services_hamburger"
          );

          strInnerHTML = setATagForMenu(objParam[i], "<h5>", "</h5>");

          services_dropdown.innerHTML += strInnerHTML;
          services_hamburger.innerHTML += strInnerHTML;
          break;

        case "48":
          let beauty_dropdown = document.querySelector("#Beauty_dropdown");
          let beauty_hamburger = document.querySelector("#Beauty_hamburger");

          strInnerHTML = setATagForMenu(objParam[i], "<li>", "</li>");

          beauty_dropdown.innerHTML += strInnerHTML;
          beauty_hamburger.innerHTML += strInnerHTML;
          break;
      }
    }
  };

  /**
   * ----------------------------------------------------------------------------------
   * private
   * setATagForMenu : set <a> tag for menu if it has menu_page
   * @param : 1. object of menu data
   *          2. menuName's html open tag
   *          3. menuName's html close tag
   * @return : if menuName has page then, return tag+menuName with <a> tag
   *          if menuName has not page then, return only tag+menuName
   * ----------------------------------------------------------------------------------
   */

  const setATagForMenu = (objMenuData, openTag, closeTag) => {
    // if menu doesn't have page
    if (objMenuData.menu_page_yn === "1") {
      let movePageUrl = "menu_detail.php";

      if (blIndexOrNot()) movePageUrl = "php/" + movePageUrl;

      openTag += "<a href=" + movePageUrl + "#" + objMenuData.menu_name + ">";
      closeTag = "</a>" + closeTag;
    }

    return openTag + objMenuData.menu_name + closeTag;
  };

  /**
   * ----------------------------------------------------------------------------------
   * public
   * loadBiz : load Businesses
   * @param : object of businesses to load
   *  - objBizData: business data to load in html
   *  - targetElem: target element to add business data by innerHTML
   * ----------------------------------------------------------------------------------
   */
  const loadBiz = (objParam) => {
    console.log(objParam);
    objParam.objBizData.map((bizData) => {
      objParam.targetElem.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4">
          <div class="thumb-box">
            <div class="thumb-img">
                <a href="mamalee_level_${bizData.biz_level}.php?biz_id=${
        bizData.biz_id
      }">
                <img src=../${bizData.file_path.replace(
                  "/var/www/html/",
                  "public/"
                )} width="100%" alt="" />
              </a>
            </div>
            <div class="thumb-content">
              <h5 class="thumb-category">
                <span class="main" class="menu_zero_span"></span>
                <span class="sub" class="menu_sub_cat">Korean</span>
              </h5>
              <span class="img_two"><span/>
                <div class="row">
                  <div class="col-xs-7 thumb-name">
                    <span>${bizData.biz_name}</span>
                    <div style="color: #999;"> 
                      (level ${bizData.biz_level}) 
                    </div>
                  </div>
                  <div class="col-xs-5 thumb-product">
                      <span class="img_two"><span/>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>`;
    });
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

    // if current page is index.php
    if (blIndexOrNot()) {
      window.location.href = "php/" + fileMoveTo;
    } else {
      // move to search_business.php for search result page.
      let lastIndexOfSlash = window.location.pathname.lastIndexOf("/");
      window.location.href =
        window.location.pathname.substr(0, lastIndexOfSlash + 1) + fileMoveTo;
    }
  };

  /**
   * ----------------------------------------------------------------------------------
   * public
   * fetchRecommendedPosts : fetch recommended posts
   * @param : current business' main category
   *  - menuId : current business' menuId
   * @return : recommended posts in JSON
   * ----------------------------------------------------------------------------------
   */

  function fetchRecommendedPosts(menuId) {
    let ajaxUrl = "../php/biz_db_recommend.php";

    if (blIndexOrNot()) ajaxUrl = "php/biz_db_recommend.php";

    let ajax = new XMLHttpRequest();

    ajax.open("POST", ajaxUrl, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        loadRecommendedPosts(JSON.parse(ajax.response));
        console.log("success");
      } else {
        console.log(ajax.response);
      }
    };
    ajax.send(`menuId=${menuId}`);
  }

  /**
   * ----------------------------------------------------------------------------------
   * public
   * loadRecommendedPosts : load recommended posts
   * @param : (object) recommended posts
   *  - posts : recommended posts
   * ----------------------------------------------------------------------------------
   */

  function loadRecommendedPosts(posts) {
    // select recommended posts container
    let rcmdContainer = document.querySelector("#related_post .container .row");

    for (key in posts) {
      //create recommended post elements
      let rcmdPost = posts[key];
      let rcmdPostElement = document.createElement("div");
      rcmdPostElement.className = "col-xs-12 col-sm-6 col-md-4";

      rcmdPostElement.innerHTML =
        `
      <div class="thumb-box">
        <div class="thumb-img">
          <a href="mamalee_level_` +
        rcmdPost["biz_level"] +
        `.php?biz_id=` +
        rcmdPost["biz_id"] +
        `">
            <img src=${rcmdPost["file_path"].replace(
              "/var/www/html/",
              "../public/"
            )} width="100%" alt="" />
          </a>
        </div>
        <div class="thumb-content">
          <h5 class="thumb-category">
            <span class="main" class="menu_zero_span"></span>
            <span class="sub" class="menu_sub_cat">Korean</span>
          </h5>
          <span class="img_two"><span/>
            <div class="row">
              <div class="col-xs-7 thumb-name">
                <span>` +
        rcmdPost["biz_name"] +
        `</span>
                <div style="color: #999;">(level ` +
        rcmdPost["biz_level"] +
        `)</div>
              </div>
              <div class="col-xs-5 thumb-product">
                  <span class="img_two"><span/>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
      rcmdContainer.appendChild(rcmdPostElement);
    }
  }

  // supply utils
  return {
    searchBizData,
    moveToIndexPage,
    loadBiz,
    fetchRecommendedPosts,
    loadRecommendedPosts,
    fetchMenu
  };
})();
