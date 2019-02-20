/**
 * ==================================================================================
 * business utils
 * ==================================================================================
 */

let utils = (() => {
  //     EXECUTION CONTENT
  //      EXECUTION EVENTS

  pageEvent();
  fetchData();
  checkAllCheckboxes();
  searchEvent();

  //      END EXECUTION CONTENT
  //      END EXECUTION EVENTS

  // business Level
  let bizLevelInfo = {
    level1: 1,
    level2: 2,
    level3: 3
  };

  //business delete list

  let businessToDelete = [];

  /**
   * ---------------------------------------------------------------------------
   * createBizSelectbox : make selectbox for business level
   * ---------------------------------------------------------------------------
   */
  function createBizSelectbox() {
    let selectElem = document.getElementById("bizLevel"); // business level select Elem
    let optElem;
    for (keys in bizLevelInfo) {
      optElem = document.createElement("option");
      optElem.value = bizLevelInfo[keys];
      optElem.text = keys;
      selectElem.options.add(optElem);
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * isEmpty : check value is null/undefined/empty string
   * @param : value which needs checked
   * @return : true (param is null/undefined/empty string) / false (param has value)
   * ---------------------------------------------------------------------------
   */
  function isEmpty(arg) {
    if (arg === undefined || arg === null || arg === "") return true;
    return false;
  }

  /**
   * ---------------------------------------------------------------------------
   * checkValidation : check validation before submit
   * 1. check whether essential value is null or not.
   * @return : true (validation success) / false (validation fail)
   * ---------------------------------------------------------------------------
   */

  function checkValidation(e) {
    e.preventDefault();
    let essentialElems = document.getElementsByClassName("essential-border");
    for (elem of essentialElems) {
      console.log(elem.value);
      if (isEmpty(elem.value)) {
        alert(elem.id + " needs value.");
        return false;
      }
    }
    return true;
  }

  /**
   * ---------------------------------------------------------------------------
   * fetchData : fetch data from the server
   * @param : search, page, sort related values to fetch specific business data
   * @return : business data
   * ---------------------------------------------------------------------------
   */

  //fetchData from server
  function fetchData(
    searchKey = "",
    pageIndex = 1,
    postPerPage = 20,
    sort = "businessName",
    ascending = true
  ) {
    let data = {};
    data.searchKey = searchKey;
    data.pageIndex = pageIndex;
    data.postPerPage = postPerPage;
    data.sort = sort;
    data.ascending = ascending;

    data = JSON.stringify(data);
    const form = new FormData();
    form.set("data", data);

    fetch("../../php/business_index.php", {
      method: "POST",
      body: form
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        loadRow(resData, postPerPage, pageIndex);
      })
      .catch((err) => {
        loadRow();
        console.log(err);
      });
  }

  /**
   * ---------------------------------------------------------------------------
   * loadRow : load business data as table rows and show them on the screen
   * 1. create html elements
   * 2. put data in the elements
   * 3. append the elements
   * @param : business data
   * ---------------------------------------------------------------------------
   */

  function loadRow(businesses, postPerPage, pageIndex) {
    let tbody = document.querySelector("tbody");
    if (tbody) tbody.innerHTML = "";
    if (businesses) {
      businesses.forEach((business, index) => {
        let tr = document.createElement("tr");
        let thCheckbox = document.createElement("th");
        let thNumber = document.createElement("th");
        let tdName = document.createElement("td");
        let tdLevel = document.createElement("td");
        let tdPhone = document.createElement("td");
        let tdAddress = document.createElement("td");
        let tdEdit = document.createElement("td");
        let tdImage = document.createElement("td");
        let tdStatus = document.createElement("td");
        let form = document.createElement("form");
        let checkbox = document.createElement("input");
        let buttonEdit = document.createElement("button");
        let buttonImage = document.createElement("button");
        let childrenArr = [];

        thCheckbox.scope = "row";
        checkbox.type = "checkbox";
        checkbox.setAttribute("data-businessId", business["biz_id"]);
        thNumber.scope = "row";
        buttonEdit.className = "btn btn-warning";
        buttonImage.className = "btn btn-info";

        form.appendChild(checkbox);
        thCheckbox.appendChild(form);
        childrenArr.push(thCheckbox);
        thNumber.appendChild(
          document.createTextNode((pageIndex - 1) * postPerPage + index + 1)
        );
        childrenArr.push(thNumber);
        tdName.appendChild(document.createTextNode(business["biz_name"]));
        childrenArr.push(tdName);
        tdLevel.appendChild(document.createTextNode(business["biz_level"]));
        childrenArr.push(tdLevel);
        tdPhone.appendChild(document.createTextNode(business["biz_tel"]));
        childrenArr.push(tdPhone);
        tdAddress.appendChild(document.createTextNode(business["biz_address"]));
        childrenArr.push(tdAddress);
        buttonEdit.appendChild(document.createTextNode("Edit"));
        buttonEdit.addEventListener("click", () => {
          localStorage.setItem("selectedBusiness", JSON.stringify(business));
          window.location.pathname =
            "../../mompopko/html/admin/business_edit.html";
        });
        tdEdit.appendChild(buttonEdit);
        childrenArr.push(tdEdit);
        buttonImage.appendChild(document.createTextNode("Select"));
        tdImage.appendChild(buttonImage);
        childrenArr.push(tdImage);
        tdStatus.appendChild(document.createTextNode("-"));
        childrenArr.push(tdStatus);
        index++;

        for (let i = 0; i < childrenArr.length; i++) {
          tr.appendChild(childrenArr[i]);
        }

        if (tbody) tbody.appendChild(tr);
      });
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * pageEvent : enabling users to go back and forth in pages
   * 1. change pages within a page set when admin clicks a page button
   * 2. go to the next or previous page sets when admin clicks next or prev button
   * ---------------------------------------------------------------------------
   */

  function pageEvent() {
    let pageButtons = document.querySelectorAll(".page-number");
    let prevButton = document.querySelector('a[aria-label="Previous"]');
    let nextButton = document.querySelector('a[aria-label="Next"]');
    if (pageButtons) {
      pageButtons.forEach((pageButton) =>
        pageButton.addEventListener("click", (e) => changePage(e), true)
      );
    }
    if (prevButton) {
      prevButton.addEventListener("click", (e) => {
        changePageSet(e, pageButtons);
      });
    }
    if (nextButton) {
      nextButton.addEventListener("click", (e) => {
        changePageSet(e, pageButtons);
      });
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * changePage : enabling users to go back and forth in pages
   * 1. change pages within a page set when admin clicks a page button
   * @param : event object
   * ---------------------------------------------------------------------------
   */

  function changePage(e) {
    let pageButtons = document.querySelectorAll(".page-number");
    if (pageButtons) {
      pageButtons.forEach((pageButton) => {
        pageButton.classList.remove("active");
      });
      e.target.parentNode.classList.toggle("active");
      // searchKey = "",
      // pageIndex = 1,
      // postPerPage = 20,
      // sort = "businessName",
      // ascending = true

      fetchData(
        document.querySelector("#search-button input[name='search']").value,
        parseInt(e.target.textContent)
      );
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * changePageSet : go to the next or previous page sets when admin clicks next or prev button
   * @param : an event object and page button elements
   * ---------------------------------------------------------------------------
   */

  function changePageSet(e, pageButtons) {
    let lastPageNum = pageButtons[pageButtons.length - 1].textContent;
    let button = e.currentTarget;
    console.log(button);
    if (button && lastPageNum) {
      if (button.getAttribute("aria-label") == "Previous" && lastPageNum != 5) {
        pageButtons.forEach((pageButton) => {
          pageButton.lastElementChild.textContent =
            parseInt(pageButton.lastElementChild.textContent) - 5;
          pageButton.classList.remove("active");
        });

        pageButtons[4].classList.toggle("active");
        loadRow(
          fetchData(
            document.querySelector("#search-button").elements.search.value,
            parseInt(lastPageNum - 5)
          )
        );
      }

      if (button.getAttribute("aria-label") == "Next") {
        pageButtons.forEach((pageButton) => {
          pageButton.lastElementChild.textContent =
            parseInt(pageButton.lastElementChild.textContent) + 5;
          pageButton.classList.remove("active");
        });

        pageButtons[0].classList.toggle("active");
        loadRow(
          fetchData(
            document.querySelector("#search-button").elements.search.value,
            parseInt(lastPageNum + 1)
          )
        );
      }
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * checkAllCheckboxex : check or uncheck all checkboxes
   * ---------------------------------------------------------------------------
   */
  function checkAllCheckboxes() {
    let checkAll = document.querySelector("#check-all");
    let checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    if (checkAll && checkboxes) {
      checkAll.addEventListener("click", () => {
        if (checkAll.checked) {
          for (let i = 0; i < checkboxes.length; i++) {
            var status =
              checkboxes[i].parentNode.parentNode.parentNode.lastChild
                .lastChild;
            checkboxes[i].checked = true;
            status.nodeValue = "Selected";
          }
        } else {
          for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
            status.nodeValue = "-";
          }
        }
      });
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * searchEnter : send a request and show the results when admin searches something
   * ---------------------------------------------------------------------------
   */

  function searchEnter(e) {
    e.preventDefault();
    loadRow(fetchData(e.target.elements.search.value));
  }
  /**
   * ---------------------------------------------------------------------------
   * searchEvent : add submit event to search bar
   * ---------------------------------------------------------------------------
   */

  function searchEvent() {
    let searchButton = document.querySelector("#search-button");
    if (searchButton) {
      searchButton.addEventListener("submit", (e) => searchEnter(e));
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * deleteButton : add click event to delete button and update status
   * ---------------------------------------------------------------------------
   */

  function deleteButton() {
    let deleteBtn = document.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", () => {
      let checkboxes = document.querySelectorAll(
        "tbody input[type='checkbox']"
      );
      if (checkboxes) {
        businessToDelete = [];
        checkboxes.forEach((checkbox) => () => {
          if (checkbox.checked == true) {
            checkbox.parentElement.parentElement.parentElement.lastElementChild.textContent =
              "delete";
            businessToDelete.push(checkbox.getAttribute("data-businessId"));
          }
        });
      }
    });
  }

  /**
   * ----------------------------------------------------------------------------------
   * saveButton : add click event to save button and send delete request to the server
   * ----------------------------------------------------------------------------------
   */

  function saveButton() {
    let saveBtn = document.querySelector("#saveBtn");
    saveBtn.addEventListener("click", () => {
      if (confirm("Do you really want to delete selected businesses")) {
        fetch("../../php/business_delete.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: {
            businessId: businessToDelete
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(JSON.parse(data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  function modal(element) {
    if (utils.isEmpty(element)) {
      console.error(">>>>>> parameter is essential!!! ");
      return;
    }
    let modalContainer = document.createElement("div");
    let modalBackground = document.createElement("div");
    let closeButton = document.createElement("div");

    closeButton.innerHTML = '<i class="fa fa-window-close">';

    let body = document.body,
      html = document.documentElement;

    // get the height of full html document
    let maxHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    //modal close button style

    closeButton.style.position = "absolute";
    closeButton.style.top = "8px";
    closeButton.style.right = "8px";
    closeButton.style.fontSize = "2rem";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "flex-start";
    closeButton.style.cursor = "pointer";

    //modal background style
    modalBackground.style.position = "absolute";
    modalBackground.style.display = "flex";
    modalBackground.style.justifyContent = "center";
    modalBackground.style.alignItems = "flex-start";
    modalBackground.style.height = maxHeight + "px";
    modalBackground.style.width = "100%";
    modalBackground.style.top = "0";
    modalBackground.style.left = "0";
    modalBackground.style.backgroundColor = "rgba(0,0,0,0.5)";

    //modal container style
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.padding = "40px";
    modalContainer.style.position = "relative";
    modalContainer.style.borderRadius = "8px";
    modalContainer.style.width = "90%";
    modalContainer.style.margin = "10px auto 0 auto";
    modalContainer.style.zIndex = "1";

    // close modal

    modalBackground.addEventListener(
      "click",
      (e) => {
        if (e.target === e.currentTarget) {
          e.currentTarget.style.display = "none";
        }
      },
      true
    );

    closeButton.addEventListener("click", (e) => {
      modalBackground.style.display = "none";
    });

    //append modal content, close button, and container to modal background
    modalContainer.appendChild(closeButton);
    modalContainer.appendChild(element);
    modalBackground.appendChild(modalContainer);

    return modalBackground;
  }

  /**
   * ----------------------------------------------------------------------------------
   * menuSelectPopup : popup for menu select
   * ----------------------------------------------------------------------------------
   */
  function menuSelectPopup() {
    // example for menu data (until load from DB)

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
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

        let objMenu = [];
        for (menu of JSON.parse(xhr.response)) {
          objMenu.push(menu);
        }
        let arryTbody = [];
        let objTbodyTd = {};

        //table's contents for tbody
        let tbodyMenuElem = objMenu.map((menu) => {
          tbodyTrElem = document.createElement("tr");

          //checkbox
          objTbodyTd.tbodyThCheckbox = document.createElement("td");
          objTbodyTd.tbodyThCheckbox.appendChild(
            document.createTextNode("checkbox")
          );

          //rowNum
          objTbodyTd.tbodyTdRowNum = document.createElement("td");
          objTbodyTd.tbodyTdRowNum.appendChild(
            document.createTextNode(menu.rownum)
          );

          //menuName
          objTbodyTd.tbodyTdMenuName = document.createElement("td");
          objTbodyTd.tbodyTdMenuName.appendChild(
            document.createTextNode(menu.menu_name)
          );

          //menuId
          objTbodyTd.tbodyTdMenuId = document.createElement("td");
          objTbodyTd.tbodyTdMenuId.appendChild(
            document.createTextNode(menu.menu_id)
          );

          //hasPage
          objTbodyTd.tbodyTdHasPage = document.createElement("td");
          objTbodyTd.tbodyTdHasPage.appendChild(
            document.createTextNode(menu.menu_page_yn)
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
        document.body.appendChild(utils.modal(tableElem));
      } else {
        console.log("error", xhr);
      }
    };

    xhr.open("GET", "../../php/menu_popup.php");
    xhr.send();
  }

  // function menuSelectPopupElem() {
  //   // example for menu data (until load from DB)

  //   let xhr = new XMLHttpRequest();

  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState !== 4) return;
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       let objMenu = [];

  //       for (menu of JSON.parse(xhr.response)) {
  //         objMenu.push({
  //           menuId: menu["menu_id"],
  //           menuName: menu["menu_name"],
  //           menuPageYn: menu["menu_page_yn"]
  //         });
  //       }

  //       objMenu.shift();

  //       let divElem = document.createElement("div");

  //       divElem.innerHTML = `
  //       <table class="table-bordered text-center table table-striped">
  //       <thead class="thead-dark">
  //         <tr>
  //           <th scope="col">
  //           </th>
  //           <th scope="col">#</th>
  //           <th scope="col">MenuName</th>
  //           <th scope="col">MenuId</th>
  //           <th scope="col">Has Page</th>
  //         </tr>
  //       </thead>
  //       <tbody id="menu-popup-tbody">
  //       </tbody>
  //       </table>`;

  //       let arryTbody = [];
  //       let objTbodyTd = {};
  //       let tbodyMenuElem = objMenu.map((menu, index) => {
  //         tbodyTrElem = document.createElement("tr");
  //         objTbodyTd.tbodyTdRowNum = document.createElement("td");
  //         objTbodyTd.tbodyTdRowNum.appendChild(document.createTextNode(index));
  //         objTbodyTd.tbodyTdMenuName = document.createElement("td");
  //         objTbodyTd.tbodyTdMenuName.appendChild(
  //           document.createTextNode(menu.menuName)
  //         );
  //         objTbodyTd.tbodyTdMenuId = document.createElement("td");
  //         objTbodyTd.tbodyTdMenuId.appendChild(
  //           document.createTextNode(menu.menuId)
  //         );
  //         objTbodyTd.tbodyTdHasPage = document.createElement("td");
  //         objTbodyTd.tbodyTdHasPage.appendChild(
  //           document.createTextNode(menu.menuPageYn)
  //         );
  //         objTbodyTd.tbodyThCheckbox = document.createElement("td");
  //         objTbodyTd.tbodyThCheckbox.appendChild(
  //           document.createTextNode("checkbox")
  //         );

  //         for (tdElem in objTbodyTd) {
  //           tbodyTrElem.appendChild(objTbodyTd[tdElem]);
  //         }
  //         arryTbody.push(tbodyTrElem);
  //       });

  //       arryTbody.forEach((tr) => {
  //         console.log(tr);
  //         divElem.querySelector("#menu-popup-tbody").appendChild(tr);
  //       });

  //       document.body.appendChild(utils.modal(divElem));
  //     } else {
  //       console.log("error", xhr);
  //     }
  //   };

  //   xhr.open("GET", "../../php/menu_popup.php");
  //   xhr.send();
  // }

  return {
    createBizSelectbox,
    checkValidation,
    isEmpty,
    modal,
    deleteButton,
    saveButton,
    menuSelectPopup
  };
})();
