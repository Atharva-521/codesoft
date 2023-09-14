let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function isInvalidExpression(expression) {
    try {
        
        if (expression.includes('/ 0')) {
            return true;
        }
        
        
        eval(expression);
        
        
        
        return false;
    } catch (error) {
        
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