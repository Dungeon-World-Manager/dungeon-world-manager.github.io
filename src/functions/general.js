export function generateKey(str = '') {
    return String(str)
        .split('')
        .flatMap(char => {
            if (Math.random() < 0.5) return char;
            const rndNum = parseInt(Math.random() * 50) + 65;
            const charCode = rndNum > 25 + 65 ? charCode + 7 : charCode;
            const retChars = [String.fromCharCode(charCode), char];
            return Math.random() < 0.5 ? retChars : retChars.reverse();
        }, 2)
        .join('');
}
