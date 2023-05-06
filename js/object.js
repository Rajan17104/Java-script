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


// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ]  


// person.map((p , i) => {
//     // console.log(p);
//     console.log(p.name , p.age , p.course);
//     p.course.map((p1) => {
//         console.log(p1);
//     });

// });


// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// console.log(myObj.name, myObj.age, myObj.cars);


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             a:"c",
//             b:"html",
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//            a:"c",
//             b:"html",
//         }
//     }
// ];


// person.map((p,i) =>{
//     // console.log(p);
//     console.log(p.name , p.age , p.course);
    // console.log(p.course.a,p.course.b);
// })

let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat : 10
        }
    }
}


// console.log(data.personal_info);
// console.log(data.personal_info.name, data.personal_info.age, data.personal_info.city);
// console.log(data.courses);
// console.log(data.branches);
// console.log(data.branches.b1);
// console.log(data.branches.b1.admission);
// console.log(data.branches.b1.vacant_seat);