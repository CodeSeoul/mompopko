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
 * 
 * -----------------------------------------------------------------------
 * prefillBusinessForm : prefill form with selected business' data
 * -----------------------------------------------------------------------
 * 
 */

 (function prefillBuinessForm(){
  if(localStorage.getItem("selectedBusiness")!=null){

    let business = JSON.parse(localStorage.getItem("selectedBusiness"));
    for(key in business){
      console.log(key, "\n");
    }

    //fetch Image URL for preview

    let xhr = new XMLHttpRequest();
    xhr.open('POST','../../php/imgURLFinder.php');
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
      if(xhr.readyState!=4) return;
      if(xhr.status>=200 && xhr.status<300){
        let images = JSON.parse(xhr.responseText);
        createImageHandler(images);
      }else{
        console.log(xhr.response);
      }
    }
    xhr.send(`file_grp_id=${business['file_grp_id']}`);

    document.querySelector('select[name="bizLevel"]').value = business['biz_level'] || '';
    document.querySelector('input[name="menuId"]').value = business['menu_id'] || '';
    document.querySelector('input[name="menuName"]').value = business['menu_name'] || '';
    document.querySelector('input[name="openingDate"]').value = business['biz_open_date'] || '';
    document.querySelector('input[name="newAddress"]').value = business['biz_address'] || '';
    document.querySelector('input[name="province"]').value = business['biz_province'] || '';
    document.querySelector('input[name="city"]').value = business['biz_city'] || '';
    document.querySelector('input[name="district"]').value = business['biz_district'] || '';
    document.querySelector('input[name="neighborhood"]').value = business['biz_neighborhood'] || '';
    document.querySelector('input[name="newZipcode"]').value = business['biz_zipcode'] || '';
    document.querySelector('input[name="tel"]').value = business['biz_tel'] || '';
    document.querySelector('input[name="email"]').value = business['biz_email'] || '';
    document.querySelector('input[name="operatingHour"]').value = business['biz_operatingHour'] || '';
    document.querySelector('input[name="ownerName"]').value = business['biz_owner'] || '';
    document.querySelector('textarea[name="interview"]').value = business['biz_interview_conts'] || '';
    document.querySelector('input[name="interviewDate"]').value = business['biz_interview_date'] || '';
    document.querySelector('input[name="website"]').value = business['biz_website'] || '';
    document.querySelector('input[name="facebook"]').value = business['biz_facebook'] || '';
    document.querySelector('input[name="instagram"]').value = business['biz_instagram'] || '';
    document.querySelector('input[name="youtube"]').value = business['biz_youtube'] || '';
    document.querySelector('input[name="twitter"]').value = business['biz_twitter'] || '';
  }
 })();

  /**
 * 
 * -----------------------------------------------------------------------
 * createImageHandler : create a HTML element where you can replace existing images or add new ones
 * -----------------------------------------------------------------------
 * 
 */

function createImageHandler(imagesObj){

  // input to add new images

  let container = document.createElement('div');
  container.classList.add("imageHandler-container");

  // create input element of type 'file'
  let addImagesInput = document.createElement("input");
  addImagesInput.name = 'newSubImages';
  addImagesInput.id = 'newSubImages';
  addImagesInput.type = 'file';
  addImagesInput.className = "add-images-input";
  addImagesInput.multiple = true;

  // create label element
  let addImagesLabel = document.createElement("label");
  addImagesLabel.className = "add-images-label";
  addImagesLabel.for = "newSubImages";
  addImagesLabel.textContent = "Add Images";


  // append add-new-images element
  container.appendChild(addImagesLabel);
  container.appendChild(addImagesInput);
 


  // replace existing images

  // current images container

  let currentImagesContainer = document.createElement("div");
  currentImagesContainer.className = "current-images-container";

  // create img element with current images
  for(index in imagesObj){
    let image = imagesObj[index];
    let currentImage = document.createElement("img");
    currentImage.src = image['file_path'].replace("/var/www/html","");

    let currentImageInput = document.createElement("input");
    currentImageInput.type = 'file';
    currentImageInput.hidden = true;
    currentImageInput.id = 'newImage' + image['file_id'];
    currentImageInput.name = 'newImage' + image['file_id'];

    let currentImageLabel = document.createElement('label');
    currentImageLabel.setAttribute("for",'newImage' + image['file_id']);
    currentImageLabel.appendChild(currentImage);
    currentImageLabel.input

    currentImageInput.addEventListener('change',()=>{
      currentImage.src = URL.createObjectURL(currentImageInput.files[0]);
      currentImageLabel.appendChild(currentImage);
    })

    currentImagesContainer.appendChild(currentImageLabel);
    currentImagesContainer.appendChild(currentImageInput);

    container.appendChild(currentImagesContainer);
    document.querySelector("form").appendChild(container);
  }
  
}

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




