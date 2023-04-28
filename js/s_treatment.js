let tc_s=1 , tc_c=500;
let fl_s=2 , fl_c=1500;
let rct_s=4 , rct_c=2500;
let rc_s=6 , rc_c=12000;
let br_s=12 , br_c=35000;

let final_se,final_co,final_te;

const select = (t , s, c) => {

    document.getElementById("trea").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;

    final_se = s;
    final_co = c;
    final_te = t;

    // console.log(t,c,s);

}

const handleTreatment = () => {

let val = document.getElementById("treatment").value;

if(val === 'tc'){
    select("Teeth Cleanings" ,tc_s, tc_c);
}else if(val === 'fl'){
   select("Fillings" ,fl_s, fl_c);
}else if(val === 'rct'){
   select("Root canal Treatment" ,rct_s, rct_c);
}else if(val ==='rc'){
    select("Rct + Cover" ,rc_s, rc_c);
}else if(val === 'br'){
    select("Braces" ,br_s, br_c);
}

document.getElementById("place").style.display = 'block';

}


const appDate = () => {

let date = document.getElementById("date").value;

// console.log(date,final_se,final_co,final_te);

let ex = final_co / final_se;

// console.log(ex);

let dateAp = new Date (date); 

    // console.log(date);

    let print = '';

     print = print + '<table border="1"><tr><th>Sr no.</th><th>App-Date</th><th>Costing</th></tr>'

        for(let i=0; i<final_se; i++){
            if(i === 0){
                print += '<tr>'
                print += '<td>' + (i+1)+ '</td>'
                print += '<td>' + dateAp.toLocaleDateString() + '</td>'
                print += '<td>' + ex + '</td>'
                print += '</tr>'
                console.log(i+1, ex,dateAp.toLocaleDateString());
            }else{
                dateAp.setDate(dateAp.getDate() + 7);
                print += '<tr>'
                print += '<td>' + (i+1) + '</td>'
                print += '<td>' + dateAp.toLocaleDateString() + '</td>'
                print += '<td>' + ex + '</td>'
                print += '</tr>'
            
                // console.log(i+1, ex,dateAp.toLocaleDateString());
            }
            
            document.getElementById("tr-plan").style.display = 'block';
            document.getElementById('tr-plan').innerHTML = print;
        }

    print = print + '</table>'

/****2 rite****/

    // for(i=1; i<=final_se; i++){
    //     if(i === 1){
    //     print += '<tr>'
    //         print += '<td>' + i+ '</td>'
    //         print += '<td>' + dateAp.toLocaleDateString() + '</td>'
    //         print += '<td>' + ex + '</td>'
    //         print += '</tr>'
    //         // console.log(i, ex,dateAp.toLocaleDateString());
    //     }else{
    //         print += '<tr>'
    //         print += '<td>' + i + '</td>'
    //         print += '<td>' + dateAp.toLocaleDateString() + '</td>'
    //         print += '<td>' + ex + '</td>'
    //         print += '</tr>'
    //         dateAp.setDate(dateAp.getDate() + 7);
    //         console.log(i, ex,dateAp.toLocaleDateString());
    //     }
    // }

    
}

let d = document.getElementById("book");
d.addEventListener("click" ,appDate);