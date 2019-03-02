/**
 * ==================================================================================
 * searchBiz
 * @param : object data for used in search business overall
 *  - sqlData : result of datas from sql for search
 *  - searchKeyword : the data which user written in keyword search input
 * ==================================================================================
 */
const searchBiz = ((objParam) => {
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
    const resultTitleElem = document.getElementById("result_title");
    resultTitleElem.innerHTML = "Results of " + strSearchKeyword;
  };

  /**
   * ---------------------------------------------------------------------------
   * loadSearchData : load searched datas to HTML
   * @param: the datas from SQL
   * ---------------------------------------------------------------------------
   */
  const loadSearchData = (objSearchData) => {
    const recentElem = document.getElementById("result");

    // object for send as parameter to loadBiz()
    const objSendParam = {};
    objSendParam.objBizData = objSearchData;
    objSendParam.targetElem = recentElem;

    // when searched data exists
    if (objSearchData.length > 0) {
      serviceUtils.loadBiz(objSendParam);
    } else {
      // when searched data doesn't exist
      recentElem.innerHTML = `
          <div class="no-search-data">
            No data for '${objParam.searchKeyword}'
          </div>
        `;
    }

    //const recent_button = document.querySelector("#recent_button");
    //recent_button.innerHTML = `<button class="btn btn-more" data-toggle="collapse" data-target="#moreThumb">See More</button>`;
  };

  // set value in input of searchKeyword.
  setSearchKeyword(objParam.searchKeyword);

  // load searched datas to HTML
  loadSearchData(objParam.sqlData);
})(objData);
