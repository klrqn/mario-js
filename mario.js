
/* this is a comment */

 function printPyramid(height) {
     space = "";
     while (space.length < height) {
         space += " ";
     }

     for (var brick = "##"; brick.length < height+2; brick += "#") {
         console.log(space + brick);
         space = space.slice(0,-1);
     }
 }
