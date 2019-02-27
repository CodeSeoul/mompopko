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
    console.log(objParam);
    //TODO :: thyunAhn load Menu Datas in header
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
    searchBizData
  };
})();
