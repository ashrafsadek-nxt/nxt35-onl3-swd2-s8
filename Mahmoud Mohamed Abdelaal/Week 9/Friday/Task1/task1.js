async function getUsersAndPosts() {
  try {
    // fetch users and posts
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users',
        {params: { _limit: 2 }}
    );

         const users = usersResponse.data;

         const tblbody = document.querySelector("#userTable tbody"); // Get the table body element

         tblbody.innerHTML = '';

         for (const user of users) 
         {  
                const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts',
                    {params: { userId: user.id , _limit: 5 }}
                );

                const posts = postsResponse.data;

                // Create a new row for the user
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td><ul>${posts.map(post => `<li>${post.body}</li>`).join('')}</ul></td>
                `;
                tblbody.appendChild(tr); 
         }


        } catch (err) {
            console.error("Error:", err);
        }
    }


    getUsersAndPosts();