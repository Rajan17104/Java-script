let form = document.getElementById("data");

let arr = [];

let update = false;

// let newval =null ;
let uid = null;

const handleInsert = () =>{

    let val = document.getElementById("todoForm").value;

    document.getElementById("todoForm").value = '';

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
  uid = i;

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

  arr[uid] =  newval;

  handlePrint();

  update = false;

  document.getElementById("todoForm").value = "";

  event.preventDefault();

}

form.addEventListener("submit",handleDes);

