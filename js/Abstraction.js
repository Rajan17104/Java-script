function mobile(color,cost,performance){
    
    this.color=color;
    this.cost=cost;
    this.performance=performance;
    let priceWillIncreaseNextMonth=20000;

    this.DeatialsOfMobile=function(){
        console.log("color of the mobile is "+this.color);
        console.log("cost of the mobile is "+this.cost);
        console.log("performance of the mobile is "+this.performance);
    }
    this.PriceOfNextMonth=function(){
        console.log(this.cost+priceWillIncreaseNextMonth);
    }

}

let oppo = new mobile("Black",30000,'best');
oppo.DeatialsOfMobile();
oppo.priceWillIncreaseNextYear=5000;
oppo.PriceOfNextMonth()