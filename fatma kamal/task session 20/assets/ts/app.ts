let x: number = 1000;
let y: string = "ahmed";
let f: number = 10.55; 
let r: boolean = true; 
let address: {street: string, city: string} = {street: "nasr", city: "cairo"}; 
let salary: {amount: number, currency: string} = {amount: 12345, currency: "egp"}; 
let children: string[] = ["ahmed", "aly"]; 
let data: number[] = [2, 5, 8]; 
let info: any = "123"; 
function showData() 
{ 
    const outputDv = document.getElementById('output'); 
    outputDv!.innerHTML = ` <p>${x}</p> 
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

class player
{
    moveforward:string="ff";
    movebackward:string="kk";
    moveleft:string="ll";
    moveright:string="dd";

    sum():number{
        let x:number=10;
        return x*x;
    };
    total():boolean{
        let y:boolean=false;
        return y;
    }
}

const e = new player();
console.log(e.movebackward);
console.log(e.moveforward);
console.log(e.moveleft);
console.log(e.moveright);

class player2
{
    moveforward:string;
    movebackward:string="kk";
    moveleft:string;
    moveright:string="dd";
    constructor(mf: string , ml:string){
        this.moveforward=mf;
        this.moveleft=ml;
    }

    sum():number{
        let x:number=10;
        return x*x;
    };
    total():boolean{
        let y:boolean=false;
        return y;
    }
}

const t = new player2("ff","jj");
console.log(t.movebackward);
console.log(t.moveforward);
console.log(t.moveleft);
console.log(t.moveright);



class player3{
    public x:string="cccvc";
    private y:number;
    constructor(t:number){
        this.y=t;
    }
    showt():number{
        return this.y
    }
}
const g=new player3(123);
console.log(g.x);
console.log(g.showt());
