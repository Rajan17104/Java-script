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

    console.log( val);

    arr.push(val);

    document.getElementById('input').value = '';

    hadleprint();
    event.preventDefault();
}

const hadleprint = () =>{

    let print = '<ul>'

        arr.map((v,i)=>{
            print = print + '<li>' + v + '<button onclick = "remove('+ i +')">Remove</button>' + '<button onclick = "handleupdate('+ i +')">Edit</button>' +  '</li>'
        })

    print = print + '</ul>'

    document.getElementById('ans').innerHTML =print;

}

const remove = (i) =>{

    arr.splice(i,1);

    console.log(arr);

    hadleprint();

}

const handleupdate = (i) =>{

    update = true;

    id = i;

    document.getElementById('input').value = arr[i];

}

const updatedata = () =>{

console.log('update call');

let newval = document.getElementById("input").value;

console.log(newval);

arr[id] = newval;

document.getElementById("ans").value = newval;

hadleprint();


}

const decision = () => {

    if(update){
        updatedata();
    }else{
        insert();
    }

}


fromref.addEventListener('submit',decision)