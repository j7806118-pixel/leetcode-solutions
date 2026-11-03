var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let m = num1.length;
    let n = num2.length;

    let result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let digit1 = Number(num1[i]);
            let digit2 = Number(num2[j]);

            let product = digit1 * digit2;

            let p1 = i + j;
            let p2 = i + j + 1;

            let sum = product + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    return result.join("").replace(/^0+/, "");
};