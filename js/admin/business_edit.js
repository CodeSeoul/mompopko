$("#header").load("adminHeader.html");

// create select box for biz level.
utils.createBizSelectbox();

// menu btn's element
const menuBtnElem = document.getElementById("menuBtn");

/**
 * ==================================================================================
 * functions
 * ==================================================================================
 */

/**
 * ----------------------------------------------------------------------------------
 * menuSelectPopupElem : make elements(contents for menu select popup)
 * @return : element type which has menus for select
 * ----------------------------------------------------------------------------------
 */
const menuSelectPopupElem = () => {
  // example for menu data (until load from DB)

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {

      let objMenu = [];

      for (menu of JSON.parse(xhr.response)) {
        objMenu.push({
          menuId: menu['menu_id'],
          menuName: menu['menu_name'],
          menuPageYn: menu['menu_page_yn']
        });
      }

      objMenu.shift();

      let divElem = document.createElement("div");

      divElem.innerHTML = `
        <table class="table-bordered text-center table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">
            </th>
            <th scope="col">#</th>
            <th scope="col">MenuName</th>
            <th scope="col">MenuId</th>
            <th scope="col">Has Page</th>
          </tr>
        </thead>
        <tbody id="menu-popup-tbody">
        </tbody>
        </table>`;

      let arryTbody = [];
      let objTbodyTd = {};
      let tbodyMenuElem = objMenu.map((menu, index) => {
        tbodyTrElem = document.createElement("tr");
        objTbodyTd.tbodyTdRowNum = document.createElement("td");
        objTbodyTd.tbodyTdRowNum.appendChild(document.createTextNode(index));
        objTbodyTd.tbodyTdMenuName = document.createElement("td");
        objTbodyTd.tbodyTdMenuName.appendChild(
          document.createTextNode(menu.menuName)
        );
        objTbodyTd.tbodyTdMenuId = document.createElement("td");
        objTbodyTd.tbodyTdMenuId.appendChild(document.createTextNode(menu.menuId));
        objTbodyTd.tbodyTdHasPage = document.createElement("td");
        objTbodyTd.tbodyTdHasPage.appendChild(
          document.createTextNode(menu.menuPageYn)
        );
        objTbodyTd.tbodyThCheckbox = document.createElement("td");
        objTbodyTd.tbodyThCheckbox.appendChild(document.createTextNode("checkbox"));

        for (tdElem in objTbodyTd) {
          tbodyTrElem.appendChild(objTbodyTd[tdElem]);
        }
        arryTbody.push(tbodyTrElem);

      });

      arryTbody.forEach(tr => {
        console.log(tr);
        divElem.querySelector('#menu-popup-tbody').appendChild(tr);
      })

      document.body.appendChild(utils.modal(divElem));

    } else {
      console.log('error', xhr);
    }

  }

  xhr.open("GET", "../../php/menu_popup.php");
  xhr.send();

}



/**
 * ==================================================================================
 * EventListeners
 * ==================================================================================
 */

/**
 * ----------------------------------------------------------------------------------
 * click EventListner for menu button
 * ----------------------------------------------------------------------------------
 */
menuBtnElem.addEventListener("click", () => {
  menuSelectPopupElem();
  // document.body.appendChild(utils.modal(divElem));
});