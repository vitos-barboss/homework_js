function cutString(str) {

    if (str.length > 20) {
        return str = str.substr(0, 20) + "...";
    } else {
        return str;
    }
}

var str1 = "Lorem ipsum dolor sit amet, consectetur \ " +
    "adipisicing elit, sed do eiusmod tempor incididunt \ " +
    "ut labore et dolore magna aliqua.";
var str2 = "Lorem ipsum"

console.log(cutString(str1));
console.log(cutString(str2));