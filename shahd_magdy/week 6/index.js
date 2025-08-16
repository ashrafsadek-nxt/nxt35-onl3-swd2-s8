
let students = {
  "shahd": 95,
  "menna": 82,
  "dina": 77,
  "omar": 60,
  "mohamed": 40
};

function getLetterGrade(grade) {
  if (grade >= 90) return "A";
  else if (grade >= 80) return "B";
  else if (grade >= 70) return "C";
  else if (grade >= 50) return "D";
  else return "F";
}


let studentsDiv = document.getElementById("students");
for (let name in students) {
  let grade = students[name];
  let letter = getLetterGrade(grade);

  let card = document.createElement("div");
  card.className = `student-card ${letter}`;
  card.textContent = `${name}: ${letter}`;
  studentsDiv.appendChild(card);
}

function checkGrade() {
  let grade = document.getElementById("gradeInput").value;
  let result = document.getElementById("result");
  let letter = "";

  letter = getLetterGrade(grade);

  result.textContent = `Your Grade is: ${letter}`;
  result.className = `card ${letter}`;
}

    