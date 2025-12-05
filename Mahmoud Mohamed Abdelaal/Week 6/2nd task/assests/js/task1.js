let gradeInput = document.querySelector("input");
let checkBtn = document.getElementById("btn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    let grade = parseInt(gradeInput.value);

    let letter = "";
    let color = "";

    if (grade >= 95)
         {
        letter = "A";
        color = "green";
    } else if (grade >= 80)
         {
        letter = "B";
        color = "blue";
    } else if (grade >= 65)
         {
        letter = "C";
        color = "violet";
    } else if (grade >= 50) 
        {
        letter = "D";
        color = "orange";
    } else
         {
        letter = "F";
        color = "red";
    }

    result.textContent = `Your Grade: ${letter}`;
    result.style.color = color;

    gradeInput.value = "";
});
