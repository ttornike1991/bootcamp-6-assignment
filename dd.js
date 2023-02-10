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