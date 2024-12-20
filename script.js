let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons); // Fixed the typo from "buttonos" to "buttons"
arr.forEach(button => {
    button.addEventListener('click', (e) => { // Fixed "addEventListner" to "addEventListener"
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Using eval cautiously
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
