let x = 1000;
let y = "ahmed";
let f = 10.55;
let r = true;
let address = { street: "nasr", city: "cairo" };
let salary = { amount: 12345, currency: "egp" };
let children = ["ahmed", "aly"];
let data = [2, 5, 8];
let info = "123";
function showData() {
    const outputDv = document.getElementById('output');
    outputDv.innerHTML = ` <p>${x}</p> 
                            <p>${y}</p> 
                            <p>${f}</p> 
                            <p>${r}</p> 
                            <p>${address.city}</p> 
                            <p>${children[0]} and ${children[1]}</p> `;
}
window.onload = () => {
    showData();
    document.getElementById('btn')?.addEventListener('click', showData);
};
class player {
    moveforward = "ff";
    movebackward = "kk";
    moveleft = "ll";
    moveright = "dd";
    sum() {
        let x = 10;
        return x * x;
    }
    ;
    total() {
        let y = false;
        return y;
    }
}
const e = new player();
console.log(e.movebackward);
console.log(e.moveforward);
console.log(e.moveleft);
console.log(e.moveright);
class player2 {
    moveforward;
    movebackward = "kk";
    moveleft;
    moveright = "dd";
    constructor(mf, ml) {
        this.moveforward = mf;
        this.moveleft = ml;
    }
    sum() {
        let x = 10;
        return x * x;
    }
    ;
    total() {
        let y = false;
        return y;
    }
}
const t = new player2("ff", "jj");
console.log(t.movebackward);
console.log(t.moveforward);
console.log(t.moveleft);
console.log(t.moveright);
class player3 {
    x = "cccvc";
    y;
    constructor(t) {
        this.y = t;
    }
    showt() {
        return this.y;
    }
}
const g = new player3(123);
console.log(g.x);
console.log(g.showt());
//export {};
//# sourceMappingURL=app.js.map