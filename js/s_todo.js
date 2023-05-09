let form = document.getElementById("data");

let arr = [];

let update = false;

let uid = null;
  
const handleInsert = () =>{

    let val = document.getElementById("todoForm").value;
    
    console.log(val);
    document.getElementById("todoForm").value = '';

    let localdata =JSON.parse(localStorage.getItem("todo"));

    if(localdata){
      localdata.push(val);
      localStorage.setItem("todo",JSON.stringify(localdata));
    }else{
      arr.push(val);
      localStorage.setItem("todo",JSON.stringify(arr));
    }

    handlePrint();

    event.preventDefault();

}



const handlePrint = () =>{

  let localdata = JSON.parse(localStorage.getItem('todo'));
  if(localdata){
    let print = '<ul>'

    localdata.map((t, i) =>{  

      print += '<li>' + t + '<button onclick="handleRemove('+ i +')">X</button>' +
      '<button onclick="handleUpdate('+ i +')">Edit</button>' + '</li>';

    });

    print = print + '</ul>'

    document.getElementById('ans').innerHTML = print;

  }
}


const handleRemove = (i) =>{

  let localdata = JSON.parse(localStorage.getItem('todo'));

  localdata.splice(i,1);

  localStorage.setItem("todo", JSON.stringify(localdata));

  console.log(localdata);

  handlePrint();

}

const handleUpdate = (i) =>{

  update = true;
 
  let localdata = JSON.parse(localStorage.getItem('todo'));
  console.log(localdata[i])

  uid = i;

  document.getElementById("todoForm").value = localdata[i];

}

const handleDes = () =>{

  if(update){
    handleUpdateData();
  }else{
    handleInsert();
  }

  event.preventDefault();

} 

const handleUpdateData = () =>{

  console.log('Update call');
   
  let localdata = JSON.parse(localStorage.getItem('todo'));

  let newval = document.getElementById("todoForm").value;

  console.log(newval);

  localdata[uid] =  newval;

  update = false;

  localStorage.setItem("todo", JSON.stringify(localdata));

  document.getElementById("todoForm").value = "";

  handlePrint();

  event.preventDefault();

}

form.addEventListener("submit",handleDes);

window.onload = handlePrint;