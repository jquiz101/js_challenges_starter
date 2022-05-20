(function(){

    //outputs string to the body of the document
    document.write("hello from change-machine.js");
    document.write("<br><br>");

    let amount = 18;
    const origAmount = amount;

    // 3 20s, 1 10s, 1 5s, 3 1s

    let numOf20s = 0;
    let numOf10s = 0;
    let numOf5s = 0;
    let numOf1s = 0;

    

    numOf20s = Math.floor(amount/20);
    console.log(numOf20s);

    if (numOf20s > 0) {
        amount = amount % 20;
        console.log(amount);
    }

    if (amount > 0) {
        numOf10s = Math.floor(amount/10);
        console.log(numOf10s);

        if (numOf10s > 0) {
            amount = amount % 10;
            console.log(amount);
        }
    }

    if (amount > 0) {
        numOf5s = Math.floor(amount/5);
        console.log(numOf5s);

        if (numOf5s > 0) {
            amount = amount % 5;
            console.log(amount);
        }
    }

    if (amount > 0) {
        numOf1s = Math.floor(amount/1);
        console.log(numOf1s);

        if (numOf1s > 0) {
            amount = amount % 1;
            console.log(amount);
        }
    }

    document.write(origAmount);
    document.write("<br><br>");

    const result = [numOf20s, numOf10s, numOf5s, numOf1s];
    document.write(result);



})();