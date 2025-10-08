
let p=document.getElementById("firstp");

const f= document.getElementById("firstB")
const s=document.getElementById("secondB")
const t=document.getElementById("thirdB")
   const list =document.getElementById("lst")
      const i=document.getElementById("inputf").value.trim();

const five =document.getElementById("fiveB");
five.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        if(!response.ok){
            throw new Error ("error occure")
        }
        return response.json();
   
    }).then (data=>{
     
        list.innerHTML+='';
      data.forEach(user=>{
        const li =document.createElement('li');
          
        li.textContent +=`${user.name} -------${user.email}`;
list.appendChild(li)
      });
            
        }).catch(error=>{
            alert('loading failed')
        })
    })

f.addEventListener('click',()=>{
    const i=document.getElementById("inputf").value.trim();
  if(i===""){
      alert('please enter your name');
  }
  else{
   

        const li =document.createElement('li');
        li.textContent +=` name ${i}`;
  
list.appendChild(li)
    
 document.getElementById("inputf").value = "";
row.innerHTML =`${i}`;
  }
})


s.addEventListener('click',()=>{
      const i=document.getElementById("inputf").value.trim();
  if(i===""){
      alert('please enter your email');
  }
  else{
  p.innerHTML +=`Email: ${i} `;
   document.getElementById("inputf").value = "";
  }
})
 
t.addEventListener('click',()=>{
  const i=document.getElementById("inputf").value.trim();
  if(i===""){
     alert('please enter your id');
  }
  else{
  p.innerHTML +=`id: ${i} `;
   document.getElementById("inputf").value = "";
  }
})
