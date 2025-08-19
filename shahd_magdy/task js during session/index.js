const list = {
    fullname: "ahmed",
    age: 29,
    address: "cairo"
}
const first = document.getElementById("first")
const firstB = document.getElementById("firstB")
firstB.addEventListener('click',()=>{
    // x
    // x in list => condition and increment
    for(let x in list)
    {
        first.innerHTML += `<p>${x} = ${list[x]}</p>` // x
    }
})

let x = 10;
console.log("x = x");
console.log(`x = ${x}`);

// format string => back quotation `   ${variable name}
const list2 = ["ahmed",29,"cairo"]
const second = document.getElementById("second")
const secondB = document.getElementById("secondB")
secondB.addEventListener('click',()=>{
    // x
    // x in list => condition and increment
    for(let x in list2)
    {
        second.innerHTML += `<p>${x} = ${list2[x]}</p>`
    }
})

const list3 = ["ahmed",29,"cairo"]
const third = document.getElementById("third")
const thirdB = document.getElementById("thirdB")
thirdB.addEventListener('click',()=>{
    // x
    // x of list => condition and increment
    for(let x of list3)
    {
        third.innerHTML += `<p>${list3.indexOf(x)} = ${x}</p>`
        // note => lists[x] do not work with for of
        // list3.indexOf(x) => return index of x
        // for of do not work with object because object is not iterable
    }
})

const list4 = ["ahmed",29,"cairo"]
const four = document.getElementById("four")
const fourB = document.getElementById("fourB")
fourB.addEventListener('click',()=>{
    list4.forEach(x=>{
        four.innerHTML+=`<p>${list4.indexOf(x)}=${x}</p>`
    })
})