/**
 * ==================================================================================
 * menuDetail : this file is for javascript logics of menu_detail.php
 * ==================================================================================
 */

const menuDetail = (() => {
  /**
   * ----------------------------------------------------------------------------------
   * private
   * fetchDetailMenuBiz : fetch business match with menu
   * ----------------------------------------------------------------------------------
   */
  const fetchDetailMenuBiz = () => {
    const hashValue = window.location.hash.substring(1);

    const ajaxUrl = "../php/db_menu_detail.php";
    let data = {
      menuId: hashValue
    };

    let ajax = new XMLHttpRequest();
    ajax.open("POST", ajaxUrl, true);

    data = JSON.stringify(data);
    const form = new FormData();
    form.set("data", data);
    ajax.send(form);

    //ajax.setRequestHeader("Content-Type", "application/text");
    //ajax.send(JSON.stringify(data));

    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let objBiz = [];
        if (ajax.responseText) objBiz = JSON.parse(ajax.responseText);

        // set result title
        const resultTitleElem = document.getElementById("result_title");
        resultTitleElem.innerHTML = objBiz[0].menu_path;

        //loading Menu's biz
        loadDetailMenuBiz(objBiz);
      }
    };
  };

  /**
   * ---------------------------------------------------------------------------
   * loadDetailMenuBiz : load businesses which match with menu to HTML
   * @param: the business datas from SQL
   * ---------------------------------------------------------------------------
   */
  const loadDetailMenuBiz = (objBizData) => {
    const targetElem = document.getElementById("result");

    // object for send as parameter to loadBiz()
    const objSendParam = {};
    objSendParam.objBizData = objBizData;
    objSendParam.targetElem = targetElem;

    // when searched data exists
    if (!serviceUtils.isEmpty(objBizData[0].biz_id)) {
      serviceUtils.loadBiz(objSendParam);
    } else {
      // when searched data doesn't exist
      targetElem.innerHTML = `
          <div class="no-search-data">
            No data in this menu.
          </div>
        `;
    }
  };

  // onhashchange event
  window.onhashchange = () => {
    fetchDetailMenuBiz();
  };

  // to get menu's business
  fetchDetailMenuBiz();
})();
