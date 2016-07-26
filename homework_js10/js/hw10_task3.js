function sortStr(str) {
    var arr = str.split("");
    arr.sort(function(a, b) {
        if (a > b) return 1;
        else return -1;
    });
    return arr.join("");
}

console.log(sortStr("webmaster"));
