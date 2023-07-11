let a={
    name1:"Rajan",
    language1:'eng',
    ans:()=>{
        console.log("first object");
    }
}
console.log(a);

let b={
    ans:()=>{
        console.log("second proto");
    }
}


b.__proto__ = {
    name:"patel",
    language:'gujrati'
}

a.__proto__ = b

a.ans();
console.log(a.name);