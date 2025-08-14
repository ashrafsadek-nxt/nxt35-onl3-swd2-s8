let gradeInput = document.querySelector("input");
let checkBtn = document.getElementById("btn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    let grade = parseInt(gradeInput.value);

    let letter = "";
    let color = "";

    if (grade >= 90)
         {
        letter = "A";
        color = "green";
    } else if (grade >= 80)
         {
        letter = "B";
        color = "blue";
    } else if (grade >= 70)
         {
        letter = "C";
        color = "orange";
    } else if (grade >= 60) 
        {
        letter = "D";
        color = "brown";
    } else
         {
        letter = "F";
        color = "red";
    }

    result.textContent = `Your Grade: ${letter}`;
    result.style.color = color;

    gradeInput.value = "";
});
