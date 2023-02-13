const form = document.getElementById("form-personal-info");
const formssss = document.querySelector(".experience-info");
const form2 = document.getElementById("form-personal-info2");
const addFormBut = document.querySelectorAll(".add-form");
const imageInput = document.getElementById("uploadButton");
const imagePreview = document.getElementById("imagePreview");
const formDiv = document.getElementById("form-container");
const form2Container = document.getElementById("experience-info");

// arrow key localstorage clear and go initial page
document.querySelector(".leftward-arrow").addEventListener("click", () => {
  localStorage.clear();
  console.log(localStorage);
});

// Fetch Degrees

async function getDegree2(dd) {
  try {
    const response = await fetch("https://resume.redberryinternship.ge/api/degrees");
    const data = await response.json();
    localStorage.setItem("degrees", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}
async function main() {
  await getDegree2();
  if (localStorage.getItem("degrees")) {
    local = JSON.parse(localStorage.getItem("degrees"));

    selectElements = document.getElementsByTagName("select");

    for (let i of selectElements) {
      var dropdown = document.querySelector(`#${i.id}`);

      for (let j in local) {
        var option = document.createElement("option");

        dropdown.appendChild(option);
        option.value = local[j].id;
        option.text = local[j].title;
      }
    }
  }
}
main();
//                          VALIDATIONS   //

//*****************//
//*education.html*//
//*****************//
let localCounter = localStorage.getItem("count2");
localCounter = parseInt(localCounter);

if (localCounter === null || localCounter === undefined || isNaN(localCounter)) {
  localCounter = 0;
} else {
  localCounter = parseInt(localCounter);
}
localStorage.setItem("count2", localCounter.toString());

formssss.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-form")) {
    let x = localStorage.getItem("count2");
    let formCount = +x;
    formCount++;
    localStorage.setItem("count2", formCount.toString());

    if (e.target.classList.contains("add-form")) {
      (function () {
        let newForm = document.createElement("div");
        newForm.innerHTML = `<form
    action=""
    class="experience-info-form EdunewForm${formCount}"
    id="form-personal-info "
    >
    <div
      class="displayFlex flexColumn position-div relative marginBottom"
    >
      <label for="uni${formCount}">თანამდებობა</label>
      <input
        class="inputStayling position-class"
        type="text"
        id="uni${formCount}"
        placeholder="სასწავლებელი"
        required
      />
      <h6>მინიმუმ 2 სიმბოლო</h6>
      <span class="invalid hide"></span>
    </div>
    <div class="displayFlex spaceBetween width-100 dataField">
      <div class="displayFlex flexColumn name-div relative">
      <label for="degree${formCount}">ხარისხი</label>
                    <select id="degree${formCount}" name="cars" class="inputStayling paddingRight  " placeholder="აირჩიეთ ხარისხი" required>
                    <option  value="0"   disabled  selected>აირჩიეთ ხარისხი</option>
                    </select>
        <h6></h6>
        <span class="invalid hide"></span>
      </div>
      <div class="displayFlex flexColumn endDataDiv relative">
        <label for="EendData${formCount}">დამთავრების რიცხვი</label>
        <input
          class="inputStayling paddingRight"
          type="date"
          id="EendData${formCount}"
          name="trip-start"
          required
        />
        <h6></h6>
        <span class="invalid hide"></span>
      </div>
    </div>
    <div class="displayFlex descriptionDiv flexColumn relative">
      <label class="aboutMeLabel" for="Edescription${formCount}">აღწერა</label>
      <textarea
        class="inputStayling descriptionClass"
        id="Edescription${formCount}"
        placeholder="განათლების აღწერა"
        required
      ></textarea>
      <span class="invalid hide"></span>
       
    </div>
  
    <div class="add-form-div">
      <a class="add-form" id="add-form">სხვა სასწავლებლის დამატება</a>
    </div>
    <button id="submit" type="submit" class="absolutePosition hiddenButton"></button>
    </form>`;

        let outputform = document.createElement("div");

        outputform.innerHTML = `
          <div class="hide">dwadwadwa</div>
          <div  id="EnewForm${formCount}">
    <div class="hide borderTOP borderTOPs${formCount}"></div>
    <div class="displayFlex">
      <h4 class="hide position-output marginBottom8px uni${formCount}" name="xxxx">
        
      </h4>
      <h4 class="hide employee-output degree${formCount}"  ></h4>
    </div>
    <div class="displayFlex data-output ">
    
      <h5 class="hide endData-output EendData${formCount}" name="xxxx"> </h5>
    </div>
    <div class="hide description-output Edescription${formCount}" name="xxxx">
      
    </div>
    </div>`;

        localStorage.setItem(`EdunewForm${formCount}`, newForm.innerHTML);
        localStorage.setItem(`EnewForm${formCount}`, outputform.innerHTML);
        document.getElementById("form-container").appendChild(newForm);
        document.getElementById("getOUTER").appendChild(outputform);
        location.reload();
      })();
      console.log(formCount);

      console.log(localStorage);
    }
  }
});

// dynamicaly adding forms and checking emptycase

document.getElementById("submitExperience").addEventListener("click", function (e) {
  e.preventDefault();

  let forms = document.getElementsByClassName("experience-info-form");
  let formsArray = Array.from(forms);

  for (var i = 0; i < formsArray.length; i++) {
    console.log(i);

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
      window.location.href = "/finishedcv.html";
    }
  }
});

form2Container.addEventListener("change", function (e) {
  e.preventDefault();
  let formCount = localStorage.getItem("count2");
  formCount = parseInt(formCount);

  for (let i = 0; i <= formCount; i++) {
    let uni, degree, EendData, Edescription;
    if (e.target.id === `uni${i}`) {
      uni = e.target.value.trim();
      if (!uni || uni.length < 2) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        localStorage.setItem(`uni${i}`, "");

        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        localStorage.setItem(`uni${i}`, uni);
        return;
      }
    } else if (e.target.id === `degree${i}`) {
      degree = e.target.value.trim();

      if (!degree) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        localStorage.setItem(`degree${i}`, "");

        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        // e.target.classList.add("iconGreen");     *********** ალბათ ზედმეტი იქნება მწვანე იკონი
        e.target.classList.add("borderColorGreen");
        localStorage.setItem(`degree${i}`, degree);
        return;
      }
    } else if (e.target.id === `EendData${i}`) {
      EendData = e.target.value.trim();
      if (!EendData) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        localStorage.setItem(`EendData${i}`, "");

        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.nextElementSibling.classList.remove("visible");
        // e.target.classList.add("iconGreen");  *************gavutishot zedmetia
        e.target.classList.add("borderColorGreen");
        localStorage.setItem(`EendData${i}`, EendData);
        return;
      }
    } else if (e.target.id === `Edescription${i}`) {
      Edescription = e.target.value.trim();
      if (!Edescription) {
        e.target.classList.remove("iconGreen");
        e.target.classList.remove("borderColorGreen");
        e.target.classList.add("borderColorRed");
        e.target.previousElementSibling.classList.add("labelColorRed");
        e.target.nextElementSibling.classList.add("visible");
        let defaultValue = "";
        e.target.value = defaultValue;
        localStorage.setItem(`Edescription${i}`, "");
        console.log("Tanamdeboba carielia ");
        return;
      } else {
        e.target.classList.remove("borderColorRed");
        e.target.previousElementSibling.classList.remove("labelColorRed");
        e.target.nextElementSibling.classList.remove("visible");
        e.target.classList.add("iconGreen");
        e.target.classList.add("borderColorGreen");
        console.log("aqvar");
        localStorage.setItem(`Edescription${i}`, Edescription);
        return;
      }
    }
  }
});

//                                                              *********** Relload Handler ****************

// hendel  added forms

const formContainer = document.getElementById("form-container");
const getOuter = document.querySelector("#getOUTER");

const formKeys = Object.keys(localStorage).filter((key) => key.startsWith("EdunewForm"));
const outputKeys = Object.keys(localStorage).filter((key) => key.startsWith("EnewForm"));

formKeys.sort();
outputKeys.sort();
console.log(formKeys, outputKeys);
let formCount = localStorage.getItem("count2");
formCount = parseInt(formCount);

for (let i = 0; i <= formCount; i++) {
  const formKey = `EdunewForm${i}`;
  const outputKey = `EnewForm${i}`;

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

//                           liveStrem to the right side
document.addEventListener("DOMContentLoaded", function () {
  formDiv.addEventListener("input", function (e) {
    console.log(e.target);
    let valuedegree;
    const newFormElements = document.querySelectorAll("[id^='EnewForm']");

    const experienceOutputDiv = document.querySelector(".experience-output-div");
    const inputs = form2Container.querySelectorAll("input, textarea, select");
    const experienceTitle = experienceOutputDiv.querySelector(`.experience-output`);
    console.log("sssawwwwwwww", "dddddddddddddddddddddddddddddddddddddd", e.target.id);
    inputs.forEach((item, index) => {
      for (let i = 0; i < inputs.length; i++) {
        let uniOutput = document.querySelector(`.${e.target.id}`);
        let degreeOutput = document.querySelector(`.${e.target.id}`);
        let endDataOutput = document.querySelector(`.${e.target.id}`);
        let descriptionOutput = document.querySelector(`.${e.target.id}`);
        // console.log(degreeOutput);
        if (uniOutput && uniOutput.classList[3] === e.target.id) {
          uniOutput.innerText = e.target.value;
          uniOutput.classList.replace("hide", "chita-chita");
          experienceTitle.classList.replace("hide", "chita-chita");
        }
        if (degreeOutput && degreeOutput.classList[2] === e.target.id) {
          let idx = e.target.value;
          // console.log(e.target.value);
          update1 = JSON.parse(localStorage.getItem("degrees"));
          valuedegree = update1[idx - 1].title;
          console.log(valuedegree);
          degreeOutput.innerHTML = valuedegree.toString();
          degreeOutput.classList.replace("hide", "chita-chita");
          experienceTitle.classList.replace("hide", "chita-chita");
        }
        if (endDataOutput && endDataOutput.classList[2] === e.target.id) {
          endDataOutput.classList.replace("hide", "chita-chita");
          experienceTitle.classList.replace("hide", "chita-chita");
          endDataOutput = e.target.value;
        }
        if (descriptionOutput && descriptionOutput.classList[2] === e.target.id) {
          descriptionOutput.classList.replace("hide", "chita-chita");
          experienceTitle.classList.replace("hide", "chita-chita");

          descriptionOutput.innerText = e.target.value;
        }
      }
    });
  });
});

// ************************//
