document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("box");
    let buttons = document.querySelectorAll("button");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;
            
            if (value === "AC") {
                expression = "";
                display.value = "";
            } else if (value === "DEL") {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch {
                    display.value = "Error";
                    expression = "";
                }
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
