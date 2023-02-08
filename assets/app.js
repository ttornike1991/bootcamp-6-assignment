const form = document.getElementById("form-personal-info");
const inputs = form.elements;
const imageInput = document.getElementById("uploadButton");
const imagePreview = document.getElementById("imagePreview");

// replace upload button //

document.getElementById("file-input-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("uploadButton").click();
});

// ******************************

document.querySelector(".leftward-arrow").addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});

// VALIDATIONS       //
if (window.location.pathname === "/personal.html") {
  form.addEventListener("change", function (e) {
    e.preventDefault();
    let firstName, lastName, email, mobile;
    if (e.target.id === "fName") {
      firstName = e.target.value.trim();
      let GeorgianChars = /^[\u10A0-\u10FF]+$/;
      if (!firstName || firstName.length < 2 || !GeorgianChars.test(firstName)) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("saxeli arasworia");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        return true
      }
    } else if (e.target.id === "lastName") {
      lastName = e.target.value.trim();
      let GeorgianChars = /^[\u10A0-\u10FF]+$/;
      if (!lastName || lastName.length < 2 || !GeorgianChars.test(lastName)) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.classList.add("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("gvari arasworia");
        return;
      } else {
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.classList.remove("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
      }
    } else if (e.target.id === "mail") {
      email = e.target.value.trim();
      let emailRegex = /^\w+@redberry.ge$/;
      if (!emailRegex.test(email)) {
        e.target.classList.remove("iconGreen2");
        e.target.classList.remove("borderColorGreen");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.classList.add("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("email is invalid");
        return;
      } else {
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.classList.remove("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("borderColorGreen");
        e.target.classList.add("iconGreen2");
      }
    } else if (e.target.id === "phone") {
      mobile = e.target.value.trim();
      console.log(mobile);
      let mobileRegex = /^\+995\d{3}\d{2}\d{2}\d{2}$/;
      if (!mobileRegex.test(mobile)) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.classList.add("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("mobile number is invalid");
        return;
      } else {
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.classList.remove("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("borderColorGreen");
        e.target.classList.add("iconGreen");
      }
    }
   
  });
  /// pass hidden photoupload element validation problems 1.1

    if (localStorage.getItem("image") === null) {
      document.getElementById("uploadButton").required = true;
    } 
  
    form.addEventListener('submit', (e) =>{
      e.preventDefault()
      let data;
      fetchData().then(result => {
        data = result;
        console.log(data, "Success");
      });
    
       
    })
     

}
//  ******************************** //

// Data Variables //

let uName;
let lastName;
let userImage;
let aboutMe;
let mailBox;
let mobileNum;

// Pass the blob to the API as form data  default value //
let imageUrl = "https://picsum.photos/200/300";

let data = {
  experiences: [
    {
      position: "back-end developer",
      employer: "Redberry",
      start_date: "2019/09/09",
      due_date: "2020/09/23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum.",
    },
  ],
  educations: [
    {
      institute: "თსუ",
      degree_id: 7,
      due_date: "2017/06/25",
      description:
        "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ.",
    },
  ],
};

//  ************* //

// Date Generation //
var formData = new FormData();
function dataGenerator() {
  for (let dataKey in data) {
    if (dataKey === "experiences" || dataKey === "educations") {
      // append nested object
      for (let previewKey in data[dataKey]) {
        for (let item in data[dataKey][previewKey]) {
          formData.append(`${dataKey}[${previewKey}][${item}]`, data[dataKey][previewKey][item]);
        }
      }
    }
  }
}

// **************************************  //

// fetchData from API //

function fetchData() {
  dataGenerator();
  return fetch("https://resume.redberryinternship.ge/api/cvs", {
    headers: {
      Accept: "application/json",
    },
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return Promise.resolve(data);
    })
    .catch((err) => console.log(err));
}
// **************************** //


/// SAVE TO LOCAL STORAGE

form.addEventListener("change", function (e) {
  e.preventDefault();
  if (e.target.id === "fName" && e.target.value) {
    uName = e.target.value;

    localStorage.setItem("name", uName);
    console.log(uName);
  } else if (e.target.id === "lastName" && e.target.value) {
    lastName = e.target.value;

    localStorage.setItem("surname", lastName);
    console.log(lastName);
  } else if (e.target.id === "uploadButton" && e.target.value) {
     
    // Retrieve the uploaded photo from local storage

    let reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("image", reader.result);
       
      console.log(e.target.value);
      imagePreview.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);

    dataGenerator();
    console.log(e.target.value);
  } else if (e.target.id === "aboutMe" && e.target.value) {
    aboutMe = e.target.value;

    localStorage.setItem("about_me", aboutMe);
    console.log(aboutMe);
  } else if (e.target.id === "mail" && e.target.value) {
    email = e.target.value;

    localStorage.setItem("email", email);
    console.log(email);
  } else if (e.target.id === "phone" && e.target.value) {
    phone = e.target.value;

    localStorage.setItem("phone_number", phone);
    console.log(phone);
  }
});

//*********************************************** */




// Relload Handler

window.addEventListener("load", function () {
  uName = localStorage.getItem("name");
  if (uName) {
    document.getElementById("fName").value = uName;
    document.querySelector(".fName").classList.remove('hide')
    const updatedValue = uName.slice(0, 9);
   document.querySelector(".fName").innerText= updatedValue 
    formData.append("name", uName);
  }

  lastName = localStorage.getItem("surname");
  if (lastName) {
    document.getElementById("lastName").value = lastName;
    document.querySelector(".lastName").classList.remove('hide')
    const updatedValue = lastName.slice(0, 16);
   document.querySelector(".lastName").innerText= updatedValue 
    formData.append("surname", lastName);
  }

  aboutMe = localStorage.getItem("about_me");
  if (aboutMe) {
    document.getElementById("aboutMe").value = aboutMe;
    document.querySelector(".aboutMes").classList.remove('hide')
    document.querySelector(".aboutMe").classList.remove('hide')
   document.querySelector(".aboutMes").innerText= aboutMe 
    formData.append("about_me", aboutMe);
  }
  let imageData = localStorage.getItem("image");
  if (imageData) {
    let blob = dataURLtoBlob(imageData);
    formData.append("image", blob, "image.png");
     
    imagePreview.src = imageData;

    /// pass hidden photoupload element validation problems  #1.2
    document.getElementById("uploadButton").required = false;
  }

  function dataURLtoBlob(dataURL) {
    let parts = dataURL.split(",");
    let contentType = parts[0].split(":")[1].split(";")[0];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  email = localStorage.getItem("email");
  if (email) {
    document.getElementById("mail").value = email;
    document.querySelector(".mail").classList.remove('hide')
   document.querySelector(".mail").innerText= email 
    document.getElementsByClassName(".mail").value= email
    
    formData.set("email", email);
  }

  phone = localStorage.getItem("phone_number");
  if (phone) {
    document.getElementById("phone").value = phone;
    document.querySelector(".phone").classList.remove('hide')
   document.querySelector(".phone").innerText= phone 
    document.getElementsByClassName(".phone").value= phone
    formData.set("phone_number", phone);
  }
   
   
  for (let [key, value] of formData.entries()) {
    console.log(key + ": " + value, "sasa");
  }
  fetchData();
});
 

// liveStrem to the right side


form.addEventListener('input', function(e){
  e.preventDefault()

  if (e.target.id === "fName")  {
    const liveText = document.getElementById("fName").value.trim();
    const updatedValue = liveText.slice(0, 9);
     
    const liveName = document.querySelector(".fName");
    liveName.classList.remove('hide')
    liveName.innerText = updatedValue;
    console.log(liveName)

  }
  else if (e.target.id === "lastName") {
    const liveText = document.getElementById("lastName").value.trim();
    const updatedValue = liveText.slice(0, 16);

    const liveName = document.querySelector(".lastName");
    liveName.classList.remove('hide')
    liveName.innerText = updatedValue;
    console.log(liveName);
  }
  else if (e.target.id === "mail") {
    const liveText = document.getElementById("mail").value.trim();
    const liveName = document.querySelector(".mail");
    liveName.classList.remove('hide')
    liveName.innerText = liveText;
    console.log(liveName);
  }
  else if (e.target.id === "phone") {
    const liveText = document.getElementById("phone").value.trim();
    const liveName = document.querySelector(".phone");
    liveName.classList.remove('hide')
    liveName.innerText = liveText;
    console.log(liveName);
  }
  else if (e.target.id === "aboutMe") {
    const liveText = document.getElementById("aboutMe").value.trim();
    const liveName = document.querySelector(".aboutMes");
    const aboutmeTitle = document.querySelector(".aboutMe");
    aboutmeTitle.classList.remove('hide')
    liveName.classList.remove('hide')
    liveName.innerText = liveText;
    console.log(liveName);
    
  }
  
})
// ************************//


form.addEventListener('change', function (e){
  
  if ((e.target.id === "fName") && (!e.target.value)){
    const liveName = document.querySelector(".fName");
    liveName.classList.add('hide')
    liveName.innerText = "" ;
    console.log("ააააააააააააააააააააააააააააააააააა")

  }
  else if ((e.target.id === "lastName")  && (!e.target.value)) { 
    const liveName = document.querySelector(".lastName");
    liveName.classList.add('hide')
    liveName.innerText = "";
    console.log(liveName);
  }
  else if ((e.target.id === "mail")  && (!e.target.value)) {
    
    const liveName = document.querySelector(".mail");
    liveName.classList.add('hide')
    liveName.innerText = "";
    console.log(liveName);
  }
  else if ((e.target.id === "phone")  && (!e.target.value.trim())) {
    
    const liveName = document.querySelector(".phone");
    liveName.classList.add('hide')
    liveName.innerText = "";
    console.log(liveName);
  }
  else if ((e.target.id === "aboutMe")   && (e.target.value.trim() === "")){
    console.log("Adad",e.target.value,"shevedi")
    
    const liveName = document.querySelector(".aboutMes");
    const aboutmeTitle = document.querySelector(".aboutMe");
    aboutmeTitle.classList.add('hide')
    liveName.classList.add('hide')
    liveName.innerText = "";
    console.log(liveName);
  }
 
})

