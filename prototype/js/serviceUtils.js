/**
 * ==================================================================================
 * serviceUtils : This is module for supply utils to all the services
 * ==================================================================================
 */
const serviceUtils = (() => {
  /**
   * ----------------------------------------------------------------------------------
   * searchBizData : search for business & move to search result php page
   * @param : event of submit eventListener
   * ----------------------------------------------------------------------------------
   */
  let searchBizData = (e) => {
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

  // supply utils
  return {
    searchBizData
  };
})();
