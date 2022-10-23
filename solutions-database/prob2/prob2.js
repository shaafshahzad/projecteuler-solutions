let firstNum = 1;
let secondNum = 1;
let i = 0;
let sum = 0;

evenFib();

function evenFib () {
    while(i < 4000000) {
        if (i % 2 == 0) {
            sum += i;
        }
        i = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = i;
    }
}