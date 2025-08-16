 function calculateResult() {
            let name = document.getElementById("studentName").value;

            let science = Number(document.getElementById("science").value);
            let math = Number(document.getElementById("math").value);
            let arabic = Number(document.getElementById("arabic").value);
            let english = Number(document.getElementById("english").value);
            let economics = Number(document.getElementById("economics").value);
            let art = Number(document.getElementById("art").value);

            if (!name || isNaN(science) || isNaN(math) || isNaN(arabic) || isNaN(english) || isNaN(economics) || isNaN(art)) {
                alert("Please fill in all fields correctly!");
                return;
            }

            let total = science + math + arabic + english + economics + art;
            let average = total / 6;

            let grade, gradeClass;
            if (average >= 90) { grade = "A+"; gradeClass = "Aplus"; }
            else if (average >= 85) { grade = "A"; gradeClass = "A"; }
            else if (average >= 75) { grade = "B"; gradeClass = "B"; }
            else if (average >= 65) { grade = "C"; gradeClass = "C"; }
            else if (average >= 50) { grade = "D"; gradeClass = "D"; }
            else { grade = "F"; gradeClass = "F"; }

            document.getElementById("output").innerHTML += `
                <div class="student-card ${gradeClass}">
                    <div class="student-info">
                        <h2>${name}</h2>
                        <p>Science: ${science}</p>
                        <p>Math: ${math}</p>
                        <p>Arabic: ${arabic}</p>
                        <p>English: ${english}</p>
                        <p>Economics: ${economics}</p>
                        <p>Art: ${art}</p>
                        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
                    </div>
                    <div class="student-grade">
                        ${grade}
                    </div>
                </div>
            `;
        }