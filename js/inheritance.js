class Cars{
    constructor(name, color){
        this.name= name
        this.color= color
    }

    run(){
        console.log(this.name + 'is runing');
    }

    model(){    
        console.log(this.name + 'is model');
    }

}


class bmw extends Cars {
    modify(){
        console.log(this.name + 'is modify');
    }
}

let car = new Cars ('range rover ' , 'white');
let b = new bmw ('BMW X7' , 'black');

car.model()
b.modify()