const students = {
            Ahmed: 85,
            Mariam: 92,
            Youssef: 70,
            Salma: 55
        };
document.getElementById("btn").addEventListener("click", () => {
const outputi = document.getElementById("outputi");
outputi.innerHTML = "";
    for (let name in students) {
        let grade = students[name];
        let color;
        if (grade >= 90) {
            color = "green"; 
        } else if (grade >= 75) {
            color = "blue"; 
        } else if (grade >= 60) {
            color = "orange"; 
        } else {
            color = "red";
        }
        outputi.innerHTML += `<p>${name}: <span style="color:${color}">${grade}</span></p>`;
    }
});