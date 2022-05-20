(function(){

    //outputs string to the body of the document
    document.write("hello from palindrome.js");
    document.write("<br><br>");

    const word = "112233221100";

    document.write(word);
    document.write("<br><br>");

    if (isPalindrome(word)) {
        document.write("true");
    } else {
        document.write("false")
    }

})();

function isPalindrome(myWord) {    
    // convert string to an array
    const arrayValues = myWord.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    return myWord == reverseString;
}