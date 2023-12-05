function isItPalindrome(str) {
    const reversed = str.split('').reverse().join('')
    return str.toLowerCase() === reversed.toLowerCase();
}

console.log(isItPalindrome('довод'));
console.log(isItPalindrome('повод'));
console.log(isItPalindrome('довод довод'));
console.log(isItPalindrome('довоД довод'));