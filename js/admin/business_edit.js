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
  let divElem = document.createElement("div");
  divElem.innerHTML = "testing for popup";
  return divElem;
};

/**
 * ==================================================================================
 * EventListners
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
