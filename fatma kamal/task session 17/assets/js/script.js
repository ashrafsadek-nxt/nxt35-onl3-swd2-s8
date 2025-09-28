async function getuserandpost() {
    try{
        const response= await axios.get(
            'https://jsonplaceholder.typicode.com/users',
            {params:{_limit:5}}
        );
        const users = response.data;
        const telbody=document.querySelector('#tel tbody' );
        telbody.innerHTML='';
        for( const user of users){
            const postresponse= await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
                {params:{userId : user.id}}
            );
            const posts =postresponse.data;
            const tr = document.createElement('tr');
            tr.innerHTML=`  
                       <td>${user.id}</td>
                       <td>${user.name}</td>
                       <td>${user.email}</td>
                       <td>
                       <span>${posts.map(post=>`${post.id} - ${post.title}`).join(`<br>`)}</span>
                       </td>
                    `;
            telbody.appendChild(tr);
        }

    }
    catch (err){
        if(axios.isAxiosError(err)){
            console.error(err.message);
        }
        else{
            console.error("unknow error");
        }

    }
    
}
getuserandpost();
