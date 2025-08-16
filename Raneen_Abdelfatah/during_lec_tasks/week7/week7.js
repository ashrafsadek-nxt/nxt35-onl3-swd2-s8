const list = {
    fullname: "ahmed",
    age: 29,
    address: "cairo"
};

const first = document.getElementById("first");
const firstB = document.getElementById("firstB");

firstB.addEventListener('click', () => {
    // x => key in object
    // x in list => iterate keys
    for (let x in list) {
        first.innerHTML += `<p>${x} = ${list[x]}</p>`;
    }
});

let x = 10;
console.log("x = x");
console.log(`x = ${x}`);

// ---------------- second list ----------------
const list2 = ["ahmed", 29, "cairo"];
const second = document.getElementById("second");
const secondB = document.getElementById("secondB");

secondB.addEventListener('click', () => {
    // x => index in array
    // x in list2 => iterate indexes
    for (let x in list2) {
        second.innerHTML += `<p>${x} = ${list2[x]}</p>`;
    }
});

// ---------------- third list ----------------
const list3 = ["ahmed", 29, "cairo"];
const third = document.getElementById("third");
const thirdB = document.getElementById("thirdB");

thirdB.addEventListener('click', () => {
    // x => value in array
    // x of list3 => iterate values
    for (let x of list3) {
        third.innerHTML += `<p>${list3.indexOf(x)} = ${x}</p>`;
        // note: list3[x] does not work with for..of
        // indexOf(x) => index of current value
    }
});
