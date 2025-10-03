let x = 1000;
let y = "ahmed";
let z = true;
let address = { street: "nasr", city: "cairo" };
let salary = { amount: 325346, currency: "egp" };
let children = ["ali", "mohamed"];
let data = [100, 200, 300];
let info = "123";
function showdata() {
    const outputdev = document.getElementById('output');
    outputdev.innerHTML = `
    <p>${x}</p>
    <p>${y}</p>
    <p>${z}</p>
    <p>${address.city}</p>
    <p>${children[0]} and ${children[1]}</p>
    `;
}
const btn = document.getElementById('btn');
btn.addEventListener('click', showdata);
export {};
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map