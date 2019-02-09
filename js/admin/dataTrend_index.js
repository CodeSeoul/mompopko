  /**
   * ---------------------------------------------------------------------------
   * fetchDatatrendData : fetch datatrend data from the server
   * @return : datatrend data
   * ---------------------------------------------------------------------------
   */

  //fetchData from server
  function fetchDatatrendData(
      searchKey = "",
      sort = "title",
      ascending = true) {
      const data = {};
      data.searchKey = searchKey;
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
                  datatrends: JSON.parse(data)
              };
          })
          .catch((err) => {
              console.log(err);
          });
  }

  /**
   * ---------------------------------------------------------------------------
   * loadRow : load datatrend data as table rows and show them on the screen
   * 1. create html elements
   * 2. put data in the elements
   * 3. append the elements
   * @param : datatrend data
   * ---------------------------------------------------------------------------
   */

  function loadRow(data) {
      if (data) {
          let meta = data["meta"];
          let datatrends = JSON.parse(data["datatrends"]);
          let k = 0;
          for (datatrend of datatrends) {
              let tr = document.createElement("tr");
              let thNumber = document.createElement("th");
              let tdTitle = document.createElement("td");
              let tdUploadDate = document.createElement("td");
              let tdEdit = document.createElement("td");
              let buttonEdit = document.createElement("button");
              let buttonDelete = document.createElement("button");
              let childrenArr = [];
              let tbody = document.querySelector("tbody");

              thNumber.scope = "row";
              buttonEdit.className = "btn btn-warning";
              buttonDelete.className = "btn btn-dark";

              thNumber.appendChild(
                  document.createTextNode(k++)
              );
              tdTitle.appendChild(document.createTextNode(datatrend['title']))
              childrenArr.push(tdTitle);
              tdUploadDate.appendChild(document.createTextNode(datatrend['UploadDate']))
              childrenArr.push(tdUploadDate);
              buttonEdit.appendChild(document.createTextNode("Edit"));
              buttonEdit.addEventListener("click", () => {
                  localStorage.setItem("selectedDataTrend", JSON.stringify(datatrend));
                  window.location.pathname = __dirname + "../../html/admin/dataTrend_create.html";
              });
              tdEdit.appendChild(buttonEdit);
              childrenArr.push(tdEdit);
              buttonDelete.appendChild(document.createTextNode("Select"));
              buttonDelete.addEventListener('click', () => {
                  deleteDatatrend(datatrend["datatrendId"])
              })
              tdDelete.appendChild(buttonDelete);
              childrenArr.push(tdDelete);

              for (let i = 0; i < childrenArr.length; i++) {
                  tr.appendChild(childrenArr[i]);
              }

              tbody.replaceChild(tr, tbody.lastChild);
          }
      }
  }


  /**
   * ---------------------------------------------------------------------------
   * deleteDatatrend : delete datatrend
   * ---------------------------------------------------------------------------
   */

  function deleteDatatrend(id) {
      if (confirm("Do you really want to delete this datatrend post?")) {
          fetch('#', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(id)
          }).then(res => {
              res.json()
          }).then(data => {
              JSON.parse(data);
          }).catch(err => {
              console.log(err);
          })
      }
  }


  loadRow(fetchDatatrendData())