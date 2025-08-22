function showStudentsGrades() {
    let students = {
        "Omar": 96,
        "Hannah": 85,
        "Ahmed": 70,
        "Laila": 62,
        "Mona": 30
    }
    let container = document.getElementById("studentsContainer");
    container.innerHTML = "";
    for (let name in students) {
        let score = students[name]
        let grade = getGrade(score)
        let studentDiv = document.createElement("div");
        studentDiv.className = `grade-${grade}`;
        studentDiv.textContent = `${name}-score:${score}-grade:${grade}`;
        container.appendChild(studentDiv);
    }
}
function getGrade(score) {
    if (score > 100 || score < 0) return "Invalid Score";
    else if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}
function checkGrade() {
    let score = document.getElementById("scoreInput").value;
    if (score === "") {
        document.getElementById("gradeResult").textContent = "Please enter a score!";
        return;
    }
    let grade = getGrade(Number(score));
    document.getElementById("gradeResult").textContent = `Your grade is: ${grade}`;
}
document.getElementById("checkBtn").addEventListener("click", checkGrade);
showStudentsGrades();