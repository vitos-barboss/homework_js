//------First method

function shuffle(arr) {
    return arr.sort(function () {
        return 0.5 - Math.random();
    })
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));

//------Second method
//
// function shuffle(arr) {
//     var len = arr.length;
//     var newArr = [];
//     var x;
//
//     for(var i = 0; i < len; i++) {
//         x = Math.floor(Math.random() * len);
//         if(newArr[x] === undefined) {
//             newArr[x] = arr[i];
//         } else {
//             i--;
//         }
//     }
//
//     return newArr;
// }




