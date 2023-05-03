let form = document.getElementById("data");

let arr = [];

let update = false;

let newval =null ;
let uid = null;

const handleInsert = () =>{

    let val = document.getElementById("todoForm").value;

    arr.push(val);

    handlePrint();

    console.log('insert call');

    event.preventDefault();

}

const handlePrint = () =>{

  let print = '<ul>'

  arr.map((t, i) =>{     
    print += '<li>' + t + '<button onclick="handleRemove('+ i +')">X</button>' +
     '<button onclick="handleUpdate('+ i +')">Edit</button>' + '</li>';

  })

  print = print + '</ul>'

  document.getElementById('ans').innerHTML = print;

}


const handleRemove = (i) =>{

arr.splice(i,1);

console.log(arr);

handlePrint();

}


const handleUpdate = (i) =>{

  update = true;

  document.getElementById("todoForm").value = arr[i];

}

const handleDes = () =>{

  if(update){
    handleUpdateData();
  }else{
    handleInsert();
  }

}

const handleUpdateData = () =>{

  console.log('Update call');

  let newval = document.getElementById("todoForm").value;

  console.log(newval);

  event.preventDefault();

}

form.addEventListener("submit",handleDes);

