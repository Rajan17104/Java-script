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
        document.getElementById("nameErr").innerHTML = "please enter name."
    }else{
        let regex = /^[a-zA-Z ]{2,30}$/;

        if(regex.test(nameVal)){
            document.getElementById("nameErr").innerHTML = ""
        }else{
            document.getElementById("nameErr").innerHTML = "please enter valid name."   
        }
       

    }


    if(emailVal === ''){
        document.getElementById("emailErr").innerHTML = "please enter email."
    }else{
       let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(regex.test(emailVal)){
            document.getElementById("emailErr").innerHTML = ""
        }else{
            document.getElementById("emailErr").innerHTML = "please enter valid email."   

        }

    }


    if(mobileVal === ''){
        document.getElementById("mobileErr").innerHTML = "please enter mobile No."
    }else{
    
        if (/^\d{10}$/.test(mobileVal)) {
            document.getElementById("mobileErr").innerHTML = ""     
        } else {
            document.getElementById("mobileErr").innerHTML = "please enter valid mobile No."   
        }

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
    

    if(hobbyVal === ''){
        document.getElementById("hobbyErr").innerHTML = "please select valid hobby."
    }else{
        document.getElementById("hobbyErr").innerHTML = ""

    }
    

    return false;

}