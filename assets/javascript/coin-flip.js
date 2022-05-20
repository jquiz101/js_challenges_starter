(function(){

    //outputs string to the body of the document
    document.write("hello from coin-flip.js");
    document.write("<br><br>");

    //outputs the string to the browsers console
    console.log("hello from coin-flip.js");

    if (Math.random() < .5) {
        document.write("Heads!");
    } else {
        document.write("Tails!");
    }

})();