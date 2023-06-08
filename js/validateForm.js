
// const validateForm =()=>{

//     let nameval=contactForm.name.value;
//     let emailval=contactForm.email.value;
//     let mobilenum=contactForm.mobile.value;
//     let country=contactForm.country.value;
//     let gender=contactForm.gender.value;
//     let hobby=contactForm.hobbies;

//     // console.log(hobby[0].value);

//     let nameErr = true;
//     let emailErr = true;
//     let mobileErr = true;
//     let countryErr = true;
//     let genderErr = true;
//     let hobbyErr = true;


//     let temp =[];

//     console.log(hobby[0].checked);

//     for (let i=0; i < hobby.length; i++) {

//         console.log(
//             "jhjh"
//         );
//         if(hobby[i].checked){
//             temp.push(hobby[i].value);
//         }
           
//     }

//     console.log(temp);

//     if(temp.length >= 2){
//         printErr('hobbyErr','');
//         hobbyErr = false;
//     }else{
//         printErr('hobbyErr','Please select at least 2 hobby.');
//     }


    
//     if(nameval===''){
//         printErr('nameErr','Please Enter Name')

//     }else{

//         let regex = /^[a-zA-Z ]{2,30}$/;
//         if(regex.test(nameval)){
//             printErr('nameErr','');
//             nameErr = false;
//         }else{
//             printErr('nameErr','Please Enter valid Name')

//         }

 
//     }
//     // -------------------------------------------------------------------------

//     if(emailval===''){
//         printErr('emailErr','Please Enter Email')

//     }else{

//        let emilregx= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
//        if(emilregx.test(emailval)){
//         printErr('emailErr','');
//         emailErr = false;
//        }else{
//         printErr('emailErr','Please Enter Valid Email')

//        }
       
 
//     }
//     // -------------------------------------------------------------------------

//     if(mobilenum===''){
//         printErr('mobileErr','Please Enter MobileNumber')

//     }else{

//         let mobileregx= /^\d{10}$/;

//         if(mobileregx.test(mobilenum)){
//             printErr('mobileErr','');
//             mobileErr = false;

//         }else{
//             printErr('mobileErr','Please Enter Valid MobileNumber')

//         }

 
//     }
//     // ------------------------------------------------------------------------------------------

//     if(country==='0'){
//         printErr('countryErr','Please Select Country')


//     }else{
//         printErr('countryErr','')
//         countryErr = false;

//     }

//     // --------------------------------------------------------------------------------------------------

//     if(gender===''){
//         printErr('genderErr','Please Select Gender')
//     }else{
//         printErr('genderErr','')
//         genderErr = false;
//     }


//     if(nameErr || emailErr || mobileErr || countryErr || genderErr || hobbyErr){
//         return false;
//     }else{
//         return true;
//     }





//     return false;
// }


class validation {

    constructor(n,e,m,c,g,h){
        this.nameval = n;
        this.emailval = e;
        this.mobilenum = m;
        this.country = c;
        this.gender = g;
        this.hobby = h;
    }

    printErr (id,msg) {

        document.getElementById(id).innerHTML=msg
    
    }

    checkvalidation () {

  
        // console.log(hobby[0].value);
    
        let nameErr = true;
        let emailErr = true;
        let mobileErr = true;
        let countryErr = true;
        let genderErr = true;
        let hobbyErr = true;
    
    
        let temp =[];
    
        console.log(this.hobby[0].checked);
    
        for (let i=0; i < this.hobby.length; i++) {
    
            console.log("gderjhdrhf ");
            if(this.hobby[i].checked){
                temp.push(this.hobby[i].value);
            }
               
        }
    
        console.log(temp);
    
        if(temp.length >= 2){
            this.printErr('hobbyErr','');
            hobbyErr = false;
        }else{
            this.printErr('hobbyErr','Please select at least 2 hobby.');
        }
    
    
        
        if(this.nameval===''){
            this.printErr('nameErr','Please Enter Name')
    
        }else{
    
            let regex = /^[a-zA-Z ]{2,30}$/;
            if(regex.test(this.nameval)){
                this.printErr('nameErr','');
                nameErr = false;
            }else{
                this.printErr('nameErr','Please Enter valid Name')
    
            }
    
     
        }
        // -------------------------------------------------------------------------
    
        if(this.emailval===''){
            this.printErr('emailErr','Please Enter Email')
    
        }else{
    
           let emilregx= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          
           if(emilregx.test(this.emailval)){
            this.printErr('emailErr','');
            emailErr = false;
           }else{
            this.printErr('emailErr','Please Enter Valid Email')
    
           }
           
     
        }
        // -------------------------------------------------------------------------
    
        if(this.mobilenum===''){
            this.printErr('mobileErr','Please Enter MobileNumber')
    
        }else{
    
            let mobileregx= /^\d{10}$/;
    
            if(mobileregx.test(this.mobilenum)){
                this.printErr('mobileErr','');
                mobileErr = false;
    
            }else{
                this.printErr('mobileErr','Please Enter Valid MobileNumber')
    
            }
    
     
        }
        // ------------------------------------------------------------------------------------------
    
        if(this.country==='0'){
            this.printErr('countryErr','Please Select Country')
        }else{
            this.printErr('countryErr','')
            countryErr = false;
        }
    
        // --------------------------------------------------------------------------------------------------
    
        if(this.gender===''){
            this.printErr('genderErr','Please Select Gender')
        }else{
            this.printErr('genderErr','')
            genderErr = false;
        }
    
    
        if(nameErr || emailErr || mobileErr || countryErr || genderErr || hobbyErr){
            return false;
        }else{
            return true;
        }
    
        return false;
    }



}

const validateForm = () =>{

    let nameval=contactForm.name.value;
    let emailval=contactForm.email.value;
    let mobilenum=contactForm.mobile.value;
    let country=contactForm.country.value;
    let gender=contactForm.gender.value;
    let hobby=contactForm.hobbies;

    const v1 = new validation(nameval,emailval,mobilenum,country,gender,hobby);
    let res = v1.checkvalidation();

    
    if(res){
        return true;
    }else{
        return false;
    }

}



