function showType(arg) {
    if (typeof arg === "number") {
        return "number";
    } else if (typeof arg === "string") {
        return "string";
    } else if (typeof arg === "boolean") {
        return "boolean";
    } else if (!(arg === undefined) && arg  == undefined) {
        return "null";
    } else if (typeof arg === "undefined") {
        return "undefined";
    } else if (typeof arg === "object") {
        return "object";
    }

}


console.log(showType(1));
console.log(showType("str"));
console.log(showType(true));
console.log(showType(null));
console.log(showType(undefined));
console.log(showType([]));
