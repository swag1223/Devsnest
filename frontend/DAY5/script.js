window.onload = () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2")
    
    const result = document.getElementById("result");
    const buttons = document.querySelector(".buttons-group");
    
    buttons.addEventListener("click", doTask);

    function doTask(e) {
        const operator = e.target.innerText;
        switch (operator) {
            case "+":
                if (isNaN(num1.value) || isNaN(num2.value)) {
                    result.innerHTML = "Enter a VALID input !! ";
                }
                else {
                    result.innerHTML = "Result: " + (Number(num1.value) + Number(num2.value));
                }
                break;
            
            case "-":
                if (isNaN(num1.value) || isNaN(num2.value)) {
                    result.innerHTML = "Enter a VALID input !! ";
                }
                else {
                    result.innerHTML = "Result: " + (Number(num1.value) - Number(num2.value));
                }
                break;
            
            case "x":
                if (isNaN(num1.value) || isNaN(num2.value)) {
                    result.innerHTML = "Enter a VALID input !! ";
                }
                else {
                    result.innerHTML = "Result: " + (Number(num1.value) * Number(num2.value));
                }
                break;
            
            case "/":
                if (isNaN(num1.value) || isNaN(num2.value)) {
                    result.innerHTML = "Enter a VALID input !! ";
                }
                else {
                    result.innerHTML = "Result: " + (Number(num1.value) / Number(num2.value));
                }
                break;   
                
        }
    }
    
}