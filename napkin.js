const experiences = {};
   
// loop through localStorage to extract properties
for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
if (key.startsWith("position")) {
  const index = key.substring("position".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].position = localStorage.getItem(`position${index}`);
} else if (key.startsWith("employee")) {
  const index = key.substring("employer".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].employer = localStorage.getItem(`employee${index}`);
} else if (key.startsWith("startData")) {
  const index = key.substring("startData".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].start_date = localStorage.getItem(`startData${index}`);
} else if (key.startsWith("endData")) {
  const index = key.substring("endData".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].due_date = localStorage.getItem(`endData${index}`);
} else if (key.startsWith("description")) {
  const index = key.substring("description".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].description = localStorage.getItem(`description${index}`);
}
 

}

// log the generated experiences
console.log(experiences);
















//აწდწადჯაწჰდწაჯკჰდწკაჯჰ


const form = document.getElementById("form-personal-info");
const formssss = document.querySelector(".experience-info");
const form2 = document.getElementById("form-personal-info2");
const addFormBut = document.querySelectorAll(".add-form");
const imageInput = document.getElementById("uploadButton");
const imagePreview = document.getElementById("imagePreview");
const formDiv = document.getElementById("form-container");
const form2Container = document.getElementById("experience-info");

// Data Variables //

let uName;
let lastName;
let userImage;
let aboutMe;
let mailBox;
let mobileNum;

// arrow key localstorage clear and go initial page
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

  document.getElementById("file-input-button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("uploadButton").click();
  });

  form.addEventListener("change", function (e) {
    e.preventDefault();
    let firstName, lastName, email, mobile;
    aboutMe;
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
        localStorage.setItem(`name`, "");
        console.log("saxeli arasworia");
        return;
      } else {
        firstName = e.target.value;

        localStorage.setItem("name", firstName);
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
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
        localStorage.setItem(`surname`, "");
        console.log("gvari arasworia");
        return;
      } else {
        localStorage.setItem("surname", lastName);
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
        localStorage.setItem(`email`, "");
        console.log("email is invalid");
        return;
      } else {
        localStorage.setItem("email", email);
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
        localStorage.setItem(`phone_number`, "");

        console.log("mobile number is invalid");
        return;
      } else {
        localStorage.setItem("phone_number", mobile);
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.classList.remove("borderColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("borderColorGreen");
        e.target.classList.add("iconGreen");
      }
    } else if (e.target.id === "aboutMe") {
      aboutMe = e.target.value.trim();
      if (!aboutMe) {
        let defaultValue = "";
        e.target.value = defaultValue;
        localStorage.setItem(`about_me`, "");
      } else {
        localStorage.setItem("about_me", aboutMe);
      }
    } else if (e.target.id === "uploadButton") {
      let reader = new FileReader();
      reader.onload = function () {
        localStorage.setItem("image", reader.result);

        console.log(e.target.value);
        imagePreview.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);

      dataGenerator();
      console.log(e.target.value);
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
let localCounter = localStorage.getItem("count");
localCounter = parseInt(localCounter);

if (localCounter === null || localCounter === undefined || isNaN(localCounter)) {
  localCounter = 0;
} else {
  localCounter = parseInt(localCounter);
}
localStorage.setItem("count", localCounter.toString());
if (window.location.pathname === "/experience.html") {
  formssss.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-form")) {
      let x = localStorage.getItem("count");
      let formCount = +x;
      formCount++;
      localStorage.setItem("count", formCount.toString());

      if (e.target.classList.contains("add-form")) {
        (function () {
          let newForm = document.createElement("div");

          newForm.innerHTML = `<form
    action=""
    class="experience-info-form newForm${formCount}"
    id="form-personal-info "
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
      <a class="add-form" id="add-form">მეტი გამოცდილების დამატება</a>
    </div>
    <button id="submit" type="submit" class="absolutePosition hiddenButton"></button>
    </form>`;

          let outputform = document.createElement("div");

          outputform.innerHTML = `
          <div class="hide">dwadwadwa</div>
          <div  id="OnewForm${formCount}">
    <div class="hide borderTOP borderTOPs${formCount}"></div>
    <div class="displayFlex">
      <h4 class="hide position-output marginBottom8px position${formCount}" name="xxxx">
        
      </h4>
      <h4 class="hide employee-output employee${formCount}" name="xxxx"> </h4>
    </div>
    <div class="displayFlex data-output">
      <h5 class="hide startData-output startData${formCount}" name="xxxx"> </h5>
      <h5 class="hide  justHypen justHypen${formCount}">-</h5>
      <h5 class="hide endData-output endData${formCount}" name="xxxx"> </h5>
    </div>
    <div class="hide description-output description${formCount}" name="xxxx">
      
    </div>
    </div>`;

          localStorage.setItem(`newForm${formCount}`, newForm.innerHTML);
          localStorage.setItem(`OnewForm${formCount}`, outputform.innerHTML);
          document.getElementById("form-container").appendChild(newForm);
        })();
        console.log(formCount);

        console.log(localStorage);
      }
    }
  });

  // dynamicaly adding forms and checking emptycase

  document.getElementById("submitExperience").addEventListener("click", function (e) {
    e.preventDefault();

    var forms = document.getElementsByClassName("experience-info-form");
    for (var i = 0; i < forms.length; i++) {
      var formElements = forms[i].elements;
      var formHasValues = false;

      for (var j = 0; j < formElements.length; j++) {
        if (formElements[j].value.trim() !== "") {
          formHasValues = true;
        }
      }

      if (!formHasValues && i !== 0) {
        console.log("Form is empty, skipping validation.");
        continue;
      }

      if (!forms[i].checkValidity()) {
        forms[i].reportValidity();
      } else {
        forms[i].click();
        console.log("Form is valid, submitting...");
      }
    }
  });
}
if (window.location.pathname === "/experience.html") {
  form2Container.addEventListener("change", function (e) {
    e.preventDefault();
    let formCount = localStorage.getItem("count");
    formCount = parseInt(formCount);

    for (let i = 0; i <= formCount; i++) {
      let position, employee, startData, endData, description;
      if (e.target.id === `position${i}`) {
        position = e.target.value.trim();
        if (!position || position.length < 2) {
          e.target.classList.remove("iconGreen");
          e.target.classList.remove("borderColorGreen");
          e.target.classList.add("borderColorRed");
          e.target.previousElementSibling.classList.add("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.add("visible");
          let defaultValue = "";
          e.target.value = defaultValue;
          localStorage.setItem(`position${i}`, "");
          console.log("Tanamdeboba carielia ");
          return;
        } else {
          e.target.classList.remove("borderColorRed");
          e.target.previousElementSibling.classList.remove("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
          e.target.classList.add("iconGreen");
          e.target.classList.add("borderColorGreen");
          localStorage.setItem(`position${i}`, position);
          return;
        }
      } else if (e.target.id === `employee${i}`) {
        employee = e.target.value.trim();
        if (!employee || employee.length < 2) {
          e.target.classList.remove("iconGreen");
          e.target.classList.remove("borderColorGreen");
          e.target.classList.add("borderColorRed");
          e.target.previousElementSibling.classList.add("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.add("visible");
          let defaultValue = "";
          e.target.value = defaultValue;
          localStorage.setItem(`employee${i}`, "");
          console.log("position carielia ");
          return;
        } else {
          e.target.classList.remove("borderColorRed");
          e.target.previousElementSibling.classList.remove("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
          e.target.classList.add("iconGreen");
          e.target.classList.add("borderColorGreen");
          localStorage.setItem(`employee${i}`, employee);
          return;
        }
      } else if (e.target.id === `startData${i}`) {
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
          localStorage.setItem(`startData${i}`, "");
          console.log("Tanamdeboba carielia ");
          return;
        } else {
          e.target.classList.remove("borderColorRed");
          e.target.previousElementSibling.classList.remove("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
          // e.target.classList.add("iconGreen");     *********** ალბათ ზედმეტი იქნება მწვანე იკონი
          e.target.classList.add("borderColorGreen");
          localStorage.setItem(`startData${i}`, startData);
          return;
        }
      } else if (e.target.id === `endData${i}`) {
        endData = e.target.value.trim();
        if (!endData) {
          e.target.classList.remove("iconGreen");
          e.target.classList.remove("borderColorGreen");
          e.target.classList.add("borderColorRed");
          e.target.previousElementSibling.classList.add("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.add("visible");
          let defaultValue = "";
          e.target.value = defaultValue;
          localStorage.setItem(`endData${i}`, "");
          console.log("Tanamdeboba carielia ");
          return;
        } else {
          e.target.classList.remove("borderColorRed");
          e.target.previousElementSibling.classList.remove("labelColorRed");
          e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
          // e.target.classList.add("iconGreen");  *************gavutishot zedmetia
          e.target.classList.add("borderColorGreen");
          localStorage.setItem(`endData${i}`, endData);
          return;
        }
      } else if (e.target.id === `description${i}`) {
        description = e.target.value.trim();
        if (!description) {
          e.target.classList.remove("iconGreen");
          e.target.classList.remove("borderColorGreen");
          e.target.classList.add("borderColorRed");
          e.target.previousElementSibling.classList.add("labelColorRed");
          e.target.nextElementSibling.classList.add("visible");
          let defaultValue = "";
          e.target.value = defaultValue;
          localStorage.setItem(`description${i}`, "");
          console.log("Tanamdeboba carielia ");
          return;
        } else {
          e.target.classList.remove("borderColorRed");
          e.target.previousElementSibling.classList.remove("labelColorRed");
          e.target.nextElementSibling.classList.remove("visible");
          e.target.classList.add("iconGreen");
          e.target.classList.add("borderColorGreen");
          console.log("aqvar");
          localStorage.setItem(`description${i}`, description);
          return;
        }
      }
    }
  });
}

//  ***************  description.html The end  ***************** //

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

// Relload Handler

//for experience page//

if (window.location.pathname === "/experience.html") {
  window.addEventListener("load", function () {
    // hendel  added forms

    const formContainer = document.getElementById("form-container");
    const getOuter = document.getElementById("getOUTER");

    const formKeys = Object.keys(localStorage).filter((key) => key.startsWith("newForm"));
    const outputKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("OnewForm")
    );

    formKeys.sort();
    outputKeys.sort();

    let formCount = localStorage.getItem("count");
    formCount = parseInt(formCount, 10);

    for (let i = 0; i <= formCount; i++) {
      const formKey = `newForm${i}`;
      const outputKey = `OnewForm${i}`;

      if (formKeys.includes(formKey)) {
        const savedData = localStorage.getItem(formKey);
        if (savedData) {
          const container = document.createElement("div");
          container.innerHTML = savedData;
          formContainer.appendChild(container);
        }
      }
      if (outputKeys.includes(outputKey)) {
        const saveOUTPUT = localStorage.getItem(outputKey);
        if (saveOUTPUT) {
          const getOuterElement = document.createElement("div");
          getOuterElement.innerHTML = saveOUTPUT;
          getOuter.appendChild(getOuterElement);
        }
      }
    }

    const experienceOutputDiv = document.querySelector(".experience-output-div");

    const inputs = form2Container.querySelectorAll("input, textarea");

    inputs.forEach((input, index) => {
      const id = input.id;
      let value = input.value;
      let update1 = "";
      let update2 = "";
      for (let i = 0; i <= inputs.length; i++) {
        let experienceTitle = experienceOutputDiv.querySelector(`.experience-output`);
        let experienceTitleclassList = experienceTitle ? experienceTitle.classList : [];
        let justHypen = experienceOutputDiv.querySelector(`.justHypen${i}`) || [];
        let justHypenclassList = justHypen ? justHypen.classList : [];
        let employeeOutput = experienceOutputDiv.querySelector(`.employee${i}`);
        let positionOutput = experienceOutputDiv.querySelector(`.position${i}`);
        let startDataOutput = experienceOutputDiv.querySelector(`.startData${i}`);
        let endDataOutput = experienceOutputDiv.querySelector(`.endData${i}`);
        let descriptionOutput = experienceOutputDiv.querySelector(`.description${i}`);
        let forms = document.querySelector(`.newForm${i}`);
        if (forms) {
          if (
            id === positionOutput.classList[3] &&
            localStorage.getItem(`position${i}`)
          ) {
            positionValue = localStorage.getItem(`position${i}`);
            positionOutput.classList.replace("hide", "chita-chita");
            experienceTitle.classList.replace("hide", "chita-chita");
            update1 = positionValue.substring(0, 25) + ",";

            value = update1;
          }
          if (
            id === employeeOutput.classList[2] &&
            localStorage.getItem(`employee${i}`)
          ) {
            employeeValue = localStorage.getItem(`employee${i}`);
            employeeOutput.classList.replace("hide", "chita-chita");

            experienceTitleclassList.replace("hide", "chita-chita");
            update1 = employeeValue.substring(0, 25);

            value = update1;
          }
          if (
            id === startDataOutput.classList[2] &&
            localStorage.getItem(`startData${i}`)
          ) {
            startDataValue = localStorage.getItem(`startData${i}`);
            startDataOutput.classList.replace("hide", "chita-chita");
            experienceTitle.classList.replace("hide", "chita-chita");

            update1 = startDataValue.substring(0, 25);
            value = update1;
          }
          if (id === endDataOutput.classList[2] && localStorage.getItem(`endData${i}`)) {
            endDataValue = localStorage.getItem(`endData${i}`);

            endDataOutput.classList.replace("hide", "chita-chita");

            justHypenclassList.replace("hide", "chita-chita");
            experienceTitleclassList.replace("hide", "chita-chita");

            update1 = endDataValue.substring(0, 25);
            value = update1;
          }
          if (
            id === descriptionOutput.classList[2] &&
            localStorage.getItem(`description${i}`)
          ) {
            descriptionValue = localStorage.getItem(`description${i}`);
            descriptionOutput.classList.replace("hide", "chita-chita");
            experienceTitleclassList.replace("hide", "chita-chita");

            update2 = descriptionValue.slice(0, 400);
            value = update2;
          }
        }
      }

      const div = document.querySelector(`.${id}`);
      if (div) {
        div.innerHTML = value;
      }
    });

    inputs.forEach((input) => {
      const id = input.id;
      Object.entries(localStorage).forEach(([key, value]) => {
        if (key === id) {
          input.value = value;
        }
      });
    });
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
      formData.append("email", email);
      document.querySelector(".mail").classList.remove("hide");
      document.querySelector(".mail").innerText = email;
      document.getElementsByClassName(".mail").value = email;
    }

    phone = localStorage.getItem("phone_number");
    if (phone) {
      formData.append("phone_number", phone);
      document.querySelector(".phone").classList.remove("hide");
      document.querySelector(".phone").innerText = phone;
      document.getElementsByClassName(".phone").value = phone;
    }

    for (let [key, value] of formData.entries()) {
      console.log(key + ": " + value, "sasa");
    }

    // const container = document.getElementById("getOUTER");
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   if (key.startsWith("OnewForm")) {
    //     const divElement = localStorage.getItem(key);
    //     const tempDiv = document.createElement("div");
    //     tempDiv.innerHTML = divElement;

    //     container.appendChild(tempDiv);
    //   }
    // }
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

    fetchData();
  });
}

//                           liveStrem to the right side

//   personal.html

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

//waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  handler of right Output persistance         aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

if (window.location.pathname === "/personal.html") {
  window.addEventListener("load", function () {
    console.log(localStorage.getItem("position1"), "ss");
    let getOUTER = document.querySelector(".getOUTER");
    for (let i = 0; i < localStorage.length; i++) {
      try {if( localStorage.getItem(`OnewFormHTML${i}`)){
        title=getOUTER.querySelector('.experience-output ')
        title.classList.replace('hide', 'visible')
      }
        let storedOuterHTML = localStorage.getItem(`OnewFormHTML${i}`);

        var div = document.createElement("myDiv");
        div.innerHTML = storedOuterHTML;
        getOUTER.appendChild(div);
      } catch {
        console.log("Meti agar aris ");
      }
    }
  });
}

// experience html
if (window.location.pathname === "/experience.html") {
  formDiv.addEventListener("input", function (e) {
    const experienceOutputDiv = document.querySelector(".experience-output-div");

    let formCount = localStorage.getItem("count");
    formCount = parseInt(formCount);
    const inputs = form2Container.querySelectorAll("input, textarea");
    inputs.forEach((input, index) => {
      const id = input.id;
      let value = input.value;
      let update1 = "";
      let update2 = "";
      for (let i = 0; i <= formCount; i++) {
        let experienceTitle = experienceOutputDiv.querySelector(`.experience-output`);
        let justHypen = experienceOutputDiv.querySelector(`.justHypen${i}`);

        let employeeOutput = experienceOutputDiv.querySelector(`.employee${i}`);
        let positionOutput = experienceOutputDiv.querySelector(`.position${i}`);
        let startDataOutput = experienceOutputDiv.querySelector(`.startData${i}`);
        let endDataOutput = experienceOutputDiv.querySelector(`.endData${i}`);
        let descriptionOutput = experienceOutputDiv.querySelector(`.description${i}`);
        let forms = document.querySelector(`.newForm${i}`);
        if (forms) {
          try{ if (id === positionOutput.classList[3] && input.value) {
            positionOutput.classList.replace("hide", "chita-chita");
            update1 = value.substring(0, 25) + ",";
            experienceTitle.classList.replace("hide", "chita-chita");
            value = update1;
          }}catch{
            console.log('pawa avcdi');
          }
         try{
          if (id === employeeOutput.classList[2] && input.value) {
            employeeOutput.classList.replace("hide", "chita-chita");
            experienceTitle.classList.replace("hide", "chita-chita");

            update1 = value.substring(0, 25);

            value = update1;
          }}catch{
            console.log('pawa avcdi');
          }
          try{
         
            startDataOutput.classList.replace("hide", "chita-chita");
            experienceTitle.classList.replace("hide", "chita-chita");
            update1 = value.substring(0, 25);
            value = update1;
          }catch{
            console.log('pawa avcdi');
          }
          try{
           
            endDataOutput.classList.replace("hide", "chita-chita");
             
              justHypen.classList.replace("hide", "chita-chita");
           } catch (e) {
            console.log('pawa avcdi');
            }

          
          
          try{
        
            descriptionOutput.classList.replace("hide", "chita-chita");
            experienceTitle.classList.replace("hide", "chita-chita");
            update2 = value.slice(0, 400);
            value = update2;
          }catch{
            console.log('pawa avcdi');
          }
        }
        try{
          let OnewFormHTML = document.querySelector(`#OnewForm${i}`).outerHTML;
        localStorage.setItem(`OnewFormHTML${i}`, OnewFormHTML);
        }catch{
          console.log("shevagdeb");
        }
      }

      const div = document.querySelector(`.${id}`);
      if (div) {
        div.innerHTML = value;
      }
    
    });
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

