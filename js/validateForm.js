function validateForm () {

    console.log('sdfsd');

    let nameVal = contactForm.name.value;
    let emailVal = contactForm.email.value;
    let mobileVal = contactForm.mobile.value;
    let countryVal = contactForm.country.value;
    let genderVal = contactForm.gender.value;
    let hobbyVal = contactForm.hobbies.value;

    console.log(nameVal);
    console.log(emailVal);
    console.log(mobileVal);
    console.log(countryVal);
    console.log(genderVal);
    console.log(hobbyVal);



    if(nameVal === ''){
        document.getElementById("nameErr").innerHTML = "please enter valid name."
    }else{
        document.getElementById("nameErr").innerHTML = ""

    }

    if(emailVal === ''){
        document.getElementById("emailErr").innerHTML = "please enter valid email."
    }else{
        document.getElementById("emailErr").innerHTML = ""

    }

    if(mobileVal === ''){
        document.getElementById("mobileErr").innerHTML = "please enter valid mobile No."
    }else{
        document.getElementById("mobileErr").innerHTML = ""

    }

    if(countryVal === '0'){
        document.getElementById("countryErr").innerHTML = "please enter valid country."
    }else{
        document.getElementById("countryErr").innerHTML = ""

    }

    if(genderVal === ''){
        document.getElementById("genderErr").innerHTML = "please enter valid gender."
    }else{
        document.getElementById("genderErr").innerHTML = ""

    }
    

    // if(hobbyVal === ''){
    //     document.getElementById("hobbyErr").innerHTML = "please select valid hobby."
    // }else{
    //     document.getElementById("hobbyErr").innerHTML = ""

    // }
    

    return false;

}