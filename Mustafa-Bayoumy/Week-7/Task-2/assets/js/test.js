const fiveb = document.getElementById("fiveb");
fiveb.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response =>{
      if(!Response.ok){
        throw new Error("error while loading data");
      }
      return Response.json();
    })
    .then(data =>{
      const list = document.getElementById("lst");
      list.innerHTML = "";
      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} -------- ${user.email}`;
        list.appendChild(li);
      });
    })
    .catch(() =>{
      alert('laoding failed');
    });
});