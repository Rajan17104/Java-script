//parent class

class student {
    id;
    name;

    constructor(i,n){
        this.id = i;
        this.name = n;
    }

    basic_info(){
        console.log('id: ' + this.id);
        console.log('Name: ' + this.name);
    }

    /****** polymorphism ******/

    addmission_process(){
        console.log('addmission date');
    }

    /*************************/

}

//child class

class course extends student{

    course_name;

    constructor(i , n, cn){
        super(i,n); //pass value to parent
        this.course_name = cn;

    }

    course_details(){
        console.log('id: ' + this.id);
        console.log('name: ' + this.name);
        console.log('course: ' + this. course_name);
        console.log('course duration: ' + this.course_duration);
        console.log('course study: ' + this.course_study);
    }

   /****** polymorphism ******/

    addmission_process(){
        console.log('every month new techology');
    }

    /*************************/

}

let c1 = new course (101,'amit','react');
c1.__proto__.course_duration = '10 month';
c1.__proto__.course_study = 'B.C.A';
c1.course_details();
c1.addmission_process();
// c1.basic_info();