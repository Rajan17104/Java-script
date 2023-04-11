
let n = prompt("please enter your name");
let rollno = parseInt(prompt("please enter your roll_no"));
let html = parseInt(prompt("please enter your mark in html"));
let css = parseInt(prompt("please enter your mark in css"));
let c = parseInt(prompt("please enter your mark in c"));
let java= parseInt(prompt("please enter your mark in java"));
let total;

total = html + css + c + java;


let per;

per = total/400*100;

document.getElementById("n").innerHTML = n;
document.getElementById("rollno").innerHTML = rollno;
document.getElementById("html").innerHTML = html;
document.getElementById("css").innerHTML = css;
document.getElementById("c").innerHTML = c;
document.getElementById("java").innerHTML = java;
document.getElementById("total").innerHTML = total;
document.getElementById("per").innerHTML = per;

// document.write(n + " <br/>");
// document.write(rollno + " <br/>");
// document.write(html + " <br/>");
// document.write(css + " <br/>");
// document.write(c + " <br/>");
// document.write(java + " <br/>");
// document.write(total + " <br/>");


console.log(n);
console.log(rollno);
console.log(html);
console.log(css);
console.log(c);
console.log(java);
console.log(total);
console.log(per);


