function Submit() {
    let number = document.getElementById("num").value;
    document.getElementById("out-put").value = OddOrEven(number);
}

function OddOrEven(number) {

    if(number % 2 == 0) 
        document.getElementById("out-put").value = number + " is an Even Number";

    else 
        document.getElementById("out-put").value = number + " is a Odd Number";
        

    return OddOrEven(number);
}