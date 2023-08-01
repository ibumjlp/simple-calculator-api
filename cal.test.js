const cal = require('./cal.js')

describe('Calculation Test', () => {
    let opt = ["+", "-", "*", "/"];
    let x_ex = [100, 50];
    let y_ex = [10, 0];

    let add_ans = [110, 100, 60, 50];
    let sub_ans = [90, 100, 40, 50];
    let mul_ans = [1000, 0, 500, 0];
    let div_ans = [10, "Divide by zero", 5, "Divide by zero"];

    describe('Operator Check', () => {
        test('Addition Operator', () => {
            let iteration = 0;
            for(let i = 0; i < x_ex.length; i++){
                for(let j = 0; j < y_ex.length; j++){
                    expect(cal(opt[0], x_ex[i], y_ex[j])).toBe(add_ans[iteration]);
                    iteration++;
                }
            }
        });
        test('Subtraction Operator', () => {
            let iteration = 0;
            for(let i = 0; i < x_ex.length; i++){
                for(let j = 0; j < y_ex.length; j++){
                    expect(cal(opt[1], x_ex[i], y_ex[j])).toBe(sub_ans[iteration]);
                    iteration++;
                }
            }
        });
        test('Multiplication Operator', () => {
            let iteration = 0;
            for(let i = 0; i < x_ex.length; i++){
                for(let j = 0; j < y_ex.length; j++){
                    expect(cal(opt[2], x_ex[i], y_ex[j])).toBe(mul_ans[iteration]);
                    iteration++;
                }
            }
        });
        test('Division Operator', () => {
            let iteration = 0;
            for(let i = 0; i < x_ex.length; i++){
                for(let j = 0; j < y_ex.length; j++){
                    expect(cal(opt[3], x_ex[i], y_ex[j])).toBe(div_ans[iteration]);
                    iteration++;
                }
            }
        });
    });
});