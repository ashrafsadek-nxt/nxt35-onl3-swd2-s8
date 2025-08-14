function grade_letter(degree)
{
  if(degree >= 90)
    {
        return 'A';
    }
  if(degree >= 80)
    {
        return 'B';
    }
  if(degree >= 70)
    {
        return 'C';
    }
  if(degree >= 50)
    { 
        return 'D';
    }
  if(degree < 50)
    {
        return 'F';
    }
}
var students ={
  "Mustafa": 95,
  "Ahmed": 82,
  "Omar": 76,
  "Sara": 39,
  "Youssef": 60
};
var container = document.getElementById("student-grades");
for (var name in students)
{
  var degree = students[name];
  var grade = grade_letter(degree);
  var studentDiv = document.createElement("div");
  studentDiv.className = "student";
  var gradeSpan = document.createElement("span");
  gradeSpan.textContent = grade;
  gradeSpan.className = `grade-${grade}`;
  studentDiv.textContent = `${name}: `;
  studentDiv.appendChild(gradeSpan);
  container.appendChild(studentDiv);
}
