const s = "1051"

function isBinaryString(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "0" && s[i] !== "1") return false;
    }

    return true;
}


console.log(isBinaryString(s));
