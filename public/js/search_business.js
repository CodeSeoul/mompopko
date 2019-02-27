/**
 * ==================================================================================
 * searchBiz utils
 * @param : object data for used in search business overall
 *  - sqlData : result of datas from sql for search
 *  - searchKeyword : the data which user written in keyword search input
 * ==================================================================================
 */
const searchBizUtils = ((objParam) => {
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
    console.log(objSearchData);

    const recentElem = document.getElementById("result");

    // when searched data exists
    if (objSearchData.length > 0) {
      objSearchData.map((searchData) => {
        recentElem.innerHTML += `<div class="col-xs-12 col-sm-6 col-md-4">
            <div class="thumb-box">
              <div class="thumb-img">
                  <a href="mamalee_level_${searchData.biz_level}.php
                                  ?biz_name=${searchData.biz_name}">
                  <img src="img/openings/MamaleeMarket_1.jpg" width="100%" alt="" />
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
                      <span>${searchData.biz_name}</span>
                      <div style="color: #999;"> 
                        (level ${searchData.biz_level}) 
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
    } else {
      // when searched data doesn't exist
      recentElem.innerHTML = `
          <div class="no-search-data">
            There is no data for '${objParam.searchKeyword}'
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

  return {};
})(objData);
