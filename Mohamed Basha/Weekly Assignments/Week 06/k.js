function CalcResults() {
  let name = document.getElementById("student-name").value.trim();

  let subjects = {
    Arabic: document.getElementById("Arabic").value.trim(),
    Math: document.getElementById("Math").value.trim(),
    English: document.getElementById("English").value.trim(),
    Physics: document.getElementById("Physics").value.trim(),
    Chemistry: document.getElementById("Chemistry").value.trim(),
    Biology: document.getElementById("Biology").value.trim(),
  };

  if (!name) {
    alert("Please enter the student name!");
    return;
  }

  if (!/^[\u0621-\u064Aa-zA-Z\s]+$/.test(name)) {
    alert("Name must contain only letters (Arabic/English) and spaces!");
    return;
  }

  let invalidSubjects = {};
  for (let subject in subjects) {
    if (
      subjects[subject] === "" ||
      Number(subjects[subject]) < 0 ||
      Number(subjects[subject]) > 100
    ) {
      invalidSubjects[subject] = true;
    } else {
      subjects[subject] = Number(subjects[subject]);
    }
  }

  if (Object.keys(invalidSubjects).length > 0) {
    alert(
      `Invalid mark entered for: ${Object.keys(invalidSubjects).join(
        ", "
      )}. Please enter numbers between 0 and 100.`
    );
    return;
  }

  let total =
    subjects.Arabic +
    subjects.Math +
    subjects.English +
    subjects.Physics +
    subjects.Chemistry +
    subjects.Biology;

  let average = total / 6;

  let passedAll = true;
  let failedSubjects = [];

  let subjectsHTML = '<div class="subjects-container">';
  for (let subject in subjects) {
    let mark = subjects[subject];
    let GradClass = "";

    if (mark >= 90) GradClass = "subject-A";
    else if (mark >= 80) GradClass = "subject-B";
    else if (mark >= 70) GradClass = "subject-C";
    else if (mark >= 60) GradClass = "subject-D";
    else if (mark >= 50) GradClass = "subject-E";
    else GradClass = "subject-F";

    if (mark < 50) {
      passedAll = false;
      failedSubjects.push(subject);
    }

    subjectsHTML += `<div class="subject-box ${GradClass}">${subject}: ${mark}</div>`;
  }
  subjectsHTML += "</div>";

  let grade, gradeColor;
  if (average >= 90) (grade = "A"), (gradeColor = "#2ecc71");
  else if (average >= 80) (grade = "B"), (gradeColor = "#3498db");
  else if (average >= 70) (grade = "C"), (gradeColor = "#f1c40f");
  else if (average >= 60) (grade = "D"), (gradeColor = "#e67e22");
  else if (average >= 50) (grade = "E"), (gradeColor = "#9b59b6");
  else (grade = "F"), (gradeColor = "#e74c3c");

  let statusMessage = passedAll
    ? `<p style="color:green;"><strong>Result:</strong> Passed all subjects</p>`
    : `<p style="color:red;"><strong>Result:</strong> Failed in ${failedSubjects.join(
        ", "
      )}</p>`;

  document.getElementById("Cards").innerHTML += `
  <div class="student-card">
      <div class="student-info">
          <h2>${name}</h2>
          ${subjectsHTML}
          <p><strong>Average:</strong> ${average.toFixed(2)}</p>
          ${statusMessage}
      </div>
      <div class="student-grade" style="background: ${gradeColor}">
          ${grade}
      </div>
  </div>`;
}
