function calculateGrade() {
  const name = document.getElementById("studentName").value;
  const subjects = ["science","math","arabic","english","economics","art"];
  let values = [];

  for (let sub of subjects) {
    let val = Number(document.getElementById(sub).value);
    if (isNaN(val) || val === "") {
      alert("Please enter all fields correctly!");
      return;
    }
    values.push(val);
  }

  let total = values.reduce((a,b) => a+b, 0);
  let average = total / subjects.length;
  let grade = "";
  let gradeClass = "";

  if (average > 90) { grade = "A+"; gradeClass = "grade-Aplus"; }
  else if (average > 80) { grade = "A"; gradeClass = "grade-A"; }
  else if (average > 70) { grade = "B"; gradeClass = "grade-B"; }
  else if (average > 60) { grade = "C"; gradeClass = "grade-C"; }
  else if (average > 50) { grade = "D"; gradeClass = "grade-D"; }
  else { grade = "F"; gradeClass = "grade-F"; }

  document.getElementById("output").innerHTML = `
    <h2>${name}</h2>
    <p><strong>Total:</strong> ${total}</p>
    <p><strong>Average:</strong> ${average.toFixed(2)}</p>
    <p class="${gradeClass}"><strong>Grade:</strong> ${grade}</p>
  `;
}