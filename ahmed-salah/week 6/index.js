function showGrades(){
const grades ={
ahmed:97,
mohamed:70,
aya:95,
tarek:53,
fares:83,
mariam:67,
omar:92,
khaled:85,
malak:81,
menna:77
};


const keys = Object.keys(grades);
//console.log(keys);
const values = Object.values(grades);
//console.log(values);

dg = document.getElementById('dg');

for(let student in grades){
let grade = grades[student];
    let g="";
    let color ="";
     
     if (grade>=90) {g="A"; color="limegreen";}
     else if (grade>=80){g="B";color="green"; }
     else if (grade>=70){g="C";color="yellow";}
     else if (grade>=60){g="D";color="orange";}
     else {g="F"; color="red";}

     const sdiv = document.createElement('div');
     sdiv.style.backgroundColor=color;
     sdiv.style.padding = "10px";
     sdiv.style.margin = "5px 0";
     sdiv.textContent = `${student} : ${g}`;
     sdiv.style.display = "inline-block";
     sdiv.style.borderRadius = "15px";
     

     dg.appendChild(sdiv);
     dg.appendChild(document.createElement("br"));
     



  // dg.innerHTML += `${keys[i]}  :  <span style="color:${color}">${g}</span><br>`;

}


}