class Building {

    constructor (l,w){
        this.lenght = l;
        this.width = w;

    }


    area(){

        let ans;
        ans = this.lenght * this.width;

        console.log("area is " + ans);

    }


    estimation(m){

        console.log(m + " Month ");

    }   


}

const b1 = new Building(100,200);
b1.area();
b1.estimation(6);

const b2 = new Building(300,500);
b2.area();
b2.estimation(9);