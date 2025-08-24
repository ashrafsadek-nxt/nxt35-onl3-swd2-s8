const fiveB =document.getElementById("fiveB");
fiveB.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        if(!response.ok){
            throw new Error ("error occure")
        }
        return response.json();
    }).then (data=>{
        const list =document.getElementById("lst")
        list.innerHTML='';
      data.forEach(user=>{
        const li =document.createElement('li');
        li.textContent=`${user.name} -------${user.email}`;
list.appendChild(li)
      });
            
        }).catch(error=>{
            alert('loading failed')
        })
    })