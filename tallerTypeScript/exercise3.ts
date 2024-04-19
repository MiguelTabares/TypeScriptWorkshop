// 3. Create a function that determines whether a string is a palindrome.
//    a. Convert the string to lowercase and remove whitespace.
//    b. Compare the original string with the inverted string.
//    c. Display a message indicating whether the string is a palindrome or not.


function isPalindrome(str: string): boolean {
    // a. Convert the string to lowercase and remove whitespace.
    const formatString = str.toLowerCase().replace(/\s/g, '');
    // b.1. Obtain the inverted chain
    const invertedString = formatString.split('').reverse().join('');
    // b.2. Compare the original string with the inverted string.
    const palindrome = formatString === invertedString;
    // c. Display a message indicating whether the string is a palindrome or not.
    if (palindrome) {
        console.log(`"${str}" IS A PALINDROME.`);
    } else {
        console.log(`"${str}" IS NOT A PALINDROME.`);
    }
    return palindrome;
}
    isPalindrome("Somos o no somos");
    isPalindrome("La Tele Letal");
    isPalindrome("Riwi Coders");