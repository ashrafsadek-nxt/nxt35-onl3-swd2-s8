let students = [
    { name: "ahmed", degree: 50 },
    { name: "sayed", degree: 85 },
    { name: "sara", degree: 40 },
    { name: "fatma", degree: 95 },
    { name: "mona", degree: 100 },
    { name: "nadia", degree: 80 },
    { name: "rawan", degree: 70 },
    { name: "mohamed", degree: 69 },
];

let divs = [
    document.getElementById("d1"),
    document.getElementById("d2"),
    document.getElementById("d3"),
    document.getElementById("d4"),
    document.getElementById("d5"),
    document.getElementById("d6"),
    document.getElementById("d7"),
    document.getElementById("d8")
];

for (let i = 0; i < students.length; i++) {
    let degree = students[i].degree;
    let grade ;

    if (degree >= 90) {
        grade = "A"; 
        divs[i].style.background = "blue"; 
    }

    else if (degree >= 80) { 
        grade = "B"; 
        divs[i].style.background = "green"; 
    }
    else if (degree >= 70) { 
        grade = "C"; 
        divs[i].style.background = "yellow"; 
        divs[i].style.color = "black"; 
    }
    else if (degree >= 60) { 
        grade = "D"; 
        divs[i].style.background = "orange"; 
    }
    else { 
        grade = "F"; 
        divs[i].style.background = "red"; 
    }

    divs[i].innerHTML = `${students[i].name} - ${degree} - ${grade}`;
}
