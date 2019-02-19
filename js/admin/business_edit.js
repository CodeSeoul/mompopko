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
  // table elem for menu popup.
  let tableElem = document.createElement("table");
  tableElem.className = "table-bordered text-center table table-striped";

  // table's thead elem
  let theadElem = document.createElement("thead");
  theadElem.className = "thead-dark";
  theadElem.innerHTML = `
        <tr>
          <th scope="col">
          </th>
          <th scope="col">#</th>
          <th scope="col">MenuName</th>
          <th scope="col">MenuId</th>
          <th scope="col">Has Page</th>
        </tr>`;

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

  let arryTbody = [];
  let objTbodyTd = {};

  //table's contents for tbody
  let tbodyMenuElem = objMenu.map((menu) => {
    tbodyTrElem = document.createElement("tr");

    //checkbox
    objTbodyTd.tbodyThCheckbox = document.createElement("td");
    objTbodyTd.tbodyThCheckbox.appendChild(document.createTextNode("checkbox"));

    //rowNum
    objTbodyTd.tbodyTdRowNum = document.createElement("td");
    objTbodyTd.tbodyTdRowNum.appendChild(document.createTextNode(1));

    //menuName
    objTbodyTd.tbodyTdMenuName = document.createElement("td");
    objTbodyTd.tbodyTdMenuName.appendChild(
      document.createTextNode(menu.menuName)
    );

    //menuId
    objTbodyTd.tbodyTdMenuId = document.createElement("td");
    objTbodyTd.tbodyTdMenuId.appendChild(document.createTextNode(menu.menuId));

    //hasPage
    objTbodyTd.tbodyTdHasPage = document.createElement("td");
    objTbodyTd.tbodyTdHasPage.appendChild(
      document.createTextNode(menu.menuPageYn)
    );

    for (tdElem in objTbodyTd) {
      tbodyTrElem.appendChild(objTbodyTd[tdElem]);
    }
    arryTbody.push(tbodyTrElem);
  });

  //create table's tbody element & put contents in tbody element
  let tbodyElem = document.createElement("tbody");
  for (tbody in arryTbody) {
    tbodyElem.appendChild(arryTbody[tbody]);
  }

  tableElem.appendChild(theadElem);
  tableElem.appendChild(tbodyElem);

  return tableElem;
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
  utils.menuSelectPopupElem();
  // document.body.appendChild(utils.modal(divElem));
});