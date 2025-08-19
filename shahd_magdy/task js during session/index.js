const list = {
    fullname: "ahmed",
    age: 29,
    address: "cairo"
}
const first = document.getElementById("first")
const firstB = document.getElementById("firstB")
firstB.addEventListener('click',()=>{
    
    for(let x in list)
    {
        first.innerHTML += `<p>${x} = ${list[x]}</p>` // x
    }
})

let x = 10;
console.log("x = x");
console.log(`x = ${x}`);

const list2 = ["ahmed",29,"cairo"]
const second = document.getElementById("second")
const secondB = document.getElementById("secondB")
secondB.addEventListener('click',()=>{
    
    for(let x in list2)
    {
        second.innerHTML += `<p>${x} = ${list2[x]}</p>`
    }
})

const list3 = ["ahmed",29,"cairo"]
const third = document.getElementById("third")
const thirdB = document.getElementById("thirdB")
thirdB.addEventListener('click',()=>{
    
    for(let x of list3)
    {
        third.innerHTML += `<p>${list3.indexOf(x)} = ${x}</p>`

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