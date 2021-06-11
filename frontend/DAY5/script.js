window.onload = () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2")
    
    const result = document.getElementById("result");

    const addbtn = document.getElementById("add");
    const subbtn = document.getElementById("subtract");
    const multbtn = document.getElementById("multiply");
    const divbtn = document.getElementById("divide");

    addbtn.addEventListener("click", () => {
        result.innerHTML = "Result: " + ( Number(num1.value) + Number(num2.value));
    });

    subbtn.addEventListener("click", () => {
        result.innerHTML = "Result: " + ( Number(num1.value) - Number(num2.value));
    })
    multbtn.addEventListener("click", () => {
        result.innerHTML = "Result: " + (Number(num1.value) * Number(num2.value));
    });

    divbtn.addEventListener("click", () => {
        result.innerHTML = "Result: " + (Number(num1.value) / Number(num2.value));
    });
    // subbtn.addEventListener("click", subtraction);

    // function subtraction() {
    //     var res = Number(num1.value) - Number(num2.value);
    //     result.innerHTML = "Result: " + res;
    // }



      
 

    
    
}