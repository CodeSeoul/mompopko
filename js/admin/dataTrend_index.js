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
              return {
                  meta: data,
                  businesses: JSON.parse(data)
              };
          })
          .catch((err) => {
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

  function loadRow(data) {
      if (data) {
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
              checkbox.setAttribute("data-businessId", business["biz_id"]);
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
  }