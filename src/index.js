export default function calculator () {
    function sumTwoNumbers(num1, num2) {
        return num1 + num2;
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
        isANumber
    };
} 
