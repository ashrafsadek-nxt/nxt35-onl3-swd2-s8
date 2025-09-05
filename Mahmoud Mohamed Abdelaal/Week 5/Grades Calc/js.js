function calculateGrade() {
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const score = parseFloat(document.getElementById("score").value);
  const resultEl = document.getElementById("result");

  if (!name || !subject || isNaN(score)) {
    resultEl.textContent = "Please enter name, subject, and score!";
    resultEl.className = "";
    return;
  }

  let grade, gradeClass;
  if (score >= 90) {
    grade = "A";
    gradeClass = "grade-a";
  } else if (score >= 80) {
    grade = "B";
    gradeClass = "grade-b";
  } else if (score >= 70) {
    grade = "C";
    gradeClass = "grade-c";
  } else if (score >= 50) {
    grade = "D";
    gradeClass = "grade-d";
  } else {
    grade = "F";
    gradeClass = "grade-f";
  }

  resultEl.textContent = `${name} -> ${subject}: ${grade}`;
  resultEl.className = gradeClass;
}
