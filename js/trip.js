const costing = (dest) => { //4
    if(dest === 'goa'){
        return 35000; //5
    }else if(dest === 'bali'){
        return 50000;
    }else if(dest === 'manali'){
        return 40000;
    }
}

const packages = (dest1,dest2,dest3) => { //2
    let c1 = costing(dest1); //3 //6
    let c2 = costing(dest2);
    let c3 = costing(dest3);

    let msg = dest1 + " cost you " + c1 + " and " + dest2 + " cost you " + c2 + dest3 + " cost you " + c3; //7

    return msg; //8
}

let res = packages("goa","bali","manali"); //1 //9
console.log(res); //10