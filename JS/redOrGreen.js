let s = "GGGGGGR"
let n = s.length;

// function maxNumOfChar(str) {
//     const colorCount = { red: 0, green: 0 };
//     for (let i = 0; i < n; i++) {
//         if (str[i] === "R") colorCount.red++;
//         else colorCount.green++;
//     }

//     return colorCount.green > colorCount.red ? "G" : "R";
// }

// function redOrGreen(n, str) {
//     return maxNumOfChar(str).repeat(n);
// }

// console.log(redOrGreen(n, s));


// String.prototype.repeatChar = function repeat(n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += this;
//     }
//     return result;
// }


function RedOrGreen(n, str) {
    const colorCount = { red: 0, green: 0 };
    for (let i = 0; i < n; i++) {
        if (str[i] === "R") colorCount.red++;
        else colorCount.green++;
    }

    return colorCount.green > colorCount.red ? colorCount.red : colorCount.green;
}


console.log(RedOrGreen(n, s));
