class employe {
    constructor(){
        let name, salary;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }

    getSalary(){
        return this.salary;
    }
    setSalary(salary){
        this.salary=salary;
    }

}

let emp =new employe()

emp.setName("Rajan");
emp.setSalary(50000);

console.log(emp.getName(),emp.getSalary())