let form = document.getElementById("data");

let arr = [];

const handleInsert = () =>{

    let val = document.getElementById("todoForm").value;

    arr.push(val);

    // console.log(arr);

    let print = '<ul>'

    arr.map((t) =>{     
      // print += '<li>' + t + '<button onclick=handleRemove()>' + 'X' + '</button>' + '</li>';
      // print += '<li>' + t + '<button'> + 'X' + '</button>' + '</li>';

    })

    print = print + '</ul>'

    document.getElementById('ans').innerHTML = print;

    // console.log(val);

    event.preventDefault();

}

const handleRemove = () =>{

// document.getElementById("ans").innerHTML = '';
// document.getElementById("btn").innerHTML = '';

  // let index =arr.indexOf(arr);

  // if(index > 0){
  //   arr.splice(index,1);
  // }

  // console.log(arr);



//   let i = arr.findIndex(() => {});

//   arr.splice(i > 1);
  
//   console.log(arr);

//   event.preventDefault();

//   handleInsert();

// }



arr.map((v) =>{

  console.log(v);

  arr.pop(v);
  console.log(arr);
})




// let remove =document.getElementById('ans1')

// remove.style.display='none';



}
// main.addEventListener("click",handleRemove);


form.addEventListener("submit",handleInsert);
btn.addEventListener("click",handleRemove);
