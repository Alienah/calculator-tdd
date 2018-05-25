export default function calculator () {
    function sumTwoNumbers(num1, num2) {
        return num1 + num2;
    }

    function substractTwoNumbers(num1, num2) {
        return num1 - num2;
    }

    function multiplyTwoNumbers(num1, num2) {
        return num1 * num2;
    }

    function divideTwoNumbers(num1, num2) {
        return num1 / num2;
    }

    function isZero(number) {
        if (number === 0.000) {
            return true;
        }
    }

    function errorWhenTryingToDivideBetweenZero() {
        return console.log("No se puede dividir entre 0");
    }

    function manageDivision(num1, num2) {
        if (isZero(num2)) {
            return errorWhenTryingToDivideBetweenZero();
        } else {
            return divideTwoNumbers(num1, num2);
        }
    }

    function isANumber(value) {
        if (typeof value === "number") {
            return true;
        }
        else {
            return false;
        }
    }
    return {
        sumTwoNumbers,
        substractTwoNumbers,
        multiplyTwoNumbers,
        divideTwoNumbers,
        manageDivision,
        errorWhenTryingToDivideBetweenZero,
        isANumber
    };
} 
