
var str = "";
var row = +prompt("Enter number of row","");
var column = +prompt("Enter number of column","");
//var row = 8, column = 8;

    for (var i = 1; i <= row; i++) {
        if(i % 2 !== 0) {
            for (var j = 1; j <= column; j++) {
                if (j % 2 !== 0) {
                    str += " ";
                } else if (j % 2 === 0) {
                    str += "#";
                }
            }
        } else if (i % 2 === 0) {
            for (var j = 1; j <= column; j++) {
                if (j % 2 !== 0) {
                    str += "#";
                } else if (j % 2 === 0) {
                    str += " ";
                }
            }
        }
        str += "\n";
    }

console.log(str);
alert(str);
