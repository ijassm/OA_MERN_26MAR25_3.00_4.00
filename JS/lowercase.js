function lowercase(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') result += s[i].toLowerCase()
        else result += s[i]
    }

    return result;
}

// function lowercase(s) {
//     let result = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] >= 'A' && s[i] <= 'Z') result += String.fromCharCode(s[i].charCodeAt(0) + 32)
//         else result += s[i]
//     }

//     return result;
// }


// console.log(lowercase("Imran Khan")); 