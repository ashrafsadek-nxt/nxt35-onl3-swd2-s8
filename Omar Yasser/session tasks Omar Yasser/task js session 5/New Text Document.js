const list = {
    fullname: "ahmed",
    age: 29,
    address: "cairo"
};

const first = document.getElementById("first");
const firstB = document.getElementById("firstB");

firstB.addEventListener('click', () => {
    // for-in loops over keys (property names) in the object
    for (let x in list) {
        first.innerHTML += `<p>${x} = ${list[x]}</p>`;
    }
});

let x = 10;
console.log("x = x");
console.log(`x = ${x}`);

// format string => backticks + ${variableName}
const list2 = ["ahmed", 29, "cairo"];
const second = document.getElementById("second");
const secondB = document.getElementById("secondB");

secondB.addEventListener('click', () => {
    // for-in loops over indexes in an array
    for (let x in list2) {
        second.innerHTML += `<p>${x} = ${list2[x]}</p>`;
    }
});

const list3 = ["ahmed", 29, "cairo"];
const third = document.getElementById("third");
const thirdB = document.getElementById("thirdB");

thirdB.addEventListener('click', () => {
    // for-of loops over values in the array
    for (let x of list3) {
        third.innerHTML += `<p>${list3.indexOf(x)} = ${x}</p>`;
        // note: list3[x] does not work with for-of
        // indexOf is used to find the index of the current value
    }
});


const list4 = ["ahmed", 29, "cairo"];
const fourth = document.getElementById("four");
const fourB = document.getElementById("fourB");

fourth.addEventListener('click', () => {
    list4.forEach(data=>{
        fourB.innerHTML += `<p>${x} = ${list[x]}</p>`;
    })
});



