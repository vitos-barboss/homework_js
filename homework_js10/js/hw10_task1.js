var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',
    extractNumber: function () {
        var arrOfNum = [];
        for(var key in obj) {
            if(typeof(obj[key]) === "number") arrOfNum.push(obj[key]);
        }
        return arrOfNum;
    },
    extractString: function () {
        var arrOfStr = [];
        for(var key in obj) {
            if(typeof(obj[key]) === "string") arrOfStr.push(obj[key]);
        }
        return arrOfStr;
    }
};

var ages = obj.extractNumber();
console.log(ages);
var names = obj.extractString();
console.log(names);

