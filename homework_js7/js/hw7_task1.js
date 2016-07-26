function createFunctions(count) {
    // debugger;
    var arr = [];
    for(var i = 0; i < count; i++) {
            arr[i] = function () {
                return i;
            }
    }
    return arr;

}




var callbacks = createFunctions(5);
// console.log(callbacks[2]());
console.log(callbacks[0]());
console.log(callbacks[1]);
// console.log(callbacks[0]());
// console.log(callbacks[3]());