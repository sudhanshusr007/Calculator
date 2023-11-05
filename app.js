function addToDisplay(event) {
    const display = document.querySelector('.display input');
    const buttonValue = event.target.value;
  
    if (buttonValue === "=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else if (buttonValue === "AC") {
        display.value = "";
    } else if (buttonValue === "DEL") {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += buttonValue;
    }
}
  
const buttons = document.querySelectorAll('.calculator input[type="button"]');
buttons.forEach(button => {
    button.addEventListener('click', addToDisplay);
});
