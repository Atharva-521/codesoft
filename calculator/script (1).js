let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function isInvalidExpression(expression) {
    try {
        // Check for division by zero
        if (expression.includes('/ 0')) {
            return true;
        }
        
        // Try evaluating the expression without actually updating the result
        eval(expression);
        
        // Additional checks for invalid operations can be added here
        
        return false;
    } catch (error) {
        // An error occurred, so the expression is invalid
        return true;
    }
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (isInvalidExpression(string)) {
                alert("Invalid operation");
            } else {
                string = eval(string);
                input.value = string;
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});