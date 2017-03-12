
printPyramid(6);


function printPyramid(height) {
    for (var i = 0; i < height; i++) {
        console.log(" ".repeat(height-i-1) + "#".repeat(i+2));
    }
}
// My First Try:

//     space = "";
//     while (space.length < height) {
//         space += " ";
//     }
//
//     for (var brick = "##"; brick.length < height+2; brick += "#") {
//         console.log(space + brick);
//         space = space.slice(0,-1);
//     }
// }
