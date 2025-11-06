// var arr=["Always use === instead of ==",
//   "Use const and let instead of var",
//   "Arrays in JS are zero-indexed",
//   "Functions can be stored in variables",
//   "Use template literals with backticks",
//   "Objects store data as key-value pairs",
//   "Use for...of to loop over array values",
//   "NaN is of type 'number'",
//   "null is an object in JavaScript",
//   "Use JSON.stringify to convert object to string"
// ]

//     var res=(Math.floor(Math.random()* arr.length))// index
//     document.writeln(arr[res]);


// task2


// function degree(){
// var arr2=[
// {name:"marina",degree:99},
// {name:"mina",degree:52},
// {name:"ali",degree:30},
// {name:"manar",degree:40}
//     ];
// arr2.push({name:"ahmed",degree:80}); //push new object
// arr2.splice(2,0,{name:"tamer",dgree:94},{name:"Amr",dgree:74});//add two objects after oject 2
// arr2.splice(4,1);// ali was removed

// arr2.sort((a, b) => a.name.localeCompare(b.name));
// console.log(arr2) // to store names

// arr2.sort((a, b) => b.degree - a.degree);
// console.log(degree);

//     for(var i=0 ;i<arr2.length;i++){
//         if(arr2[i].degree >=90 && arr2[i].degree<=100){
//               document.writeln(` high degree: ${arr2[i].name} <br>`)
//         }
//         else{
//               document.writeln( `low degree: ${arr2[i].name} <br>`)
//         }
//     }
   
// }

//task3


function birth(birth){
if (birth.length ===10 && birth[2]==='-' && birth[5]==='-'){
    let parts= birth.split('-');
    let day = parseInt(parts[0]);   // نحولهم لارقام
    let month = parseInt(parts[1]); 
    let year = parseInt(parts[2]); 

    let d = new Date(year, month - 1, day);// علشان الاشهر بتبدا من 0
     alert("Your date is: " + d.toDateString());// بتحول التاريخ لشكل مرتب
//22-01-1999
}

else {
    alert("Wrong Date Format");
  }
}
var birthDate =prompt("please enter your birth day data in this format  (DD – MM – YYYY) ");
birth(birthDate); 

//task4

 var radius=prompt(' circle’s radius');
 radius=parseFloat(radius)
 let area = Math.PI * Math.pow(radius, 2);
 alert("The area of the circle is: " + area);
  

 let num = prompt("Enter a number to calculate its square root:");
 num = parseInt(num);
 let sqrt = Math.sqrt(num);
 alert("The square root of " + num + " is: " + sqrt);