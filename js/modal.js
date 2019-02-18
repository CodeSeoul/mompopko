const modal = function(element) {
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
};
