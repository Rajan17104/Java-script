function calculate() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let meter;
    let bmical;
    meter = height / 100;
    bmical = weight / (meter * meter);


    console.log(height);
    console.log(weight);
    console.log(meter);
    console.log(bmical);
    console.log(answer);
    

    if (bmical > 17 && bmical < 18.5) {
        document.getElementById("answer").innerHTML = "Thin ness"

    } else if (bmical > 18.5 && bmical < 25) {
        document.getElementById("answer").innerHTML = "Normal";

    } else if (bmical > 25 && bmical < 30) {
        document.getElementById("answer").innerHTML = "Overweight";

    } else {
        document.getElementById("answer").innerHTML = "Severe Thinness";
    }


}