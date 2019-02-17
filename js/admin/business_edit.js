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
  const objMenu = [
    {
      menuId: "1",
      menuName: "Food&Drink",
      menuPageYn: "0"
    },
    {
      menuId: "2",
      menuName: "Restaurants",
      menuPageYn: "0"
    },
    {
      menuId: "3",
      menuName: "Korean",
      menuPageYn: "1"
    },
    {
      menuId: "4",
      menuName: "Japanese",
      menuPageYn: "1"
    },
    {
      menuId: "43",
      menuName: "Services",
      menuPageYn: "0"
    },
    {
      menuId: "44",
      menuName: "Accommodations",
      menuPageYn: "1"
    }
  ];

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
    <tbody id="menu-popup-tbody>
    </tbody>
  </table>`;

  let arryTbody = [];
  let objTbodyTd = {};
  let tbodyMenuElem = objMenu.map((menu) => {
    tbodyTrElem = document.createElement("tr");
    objTbodyTd.tbodyTdRowNum = document.createElement("td");
    objTbodyTd.tbodyTdRowNum.appendChild(document.createTextNode(1));
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

  console.log(arryTbody);

  return divElem;
};

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
  let divElem = menuSelectPopupElem();
  document.body.appendChild(utils.modal(divElem));
});
