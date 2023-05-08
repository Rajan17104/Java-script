let h1Elem = document.createElement("h1");
let h1TextElem = document.createTextNode("Hello Rajan");


h1Elem.appendChild(h1TextElem);

let demoRef = document.getElementById("demo");

demoRef.appendChild(h1Elem);


let aElem = document.createElement("a");
aElem.setAttribute("href" , "#");
aElem.setAttribute("id" , "main");
aElem.setAttribute("onClick", "handledom()");

let aTextElem =document.createTextNode("home");

aElem.appendChild(aTextElem);

demoRef.appendChild(aElem);

const handledom =() =>{

console.log("clicked");

}