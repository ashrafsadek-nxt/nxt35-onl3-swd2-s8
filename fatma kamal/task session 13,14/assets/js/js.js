const list={
    name:"ahmed",
    age:29,
    address:"cario"

}
const first=document.getElementById("first");
const firstB=document.getElementById("firstB");
firstB.addEventListener('click',()=>{
    for(let x in list)
    {
        first.innerHTML+=`<p>${x}=${list[x]}</p>`;

    }
})

let x=10;
console.log("x=x");
console.log(`x=${x}`);


const list2=["ahmed",29,"cario"]
const second=document.getElementById("second");
const secondB=document.getElementById("secondB");
firstB.addEventListener('click',()=>{
    for(let x in list2)
    {
        second.innerHTML+=`<p>${x}=${list2[x]}</p>`;

    }
})


const list3=["ahmed",29,"cario"]
const third=document.getElementById("third");
const thirdB=document.getElementById("thirdB");
firstB.addEventListener('click',()=>{
    for(let x of list3)
    {
        third.innerHTML+=`<p>${list.indexof(x)}=${x}</p>`;

    }
})



const fiveB=document.getElementById('fiveB');
fiveB.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>{
        if(!Response.ok){
            throw new Error('حدث خطا في تحميل البيانات');
        }
        return Response.json();
    }).then(data=>{
        const list=document.getElementById('lst');
        list.innerHTML='';
        data.forEach(user=>{
            const li =document.createElement('li');
            li.textContent=`${user.name}------------${user.email}`;
            list.appendChild(li);
        });
    }).catch(error=>{
        alert('loading failed');
    })
})
