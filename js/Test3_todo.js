let arr = [];

const todoData = () =>{

let val = document.getElementById("todo").value;

// console.log(val);    

    document.getElementById("ans").innerHTML = val;
    document.getElementById("ans").style.display = 'block';
    document.getElementById("i").style.display = 'block'

arr.push(val);
console.log(arr.toString());

//  arr[val];

 document.getElementById('ans').innerHTML = arr;


//     let print = '<ul>';
//     arr.map((a) =>{
//         print = print + '<li>' + a.arr + ""+ a.i + '</li>'; 

//     print =print + '</ul>'
// });

// console.log(a);

}

const remove = () =>{

    document.getElementById("ans").innerHTML = '';
    document.getElementById("i").innerHTML = '';

}   