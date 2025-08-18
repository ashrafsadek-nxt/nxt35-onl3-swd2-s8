function toLetterGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function gradeClass(letter) {
    return "grade-" + letter;
}

function renderGrades(containerId, students) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    Object.entries(students).forEach(([name, score]) => {
        const letter = toLetterGrade(Number(score));
        const card = document.createElement("div");
        card.className = "card";

        const left = document.createElement("div");
        left.innerHTML = 
        ` <div class="name">${name}</div>
          <div class="score">درجة: ${score} / تقدير: ${letter}</div>`;

        const badge = document.createElement("div");
        badge.className = "badge " + gradeClass(letter);
        badge.textContent = letter === "F" ? "F (ساقط)" : letter;

        card.appendChild(left);
        card.appendChild(badge);
        container.appendChild(card);
    });
}


const students = {
    "أحمد": 95,
    "سلمى": 83,
    "جمال": 74,
    "مريم": 62,
    "خالد": 58,
    "نور": 89
};

renderGrades("results", students);