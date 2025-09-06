let x: number = 1000;
let y: string = "ahmed";
let f: number = 10.55;
let r: boolean = true;
let address: { street: string; city: string } = {
  street: "nasr",
  city: "cairo",
};
let salary: { amount: number; currency: string } = {
  amount: 12345,
  currency: "egp",
};
let children: string[] = ["ahmed", "aly"];
let data: number[] = [2, 5, 8];
let info: any = "123";

function showData() {
  const outputDv = document.getElementById("output");
  outputDv!.innerHTML = `
        <p>${x}</p>
        <p>${y}</p>
        <p>${f}</p>
        <p>${r}</p>
        <p>${address.city}</p>
        <p>${children[0]} and ${children[1]}</p>
    `;
}

document.getElementById("btn")!.addEventListener("click", showData);
