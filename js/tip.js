function data(){
    let bill= parseInt(document.getElementById("bill").value);
    let per= parseInt(document.getElementById("per").value);

    let ans;
    ans = bill*per/100;

    let total;
    
    total = bill + ans;

    // document.getElementById("tip").innerHTML = ans;
    // document.getElementById("total").innerHTML = total;

    document.getElementById("tip").value = ans;
    document.getElementById("total").value = total;

    document.getElementById("tip").disabled = true;
    document.getElementById("total").disabled = true;
}
