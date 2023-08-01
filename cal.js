function cal(operator, x, y) {
    let answer;
    switch (operator) {
        case "+":
            answer = parseFloat(x) + parseFloat(y);
            break;
        case "-":
            answer = parseFloat(x) - parseFloat(y);
            break;
        case "*":
            answer = parseFloat(x) * parseFloat(y);
            break;
        case "/":
            if(y == "0") {
                answer = "Divide by zero";
                break;
            } else {
                answer = parseFloat(x) / parseFloat(y);
                break;
            }
        default:
            answer = "Invalid Operator";
    }
    return answer;
}

module.exports = cal;