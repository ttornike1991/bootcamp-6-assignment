const form = document.getElementById("form-personal-info");
const form2 = document.getElementById("form-personal-info2");

const imageInput = document.getElementById("uploadButton");
const imagePreview = document.getElementById("imagePreview");
const formDiv = document.getElementById("form-container");
const form2Container = document.getElementById("experience-info");
console.log(form2Container);
document.querySelector(".leftward-arrow").addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});

//                          VALIDATIONS   //

//*****************//
//* personal.html *//
//*****************//

if (window.location.pathname === "/personal.html") {
  // replace upload button //

  document
    .getElementById("file-input-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("uploadButton").click();
    });

  form.addEventListener("change", function (e) {
    e.preventDefault();
    let firstName, lastName, email, mobile;
    if (e.target.id === "fName") {
      firstName = e.target.value.trim();
      let GeorgianChars = /^[\u10A0-\u10FF]+$/;
      if (
        !firstName ||
        firstName.length < 2 ||
        !GeorgianChars.test(firstName)
      ) {
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
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        return;
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
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
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
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
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
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        e.target.classList.add("borderColorGreen");
        e.target.classList.add("iconGreen");
      }
    }
  });

  /// pass hidden photoupload element validation problems 1.1

  if (localStorage.getItem("image") === null) {
    document.getElementById("uploadButton").required = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("unda gadavsuliyavi");
    let data;
    fetchData().then((result) => {
      data = result;
      console.log(data, "Success");
      window.location.href = "experience.html";
    });
  });
}
//  ***************  personal.html The end  ***************** //

//*****************//
//*experience.html*//
//*****************//
let count = 1;
localStorage.setItem("count", count);

if (window.location.pathname === "/experience.html") {
  let formCount = localStorage.getItem("count");
  formCount = parseInt(formCount);
  formDiv.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-form")) {
      (function () {
        let newForm = document.createElement("div");

        newForm.innerHTML = `<form
    action=""
    class="experience-info-form"
    id="form-personal-info${formCount}"
  >
    <div
      class="displayFlex flexColumn position-div relative marginBottom"
    >
      <label for="position">თანამდებობა</label>
      <input
        class="inputStayling position-class"
        type="text"
        id="position${formCount}"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        required
      />
      <h6>მინიმუმ 2 სიმბოლო</h6>
      <span class="invalid hide"></span>
    </div>
    <div
      class="displayFlex flexColumn employeeDiv relative margineTop"
    >
      <label for="employee">დამსაქმებელი</label>
      <input
        class="inputStayling"
        type="text"
        id="employee${formCount}"
        placeholder="დამსაქმებელი"
        required
      />
      <h6>მინიმუმ 2 სიმბოლო</h6>
      <span class="invalid hide"></span>
    </div>
    <div class="displayFlex spaceBetween width-100 dataField">
      <div class="displayFlex flexColumn name-div relative">
        <label for="startData">დაწყების რიცხვი</label>
        <input
          class="inputStayling paddingRight"
          type="date"
          id="startData${formCount}"
          name="trip-start"
          required
        />
        <h6></h6>
        <span class="invalid hide"></span>
      </div>
      <div class="displayFlex flexColumn endDataDiv relative">
        <label for="endData">დამთავრების რიცხვი</label>
        <input
          class="inputStayling paddingRight"
          type="date"
          id="endData${formCount}"
          name="trip-start"
          required
        />
        <h6></h6>
        <span class="invalid hide"></span>
      </div>
    </div>
    <div class="displayFlex descriptionDiv flexColumn relative">
      <label class="aboutMeLabel" for="description">აღწერა</label>
      <textarea
        class="inputStayling descriptionClass"
        id="description${formCount}"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        required
      ></textarea>
      <span class="invalid hide"></span>
       
    </div>
  
    <div class="add-form-div">
      <a class="add-form" id="add-form${formCount}">მეტი გამოცდილების დამატება</a>
    </div>
    <button id="submit2" type="submit" class="absolutePosition"></button>
  </form>`;
        document.getElementById("form-container").appendChild(newForm);
      })();

      formCount++;
      localStorage.setItem("count", formCount);
      console.log(count, formCount, localStorage.getItem("count"));
    }
  });

  console.log(formCount, localStorage);

  form2Container.addEventListener("change", function (e) {
    e.preventDefault();
    let position, employee, startData, endData, description;
    if (e.target.id === "position") {
      position = e.target.value.trim();
      if (!position || position.length < 2) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("Tanamdeboba carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        return;
      }
    } else if (e.target.id === "employee") {
      employee = e.target.value.trim();
      if (!employee || employee.length < 2) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("position carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        return;
      }
    } else if (e.target.id === "startData") {
      console.log("print");
      startData = e.target.value.trim();

      if (!startData) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("Tanamdeboba carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        // e.target.classList.add("iconGreen");     *********** ალბათ ზედმეტი იქნება მწვანე იკონი
        e.target.classList.add("borderColorGreen");
        return;
      }
    } else if (e.target.id === "endData") {
      endData = e.target.value.trim();
      if (!endData) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("Tanamdeboba carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          "visible"
        );
        // e.target.classList.add("iconGreen");  *************gavutishot zedmetia
        e.target.classList.add("borderColorGreen");
        return;
      }
    } else if (e.target.id === "description") {
      description = e.target.value.trim();
      if (!description) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        console.log("Tanamdeboba carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.classList.remove("visible");
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        return;
      }
    }
  });
}

//  ***************  personal.html The end  ***************** //

//                   VALIDATIONS   The and//

// Data Variables //

let uName;
let lastName;
let userImage;
let aboutMe;
let mailBox;
let mobileNum;

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
          formData.append(
            `${dataKey}[${previewKey}][${item}]`,
            data[dataKey][previewKey][item]
          );
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

if (window.location.pathname === "/personal.html") {
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
}

//*********************************************** */

// Relload Handler

//for experience page//
if (window.location.pathname === "/experience.html") {
  window.addEventListener("load", function () {
    uName = localStorage.getItem("name");
    if (uName) {
      formData.append("name", uName);
      document.querySelector(".fName").classList.remove("hide");
      const updatedValue = uName.slice(0, 9);
      document.querySelector(".fName").innerText = updatedValue;
    }

    lastName = localStorage.getItem("surname");
    if (lastName) {
      formData.append("surname", lastName);
      document.querySelector(".lastName").classList.remove("hide");
      const updatedValue = lastName.slice(0, 16);
      document.querySelector(".lastName").innerText = updatedValue;
    }

    aboutMe = localStorage.getItem("about_me");
    if (aboutMe) {
      formData.append("about_me", aboutMe);
      document.querySelector(".aboutMes").classList.remove("hide");
      document.querySelector(".aboutMe").classList.remove("hide");
      document.querySelector(".aboutMes").innerText = aboutMe;
    }
    let imageData = localStorage.getItem("image");
    if (imageData) {
      let blob = dataURLtoBlob(imageData);
      formData.append("image", blob, "image.png");

      imagePreview.src = imageData;
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
      formData.set("email", email);
      document.querySelector(".mail").classList.remove("hide");
      document.querySelector(".mail").innerText = email;
      document.getElementsByClassName(".mail").value = email;
    }

    phone = localStorage.getItem("phone_number");
    if (phone) {
      formData.set("phone_number", phone);
      document.querySelector(".phone").classList.remove("hide");
      document.querySelector(".phone").innerText = phone;
      document.getElementsByClassName(".phone").value = phone;
    }

    for (let [key, value] of formData.entries()) {
      console.log(key + ": " + value, "sasa");
    }
    fetchData();
  });
}
//for personal page//

if (window.location.pathname === "/personal.html") {
  window.addEventListener("load", function () {
    uName = localStorage.getItem("name");
    if (uName) {
      document.getElementById("fName").value = uName;
      document.querySelector(".fName").classList.remove("hide");
      const updatedValue = uName.slice(0, 9);
      document.querySelector(".fName").innerText = updatedValue;
      formData.append("name", uName);
    }

    lastName = localStorage.getItem("surname");
    if (lastName) {
      document.getElementById("lastName").value = lastName;
      document.querySelector(".lastName").classList.remove("hide");
      const updatedValue = lastName.slice(0, 16);
      document.querySelector(".lastName").innerText = updatedValue;
      formData.append("surname", lastName);
    }

    aboutMe = localStorage.getItem("about_me");
    if (aboutMe) {
      document.getElementById("aboutMe").value = aboutMe;
      document.querySelector(".aboutMes").classList.remove("hide");
      document.querySelector(".aboutMe").classList.remove("hide");
      document.querySelector(".aboutMes").innerText = aboutMe;
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
      document.querySelector(".mail").classList.remove("hide");
      document.querySelector(".mail").innerText = email;
      document.getElementsByClassName(".mail").value = email;

      formData.set("email", email);
    }

    phone = localStorage.getItem("phone_number");
    if (phone) {
      document.getElementById("phone").value = phone;
      document.querySelector(".phone").classList.remove("hide");
      document.querySelector(".phone").innerText = phone;
      document.getElementsByClassName(".phone").value = phone;
      formData.set("phone_number", phone);
    }

    for (let [key, value] of formData.entries()) {
      console.log(key + ": " + value, "sasa");
    }
    fetchData();
  });
}

// liveStrem to the right side

if (window.location.pathname === "/personal.html") {
  form.addEventListener("input", function (e) {
    e.preventDefault();

    if (e.target.id === "fName") {
      const liveText = document.getElementById("fName").value.trim();
      const updatedValue = liveText.slice(0, 9);

      const liveName = document.querySelector(".fName");
      liveName.classList.remove("hide");
      liveName.innerText = updatedValue;
      console.log(liveName);
    } else if (e.target.id === "lastName") {
      const liveText = document.getElementById("lastName").value.trim();
      const updatedValue = liveText.slice(0, 16);

      const liveName = document.querySelector(".lastName");
      liveName.classList.remove("hide");
      liveName.innerText = updatedValue;
      console.log(liveName);
    } else if (e.target.id === "mail") {
      const liveText = document.getElementById("mail").value.trim();
      const liveName = document.querySelector(".mail");
      liveName.classList.remove("hide");
      liveName.innerText = liveText;
      console.log(liveName);
    } else if (e.target.id === "phone") {
      const liveText = document.getElementById("phone").value.trim();
      const liveName = document.querySelector(".phone");
      liveName.classList.remove("hide");
      liveName.innerText = liveText;
      console.log(liveName);
    } else if (e.target.id === "aboutMe") {
      const liveText = document.getElementById("aboutMe").value.trim();
      const liveName = document.querySelector(".aboutMes");
      const aboutmeTitle = document.querySelector(".aboutMe");
      aboutmeTitle.classList.remove("hide");
      liveName.classList.remove("hide");
      liveName.innerText = liveText;
      console.log(liveName);
    }
  });
}
// ************************//

// updateLiveStreamofData

if (window.location.pathname === "/personal.html") {
  form.addEventListener("change", function (e) {
    if (e.target.id === "fName" && !e.target.value) {
      const liveName = document.querySelector(".fName");
      liveName.classList.add("hide");
      liveName.innerText = "";
      console.log("ააააააააააააააააააააააააააააააააააა");
    } else if (e.target.id === "lastName" && !e.target.value) {
      const liveName = document.querySelector(".lastName");
      liveName.classList.add("hide");
      liveName.innerText = "";
      console.log(liveName);
    } else if (e.target.id === "mail" && !e.target.value) {
      const liveName = document.querySelector(".mail");
      liveName.classList.add("hide");
      liveName.innerText = "";
      console.log(liveName);
    } else if (e.target.id === "phone" && !e.target.value.trim()) {
      const liveName = document.querySelector(".phone");
      liveName.classList.add("hide");
      liveName.innerText = "";
      console.log(liveName);
    } else if (e.target.id === "aboutMe" && e.target.value.trim() === "") {
      const liveName = document.querySelector(".aboutMes");
      const aboutmeTitle = document.querySelector(".aboutMe");
      aboutmeTitle.classList.add("hide");
      liveName.classList.add("hide");
      liveName.innerText = "";
      console.log(liveName);
    }
  });
}

//************************** */
