const form = document.getElementById('form-personal-info')
console.log(form)


form.addEventListener("change", function(e) {
    e.preventDefault()
    let firstName, lastName;
    let span=document.createElement('span')
    if (e.target.id === "fName") {
        console.log("aq xar")
        firstName = e.target.value.trim();
        let GeorgianChars = /^[\u10A0-\u10FF]+$/;
        if (!firstName || firstName.length < 2 || !GeorgianChars.test(firstName)) {
            e.target.parentNode.appendChild(span);
            e.target.previousElementSibling.classList.add('labelColorRed')
            e.target.classList.add('borderColorRed')
            span.classList.add("invalid");
            console.log('saxeli arasworia')
            return;
        }
    } else if (e.target.id === "lastName") {
        lastName = e.target.value.trim();
        let GeorgianChars = /^[\u10A0-\u10FF]+$/;
        if (!lastName || lastName.length < 2 || !GeorgianChars.test(lastName)) {
            e.target.previousElementSibling.classList.add('labelColorRed')
            e.target.parentNode.appendChild(span);
            e.target.classList.add('borderColorRed')
            span.classList.add("invalid");
            console.log('gvari arasworia')
            return;
        }
    }
    else if (e.target.id === "mail") {
        email = e.target.value.trim();
        let emailRegex = /^\w+@redberry.ge$/;
        if (!emailRegex.test(email)) {
            e.target.previousElementSibling.classList.add('labelColorRed')
            e.target.parentNode.appendChild(span);
            e.target.classList.add('borderColorRed')
            span.classList.add("invalid");
            console.log('email is invalid');
            return;
        }
    } else if (e.target.id === "phone") {
        mobile = e.target.value.trim();
        console.log(mobile)
        let mobileRegex = /^\+995\d{3}\d{2}\d{2}\d{2}$/;
        if (!mobileRegex.test(mobile)) {
            e.target.parentNode.appendChild(span);
            e.target.previousElementSibling.classList.add('labelColorRed')
            e.target.classList.add('borderColorRed')
            span.classList.add("invalid");
            console.log('mobile number is invalid');
            return;
        }
    }
});

form.addEventListener("click", function(e) {
    if (e.target.id === "fName" || e.target.id === "lastName") {
        console.log(e.target.value)
    if (e.target.value) {
    let defaultValue = "";
    e.target.value = defaultValue;
    }
    }
});

