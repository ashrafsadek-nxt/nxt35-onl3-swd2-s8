let x = 1000;
let y = "ahmed";
let f = 10.55;
let r = true;
let address = {
    street: "nasr",
    city: "cairo",
};
let salary = {
    amount: 12345,
    currency: "egp",
};
let children = ["ahmed", "aly"];
let data = [2, 5, 8];
let info = "123";
function showData() {
    const outputDv = document.getElementById("output");
    outputDv.innerHTML = `
        <p>${x}</p>
        <p>${y}</p>
        <p>${f}</p>
        <p>${r}</p>
        <p>${address.city}</p>
        <p>${children[0]} and ${children[1]}</p>
    `;
}
document.getElementById("btn").addEventListener("click", showData);
export {};
//# sourceMappingURL=app.js.map