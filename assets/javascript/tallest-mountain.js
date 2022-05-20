(function(){

    document.write("hello from tallest-mountain.js");
    document.write("<br><br>");

    const mountainHeights = [100, 250, 945, 870, 450, 986];

    console.log(Math.max(...mountainHeights));

    document.write((Math.max(...mountainHeights).toString()));
})();