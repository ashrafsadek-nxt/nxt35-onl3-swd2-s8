const list = {
  fullname: "ahmed",
  age: 29,
  country: "Egypt"
};
const first = document.getElementById("first");
const firstb = document.getElementById("firstb");
second.addEventListener("click", () => {
  for(let x in list)
  {
    first.innerHTML += `<p>${x} = ${list[x]}</p>`;
  }
})
let x = 10;
console.log("x=x");
console.log(`x=${x}`);
const list2 = ["ahmed", 29, "Egypt"]
const second = document.getElementById("second");
const secondb = document.getElementById("secondb");
secondb.addEventListener("click", () => {
  for(let x in list2)
  {
    second.innerHTML += `<p>${x} = ${list2[x]}</p>`;
  }
})
const list3 = ["ahmed", 29, "Egypt"]
const third = document.getElementById("third");
const thirdb = document.getElementById("thirdb");
thirdb.addEventListener("click", () => {
  for(let x of list3)
  {
    third.innerHTML += `<p>${list3.indexOf(x)} = ${x}</p>`;
  }
})