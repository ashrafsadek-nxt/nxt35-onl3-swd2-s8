let x: number = 1000;
let y: string = "ahmed";
let z: boolean = true;
let address: {street: string, city: string} = {street: "nasr", city: "cairo"};
let salary: {amount: number, currency: string} = {amount: 325346, currency: "egp"};
let children: string[] = ["ali", "mohamed"];
let data: number[] = [100, 200, 300];
let info: any = "123";

function showdata()
{
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