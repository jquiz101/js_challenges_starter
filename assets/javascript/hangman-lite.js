(function(){

    document.write("hello from hangman-lite.js");
    document.write("<br><br>");

    const word = "astonishing";
    const letter = "s";

    const numOccur = (word.match(new RegExp(letter, "g")) || []).length;

    if (numOccur > 0) {
        document.write("Yeah, the letter "+letter+" exists "+numOccur+" times in my word");
    } else {
        document.write("Nope, that letter doesn't exist in my word.");
    }



})();