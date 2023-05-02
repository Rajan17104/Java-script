// let todo = document.getElementById("todoFrom");


let form = document.getElementById("data");

let arr = [];

const handleInsert = () =>{

    let val = document.getElementById("todoForm").value;

    arr.push(val);

    // console.log(arr);

    let print = '<ul>'

    arr.map((t) =>{     
      print += '<li>' + t + '</li>';
    })

    print = print + '</ul>'

    document.getElementById('ans').innerHTML = print;

    // console.log(val);

    event.preventDefault();

}

form.addEventListener("submit",handleInsert);