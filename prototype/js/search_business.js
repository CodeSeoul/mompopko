/**
 * ==================================================================================
 * search utils
 * @param : object data for used in search overall
 *  - sqlData : result of datas from sql for search
 *  - searchKeyword : the data which user written in keyword search input
 * ==================================================================================
 */
const searchUtils = ((objParam) => {
  /**
   * ---------------------------------------------------------------------------
   * setSearchKeyword : set search keyword in input and section
   * @param: the data which user written in keyword search input
   * ---------------------------------------------------------------------------
   */
  const setSearchKeyword = (strSearchKeyword) => {
    // element of search keyword input
    const searchKeywordElem = document.getElementById("sb_keyword");
    searchKeywordElem.setAttribute("value", strSearchKeyword);

    // element of result title
    const resultTitleElem = document.querySelector("#result_title");
    resultTitleElem.innerHTML = "Results of " + strSearchKeyword;
    console.log(resultTitleElem);
  };

  // set value in input of searchKeyword.
  setSearchKeyword(objParam.searchKeyword);
})(objData);
