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
  utils.menuSelectPopup({
    menuIdElem: document.getElementById("menuId"),
    menuNameElem: document.getElementById("menuName")
  });
});
