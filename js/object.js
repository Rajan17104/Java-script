// let person ={

//     name : 'rajan',
//     age : 18,
// }

// console.log(person);
// console.log(person.name, person.age);



// let person = [
//     {
//         name : 'rajan',
//         age : 18
//     },
//     {
//         name : 'patel',
//         age : 20
//     }

// ];

// console.log(person);
// person.map((v , i) => console.log(v.name,v.name));


const person = [    
    {
        name: "Amit",
       age: 25,
       course: [
           "c",
           "html"
       ]
    }
    
]  


person.map((p , i) => {
    // console.log(p);
    // console.log(p.name , p.age , p.course);
    p.course.map((p1) => {
        console.log(p1);
    });

});
