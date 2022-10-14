// function FullName( firstName, lastName ) {
//     console.log(`${firstName} ${lastName.toUpperCase()}`)
// }

// FullName("Joe", "Mama")

// Number 
// BigInt
// String

// let name="Jason"
// let anotherName='David'
// let fullName=`Joe ${name}`

// Boolean

// let conditionChecked=true

// let conditionChecked2=false

// null 

// let age=null 

// undefined 

// let i; 

// let employeeOne ={
//     "firstName":"Jason",
//     "lastName":"Pan",
//     "city":"Canberra",
//     "age":"19",
// }

// console.log(typeof(employeeOne))

// array indexing 

// let StudentOne ={
//     "firstName":"Jason",
//     "age":"19",
//     "grade":"77"
// }

// let StudentTwo ={
//     "firstName":"John",
//     "age":"19",
//     "grade":"77",
// }

// if (StudentOne.grade > StudentTwo.grade) {
//          console.log(`${StudentOne.firstName} scored a higher grade than ${StudentTwo.firstName}`);

//  } else if (StudentOne.grade === StudentTwo.grade) {
//     console.log(`${StudentOne.firstName} and ${StudentTwo.firstName} scored the same`);
//  } else {
//     console.log(`${StudentTwo.firstName} scored a higher grade than ${StudentOne.firstName}`);
//  }


//  let weekdaylist = ["Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday", "Sunday"]

// for (let i = 0; i < weekdaylist.length; i++) {
//     console.log(`Day ${i+1}: ${weekdaylist[i]}`)
// }

// let group = [1,2,3,4,5]

// group.pop(4)
// group.push(6)
// group.shift()
// group.unshift(7)

// console.log(group)

// let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// let nameSet = new Set()

// nameSet.add("Jason")

// let result = nameSet.add("Jason1")

// // console.log(result)
// nameSet.delete("Jason1")

// console.log(nameSet)

// let uniList = ["88123", "21839", "12903", "12093", "17790", "56782", "88123"]

// let uniqueList = [...new Set(uniList)];

// console.log(uniqueList);


// let contryCapitalMap = new Map ()

// contryCapitalMap.set("Australia", "Canberra")
// contryCapitalMap.set("New Zealand", "Wellington")
// contryCapitalMap.set("Japan", "Tokyo")

// console.log(contryCapitalMap)

// for(let i of contryCapitalMap.keys()){
//     console.log(i)
// }

let studentMarkMap = new Map ()

studentMarkMap.set("Jason", 49)
studentMarkMap.set("John", 65)
studentMarkMap.set("Kevin", 77)
studentMarkMap.set("William", 90)
studentMarkMap.set("Peter", 98)
studentMarkMap.set("Francis", 92)
studentMarkMap.set("Clarence", 59)
studentMarkMap.set("Bailey", 97)
studentMarkMap.set("Tom", 81)
studentMarkMap.set("Felix", 78)
studentMarkMap.set("Ryan", 51)

let sum = 0;
for (let value of studentMarkMap.values()) {
    sum += value;
};

let getMax = function (someMap) {
    let maxValue;
    for (let [key, value] of someMap) {
       maxValue = (!maxValue || maxValue < value) ? value : maxValue;
    }
    return maxValue;
  }

  let getMin = function (someMap) {
    let minValue;
    for (let [key, value] of someMap) {
       minValue = (!minValue || minValue > value) ? value : minValue;
    }
    return minValue;
  }

  console.log('the highest mark was ' + getMax(studentMarkMap));

  console.log('the lowest mark was ' + getMin(studentMarkMap));

average = sum / studentMarkMap.size;

console.log('the average of the class was ' + average );




// for(let v of contryCapitalMap.values()){
//     console.log(v)
// }

// for(let e of contryCapitalMap.entries()){
//     console.log(e)
// }

// Maps retain the order of insertion and keeps a list of elements 
// if two keys are the same, the latest value will be kept