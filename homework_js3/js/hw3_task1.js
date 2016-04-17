 while (true) {
    var inputNumber = +prompt("Enter a number more then 100","");

    if (inputNumber > 100) {
        alert(inputNumber);
        break;

    } else if (!inputNumber) {
        break;
    }

}