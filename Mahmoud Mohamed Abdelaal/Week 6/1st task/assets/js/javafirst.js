const obj = {
    name: "youssef",
    AGE: "22",
    ADRESS: "CAIRO"
};
const div1 = document.getElementById("div1")
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", ()=>{
    for(let x in obj) {
        div1.innerHTML += `<p>${x} = ${obj[x]}</p>`
    }
})
//////
const list = ["youssef",22,"cairo"]
const div2 = document.getElementById("div2")
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", ()=>{
    for(let x in list) {
        div2.innerHTML += `<p>${x} = ${list[x]}</p>`
    }
})
//////
const list2 = ["youssef",22,"cairo"]
const div3 = document.getElementById("div3")
const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", ()=>{
    for(let x of list2) {
        div3.innerHTML += `<p>${list2.indexOf(x)} = ${x}</p>`
    }
})