// let formref = document.getElementById("data");

// let arr= [];

// let update = false;

// let uid= null;

// const insert = () =>{

// let val = document.getElementById("input").value;
// document.getElementById('input').value = '';

// arr.push(val);

// console.log(arr);

// Dataprint();

// event.preventDefault();

// }


// const Dataprint = () =>{

//     let print = '<ul>'

//         arr.map((t,i) =>{

//             print = print + '<li>' + t + '<button onclick="remove('+i+')">Remove</button>' + 
//             '<button onclick="handleupdate('+i+')">Edit</button>'+'</li>';

//         });

//     print = print + '</ul>'

//     event.preventDefault();

// document.getElementById('ans').innerHTML = print;

// }

// const remove = (i) =>{

//     arr.splice(i,1);

//     // console.log(arr);

//     Dataprint();

// }

// const handleupdate = (i) =>{

//     update = true;

//     // console.log('dsfhdsufhdsi');

//     uid = i;

//     document.getElementById("input").value = arr[i];

//     event.preventDefault();

// }

// const updatedata = () =>{

//     console.log('update data');

//     let newval = document.getElementById("input").value;

//     console.log(newval); 

//     arr[uid] = newval;

//     // console.log(arr);

//     document.getElementById("input").value = '';
    
//     Dataprint();

// }


// const decision = () =>{

//     if(update){
//         updatedata();
//     }else{
//         insert();
//     }

// }


// formref.addEventListener('submit',decision)


let fromref = document.getElementById('data');

let arr = [];

let id = null;

let update = false;

const insert = () =>{

    let val=document.getElementById('input').value;

    document.getElementById('input').value = '';


    let localdata =JSON.parse(localStorage.getItem("todo"));

    if(localdata){
        localdata.push(val);
        localStorage.setItem("todo",JSON.stringify(localdata));
    }else{
        arr.push(val);
        localStorage.setItem("todo",JSON.stringify(arr));
    }   

    hadleprint();
    event.preventDefault();
}

const hadleprint = () =>{

    let localdata = JSON.parse(localStorage.getItem('todo'));

    if(localdata){
        let print = '<ul>'

            localdata.map((v,i)=>{
                print = print + '<li>' + v + '<button onclick = "remove('+ i +')">Remove</button>' + '<button onclick = "handleupdate('+ i +')">Edit</button>' +  '</li>'
            })

        print = print + '</ul>'

        document.getElementById('ans').innerHTML =print;
 

    }
   
}

const remove = (i) =>{

    let localdata = JSON.parse(localStorage.getItem('todo'));

    localdata.splice(i,1);

    localStorage.setItem("todo", JSON.stringify(localdata));

    console.log(localdata);

    hadleprint();

}

const handleupdate = (i) =>{

    update = true;
    
    let localdata = JSON.parse(localStorage.getItem('todo'));
    console.log(localdata[i])

    id = i;

    document.getElementById('input').value = localdata[i];

}

const updatedata = () =>{

console.log('update call');

let localdata = JSON.parse(localStorage.getItem('todo'));

let newval = document.getElementById("input").value;

console.log(newval);

localdata[id] = newval;

update = false;

localStorage.setItem("todo", JSON.stringify(localdata));

document.getElementById("todoForm").value = "";

hadleprint();

    event.preventDefault();

}

const decision = () => {

    if(update){
        updatedata();
    }else{
        insert();
    }

    event.preventDefault();

}



fromref.addEventListener('submit',decision)