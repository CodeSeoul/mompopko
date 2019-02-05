/**
 * ==================================================================================
 * business utils
 * ==================================================================================
 */

let utils = (() => {
  // business Level
  let bizLevelInfo = { level1: 1, level2: 2, level3: 3 };

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
  function checkValidation() {
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

  return {
    createBizSelectbox,
    checkValidation,
    isEmpty
  };
})();

//fetchData from server
function fetchData(
  searchKey = "",
  pageIndex = 0,
  postPerPage = 20,
  sort = "businessName",
  ascending = true
) {
  const data = {};
  data.searchKey = searchKey;
  data.pageIndex = pageIndex;
  data.postPerPage = postPerPage;
  data.sort = sort;
  data.ascending = ascending;

  fetch("../../java/business_index", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(JSON.stringify(data));
      return { meta: data, businesses: JSON.parse(data) };
    })
    .catch((err) => {
      console.log(err);
    });
}

//show business data in table body

function loadRow(data) {
  let meta = data["meta"];
  let businesses = JSON.parse(data["businesses"]);

  for (business in businesses) {
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
    let tbody = document.querySelector("tbody");

    thCheckbox.scope = "row";
    checkbox.type = "checkbox";
    thNumber.scope = "row";
    buttonEdit.className = "btn btn-warning";
    buttonImage.className = "btn btn-info";

    form.appendChild(checkbox);
    thCheckbox.appendChild(form);
    childrenArr.push(thCheckbox);
    thNumber.appendChild(
      document.createTextNode(meta.pageIndex * meta.postPerPage) + index
    );
    childrenArr.push(thNumber);
    tdName.appendChild(document.createTextNode(business["businessName"]));
    childrenArr.push(tdName);
    tdLevel.appendChild(document.createTextNode(business["level"]));
    childrenArr.push(tdLevel);
    tdPhone.appendChild(document.createTextNode(business["tel"]));
    childrenArr.push(tdPhone);
    tdAddress.appendChild(document.createTextNode(business["address"]));
    childrenArr.push(tdAddress);
    buttonEdit.appendChild(document.createTextNode("Edit"));
    buttonEdit.addEventListener("click", () => {
      localStorage.setItem("selectedBusiness", JSON.stringify(business));
      window.location.pathname = "../../html/admin/admin_login.html";
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

    tbody.replaceChild(tr, tbody.lastChild);
  }
}

// add event to page buttons

function pageEvent() {
  let pageButtons = document.querySelectorAll(".page-number");
  let prevButton = document.querySelector('a[aria-label="Previous"]');
  let nextButton = document.querySelector('a[aria-label="Next"]');

  pageButtons.forEach((pageButton) =>
    pageButton.addEventListener("click", (e) => changePage(e), true)
  );

  prevButton.addEventListener("click", (e) => {
    changePageSet(e, pageButtons);
  });

  nextButton.addEventListener("click", (e) => {
    changePageSet(e, pageButtons);
  });
}

// change the page when admin clicks a page number

function changePage(e) {
  let pageButtons = document.querySelectorAll(".page-number");
  pageButtons.forEach((pageButton) => {
    pageButton.classList.remove("active");
  });
  e.target.parentNode.classList.toggle("active");
  loadRow(
    fetchData(
      document.querySelector("#search-button").elements.search.value,
      parseInt(e.target.textContent)
    )
  );
}

function changePageSet(e, pageButtons) {
  let lastPageNum = pageButtons[pageButtons.length - 1].textContent;
  let button = e.target;

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

//previous, next page buttons' functions has yet to be created
//backup

//check or uncheck all checkboxes

function checkAllCheckboxes() {
  let checkAll = document.querySelector("#check-all");
  let checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

  checkAll.addEventListener("click", () => {
    if (checkAll.checked) {
      for (let i = 0; i < checkboxes.length; i++) {
        let status =
          checkboxes[i].parentNode.parentNode.parentNode.lastChild.lastChild;
        checkboxes[i].checked = true;
        status.nodeValue = "Delete";
      }
    } else {
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes[
          i
        ].parentNode.parentNode.parentNode.lastChild.lastChild.nodeValue = "-";
      }
    }
  });
}

// send a request and show the results when admin searches something
function searchEnter(e) {
  e.preventDefault();
  loadRow(fetchData(e.target.elements.search.value));
}

//add submit event to search bar

function searchEvent() {
  let searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("submit", (e) => searchEnter(e));
}

//init
pageEvent();
loadRow(fetchData());

/*
 **      EXECUTION CONTENT      **
 **      EXECUTION EVENTS       **
 */

statusUpdate();
checkAllCheckboxes();

searchEvent();

/*
 **      END EXECUTION CONTENT      **
 **      END EXECUTION EVENTS       **
 */
