function addRow(number) {
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
  thNumber.appendChild(document.createTextNode(number));
  childrenArr.push(thNumber);
  tdName.appendChild(document.createTextNode("Name"));
  childrenArr.push(tdName);
  tdLevel.appendChild(document.createTextNode("Level"));
  childrenArr.push(tdLevel);
  tdPhone.appendChild(document.createTextNode("Phone"));
  childrenArr.push(tdPhone);
  tdAddress.appendChild(document.createTextNode("Address"));
  childrenArr.push(tdAddress);
  buttonEdit.appendChild(document.createTextNode("Edit"));
  tdEdit.appendChild(buttonEdit);
  childrenArr.push(tdEdit);
  buttonImage.appendChild(document.createTextNode("Select"));
  tdImage.appendChild(buttonImage);
  childrenArr.push(tdImage);
  tdStatus.appendChild(document.createTextNode("-"));
  childrenArr.push(tdStatus);

  for (let i = 0; i < childrenArr.length; i++) {
    tr.appendChild(childrenArr[i]);
  }

  tbody.appendChild(tr);
}

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

function statusUpdate() {
  let checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

  for (let i = 0; i < checkboxes.length; i++) {
    let status =
      checkboxes[i].parentNode.parentNode.parentNode.lastChild.lastChild;
    checkboxes[i].addEventListener("change", e => {
      if (e.target.checked) {
        status.nodeValue = "Delete";
      } else {
        status.nodeValue = "-";
      }
    });
  }
}

function searchEnter(e) {
  e.preventDefault();
  console.log("hey");
}

function searchEvent() {
  let searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("submit", e => searchEnter(e));
}

/*
 **      EXECUTION CONTENT      **
 **      EXECUTION EVENTS       **
 */

for (let i = 0; i < 20; i++) {
  addRow(i);
}
statusUpdate();
checkAllCheckboxes();
searchEvent();

/*
 **      END EXECUTION CONTENT      **
 **      END EXECUTION EVENTS       **
 */
