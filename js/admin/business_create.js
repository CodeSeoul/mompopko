// add event to the form

let addEventToForm = function() {
  let form = document.querySelector("#business_create_form");
  console.log(form);
  form.addEventListener("submit", e => {
    showPreview(e);
  });
};

addEventToForm();

// submit handler

let showPreview = function(e) {
  e.preventDefault();

  // make a element to put in modal
  let message = document.createElement("div");
  message.innerHTML = "<span>Hello</span>";

  //show the modal
  document.body.appendChild(modal(message));
};
