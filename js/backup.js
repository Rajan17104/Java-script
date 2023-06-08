const printErr=(id,msg)=>{

    document.getElementById(id).innerHTML=msg

}
const validateForm =()=>{

    let nameval=contactForm.name.value;
    let emailval=contactForm.email.value;
    let mobilenum=contactForm.mobile.value;
    let country=contactForm.country.value;
    let gender=contactForm.gender.value;
    let hobby=contactForm.hobbies;

    // console.log(hobby[0].value);

    let nameErr = true;
    let emailErr = true;
    let mobileErr = true;
    let countryErr = true;
    let genderErr = true;
    let hobbyErr = true;


    let temp =[];

    console.log(hobby[0].checked);

    for (let i=0; i < hobby.length; i++) {

        console.log(
            "jhjh"
        );
        if(hobby[i].checked){
            temp.push(hobby[i].value);
        }
           
    }

    console.log(temp);

    if(temp.length >= 2){
        printErr('hobbyErr','');
        hobbyErr = false;
    }else{
        printErr('hobbyErr','Please select at least 2 hobby.');
    }


    
    if(nameval===''){
        printErr('nameErr','Please Enter Name')

    }else{

        let regex = /^[a-zA-Z ]{2,30}$/;
        if(regex.test(nameval)){
            printErr('nameErr','');
            nameErr = false;
        }else{
            printErr('nameErr','Please Enter valid Name')

        }

 
    }
    // -------------------------------------------------------------------------

    if(emailval===''){
        printErr('emailErr','Please Enter Email')

    }else{

       let emilregx= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
       if(emilregx.test(emailval)){
        printErr('emailErr','');
        emailErr = false;
       }else{
        printErr('emailErr','Please Enter Valid Email')

       }
       
 
    }
    // -------------------------------------------------------------------------

    if(mobilenum===''){
        printErr('mobileErr','Please Enter MobileNumber')

    }else{

        let mobileregx= /^\d{10}$/;

        if(mobileregx.test(mobilenum)){
            printErr('mobileErr','');
            mobileErr = false;

        }else{
            printErr('mobileErr','Please Enter Valid MobileNumber')

        }

 
    }
    // ------------------------------------------------------------------------------------------

    if(country==='0'){
        printErr('countryErr','Please Select Country')


    }else{
        printErr('countryErr','')
        countryErr = false;

    }

    // --------------------------------------------------------------------------------------------------

    if(gender===''){
        printErr('genderErr','Please Select Gender')
    }else{
        printErr('genderErr','')
        genderErr = false;
    }


    if(nameErr || emailErr || mobileErr || countryErr || genderErr || hobbyErr){
        return false;
    }else{
        return true;
    }





    return false;
}