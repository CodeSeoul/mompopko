/**
 * ---------------------------------------------------------------------------
 * addEventToForm : add a submit event to the form
 * 1. select the form
 * 2. check validation
 * 3. show preview
 * ---------------------------------------------------------------------------
 */

let addEventToForm = function () {
  let form = document.querySelector("#business_create_form");
  console.log(form);
  form.addEventListener("submit", (e) => {
    if (utils.checkValidation(e)) showPreview(e);
  });
};

//********/ Execution Start *********//
addEventToForm();
//********/ Execution End *********//

/**
 * ---------------------------------------------------------------------------
 * showPreview : showing a preview page
 * 1. show a business post preview page on modal
 * ---------------------------------------------------------------------------
 */

let showPreview = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  // make a element to put in modal
  let message = createPreviewElement();

  //show the modal
  document.body.appendChild(modal(message));
};

/**
 * ---------------------------------------------------------------------------
 * createPreviewElement : create html elements for preview page content
 * 1. create html elements
 * 2. append them
 * 3. add final submit event
 * ---------------------------------------------------------------------------
 */

let createPreviewElement = function () {
  let form = document.querySelector("#business_create_form");
  let businessName = form.querySelector('[name="businessName"]').value;
  let bizLevel = form.querySelector('[name="bizLevel"]').value;

  let mainImage = form.querySelector('[name="mainImage"]');
  //create main image url for preview
  let mainImageURL;
  if (mainImage.files.length >= 1) {
    mainImageURL = URL.createObjectURL(mainImage.files[0]);
  } else {
    mainImageURL = "";
  }

  let subImages = form.querySelector('[name="subImages"]');
  //create sub images url for preview
  let subImagesURLs = [];
  let subImagesList = "";
  if (subImages.files.length >= 1) {
    for (let i = 0; i < subImages.files.length; i++) {
      subImagesURLs.push(URL.createObjectURL(subImages.files[i]));
      subImagesList += `<li><img src='${subImagesURLs[i]}'></li>`;
    }
  }

  let mainCategory = form.querySelector('[name="mainCategory"]').value;
  let subCategory1 = form.querySelector('[name="subCategory1"]').value;
  let subCategory2 = form.querySelector('[name="subCategory2"]').value;
  let openingDate = new Date(form.querySelector('[name="openingDate"]').value);
  let newAddress = form.querySelector('[name="newAddress"]').value;
  let province = form.querySelector('[name="province"]').value;
  let city = form.querySelector('[name="city"]').value;
  let district = form.querySelector('[name="district"]').value;
  let newZipcode = form.querySelector('[name="newZipcode"]').value;
  let tel = form.querySelector('[name="tel"]').value;
  let email = form.querySelector('[name="email"]').value;
  let operatingHour = form.querySelector('[name="operatingHour"]').value;
  let ownerName = form.querySelector('[name="ownerName"]').value;
  let interview = form.querySelector('[name="interview"]').value;
  let interviewDate = form.querySelector('[name="interviewDate"]').value;
  let website = form.querySelector('[name="website"]').value;
  let facebook = form.querySelector('[name="facebook"]').value;
  let instagram = form.querySelector('[name="instagram"]').value;
  let youtube = form.querySelector('[name="youtube"]').value;
  let twitter = form.querySelector('[name="twitter"]').value;

  let preview = document.createElement("section");
  preview.id = "preview";
  let openingDateFormat = {
    timeZone: "Asia/Seoul",
    month: "long",
    year: "numeric"
  };
  let publishedDateFormat = {
    timeZone: "Asia/Seoul",
    month: "long",
    year: "numeric",
    day: "numeric"
  };
  preview.innerHTML = `
  <div class="container">
  <div class="row">
    <div class="text-center col-12">
      <h3 class="title">${businessName || "Name"}</h3>
      <h5 class="thumb-category">
        <span>
          <i class="fas fa-utensils"></i>
          <span class="main">${mainCategory || "Food & Drink"}</span>
          <span class="sub">${subCategory1 || "Korean"}</span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <span>
          <i class="fas fa-map-pin"></i>
          <span class="sub">${district || "Gangnam"}, ${city || "Seoul"}</span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <span>
          <i class="fas fa-calendar"></i>
          <span class="sub">${openingDate.toLocaleString(
            "en-US",
            openingDateFormat
          ) || "Jan, 2019"}</span>
        </span>
      </h5>
    </div>
  </div>
  <div class="row map-mainImage">
    <div class="col-4">
      <img src="${mainImageURL}" width="100%" alt="" />
    </div>
    <div class="col-8">
      <div id='map'></div>
    </div>
    
  </div>
  <div id='carousel' class="col-12"></div>
  <div class="row">
    <div class="col-12">
      <ul class="story_detail">
        <li><i class="fas fa-user"></i> <span>Owner:</span>${ownerName ||
          "Mr.Kim"}</li>
        <li><i class="fas fa-clock"></i> <span>Published:</span>${new Date(
          Date.now()
        ).toLocaleString("en-US", publishedDateFormat) || "Jan 19, 2019"}</li>
      </ul>
      <div class="story">
        ${interview ||
          " Sample interview  Sample interview  Sample interview  Sample interview  Sample interview "}
        <p>sample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample textsample text</p>
      </div>
      <ul class="story_contact">
        <li><span><i class="fas fa-phone"></i> Telephone:</span> ${tel ||
          "02-1234-4567"}</li>
        <li><span><i class="fas fa-clock"></i> Hours:</span> ${operatingHour ||
          "Mon-Tue 08:00~13:00"}</li>
        <li><span><i class="fab fa-instagram"></i> Instagram:</span> <a>${instagram ||
          "instagram.com"}</a></li>
      </ul>
    </div>
  </div>
</div>`;
  createGoogleMap(newAddress);

  // append carousel
  preview.querySelector("#carousel").appendChild(createCarousel(subImagesURLs));

  //final submit button
  let finalSubmitContainer = document.createElement("div");
  let finalSubmitButton = document.createElement("button");
  finalSubmitContainer.className = "text-center";
  finalSubmitButton.textContent = "Register This Post";
  finalSubmitButton.className = "btn btn-primary mt-5 p-2";
  finalSubmitButton.addEventListener("click", () => {
    if (confirm("Do you really want to register this post?")) {
      form.submit();
    }
  });
  finalSubmitContainer.appendChild(finalSubmitButton);
  preview.appendChild(finalSubmitContainer);

  return preview;
};

/**
 * ---------------------------------------------------------------------------
 * createCarousel : create a carousel
 * 1. create HTML elements
 * 2. create carousel slider buttons
 * 3. append all of them to a wrapper
 * @param : The URLs of images to show on carousel
 * @return : carousel HTML element
 * ---------------------------------------------------------------------------
 */

function createCarousel(imageURLs) {
  let wrapper = document.createElement("div");

  let carouselContainer = document.createElement("div");
  carouselContainer.id = "carousel-container";
  carouselContainer.style.display = "grid";
  carouselContainer.style.padding = "0";
  carouselContainer.style.margin = "0";
  carouselContainer.style.transition = "all 0.5s";
  carouselContainer.style.gridGap = 8 / 3 + "%";
  carouselContainer.style.gridTemplateColumns = `repeat(${
    imageURLs.length
  }, 23%)`;

  let images = [];
  for (let i = 0; i < imageURLs.length; i++) {
    let image = document.createElement("img");
    image.src = imageURLs[i];
    image.style.display = "block";
    image.style.objectFit = "contain";
    image.style.width = "100%";
    image.style.boxSizing = "border-box";
    images.push(image);
  }

  for (img of images) {
    carouselContainer.appendChild(img);
  }

  wrapper.appendChild(carouselContainer);

  // create carousel slider buttons and append them

  let buttons = document.createElement("div");
  buttons.classList.add("carousel-button-container");
  for (let i = 0; i < Math.ceil(imageURLs.length / 4); i++) {
    let button = document.createElement("div");

    button.innerHTML = `<i class="fas fa-circle"></i>`;
    i == 0 ? button.lastElementChild.classList.add("slider-active") : null;
    button.style.display = "inline-block";

    button.addEventListener("click", (e) => {
      carouselContainer.style.transform = `translate(${-i * (100 + 8 / 3)}%)`;
      buttons.childNodes.forEach((button) =>
        button.lastElementChild.classList.remove("slider-active")
      );
      button.lastElementChild.classList.add("slider-active");
    });

    wrapper.style.overflow = "hidden";
    buttons.appendChild(button);
  }
  wrapper.appendChild(buttons);

  return wrapper;
}