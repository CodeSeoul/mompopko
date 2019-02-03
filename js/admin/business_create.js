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
  let message = createPreviewElement();

  //show the modal
  document.body.appendChild(modal(message));
};

let createPreviewElement = function() {
  let form = document.querySelector("#business_create_form");
  let level = form.querySelector('[name="level"]').value;
  let mainImage = form.querySelector('[name="mainImage"]');

  console.log(mainImage.files[0]);
  let img = document.createElement("div");
  img.innerHTML = `<img src="${URL.createObjectURL(mainImage.files[0])}">`;
  form.appendChild(img);
  let subImages = form.querySelector('[name="subImages"]');
  let mainCategory = form.querySelector('[name="mainCategory"]').value;
  let subCategory1 = form.querySelector('[name="subCategory1"]').value;
  let subCategory2 = form.querySelector('[name="subCategory2"]').value;
  let openingDate = form.querySelector('[name="openingDate"]').value;
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

  console.log(level, mainImage, subImages, mainCategory);

  let preview = document.createElement("section");
  preview.innerHTML = `<div class="container">
  <div class="row">
    <div class="text-center col-12">
      <h3 class="title">Mamalee Market</h3>
      <h5 class="thumb-category">
        <span>
          <i class="fas fa-utensils"></i>
          <span class="main">Food & Drink</span>
          <span class="sub">Korean</span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <span>
          <i class="fas fa-map-pin"></i>
          <span class="sub">Gangnam, Seoul</span>
          <i class="fas fa-arrow-right"></i>
        </span>
        <span>
          <i class="fas fa-calendar"></i>
          <span class="sub">Opened April 2017</span>
        </span>
      </h5>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-4">
      <img src="img/openings/MamaleeMarket_1.jpg" width="100%" alt="" />
    </div>
    <div class="col-xs-8">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1582.3097393533828!2d127.04083211970381!3d37.516892001110456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca475835c1ca3%3A0x40bff6c320cb2cd0!2sGangnam-gu+Office+Station!5e0!3m2!1sen!2skr!4v1547352606119" width="100%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="col-xs-12">
      <div class="slider">
            <div class="flexslider carousel">
              <ul class="slides">
              <li>
                <img src="img/openings/MamaleeMarket_2.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_3.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_4.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_5.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_2.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_3.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_4.jpg" />
              </li>
              <li>
                <img src="img/openings/MamaleeMarket_5.jpg" />
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12">
      <ul class="story_detail">
        <li><i class="fas fa-user"></i> Owner: <span class="title">Haseul Ram Song</span></li>
        <li><i class="fas fa-clock"></i> Published: <span>November, 10, 2018</span></li>
      </ul>
      <div class="story">
        <p>Seoul life is busy. It would be nice to have a personal chef cook you gourmet meals every day. Chef Haseul Ram Song opened up Mamalee Market to do just that. “I wanted to bring people everyday fine dining.”</p>
        <p>Mamalee Market is a takeout (and delivery) Korean-style deli selling main and side dishes ranging in flavors, from lamb ragu pasta sauce to dried pollock marinated in spices and soy sauce.</p>
        <p>Born in Daejeon, Haseul made his way over to culinary school in Seoul to hone his love of cooking. He then moved to Spain, Sans Sebastian and Madrid, and continued to craft his culinary skills in Michelin-starred restaurants for four years. He brings these flavors back to Seoul, mixing things up and elevating ordinary dishes with his own spin.</p>
        <div class="story_highlight">
          <p><span><i class="fas fa-star"></i> Most popular item:</span> Daengjang (soybean paste) marinated steamed chicken and then charcoal grilled (9,000 won)</p>
          <p><span><i class="fas fa-thumbs-up"></i> Recommended:</span> Whole roast herbed chicken with mashed potatoes and green beans (needs to be ordered at least three days in advance) (10,500 won)</p>
        </div>
      </div>
      <ul class="story_contact">
        <li><span><i class="fas fa-phone"></i> Telephone:</span> 02-515-2163</li>  | 
        <li><span><i class="fas fa-clock"></i> Hours:</span> Mon-Sat 11am-9pm</li>  | 
        <li><span><i class="fab fa-instagram"></i> Instagram:</span> <a>@MamaleeMarket</a></li>
      </ul>
    </div>
  </div>
</div>`;
  return preview;
};
