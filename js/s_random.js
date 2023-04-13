let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML = n1;
document.getElementById("num2").innerHTML = n2;


let organs = n1 + n2;


function handledata() {
 let ans = parseInt(document.getElementById("ans").value);

    console.log(n1, n2 ,organs ,ans);

    if (organs === ans) {
        alert("correct");
    }else{
        alert("wrong " + "correct answer is" + organs);
    }

    location.reload();
}