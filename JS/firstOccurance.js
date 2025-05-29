const txt = "GeeksForGeeks", pat = "For";

function firstOccurrence(txt, pat) {
    const txtLength = txt.length;
    const patLength = pat.length;

    for (let i = 0; i <= txtLength - patLength; i++) {
        let match = true;

        for (let j = 0; j < patLength; j++) {
            if (txt[i + j] !== pat[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i; // Found the pattern starting at index i
        }
    }

    return -1; // Pattern not found
}



console.log(firstOccurrence(txt, pat));
