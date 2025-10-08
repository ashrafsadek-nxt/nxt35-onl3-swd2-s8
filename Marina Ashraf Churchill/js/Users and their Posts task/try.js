

async function getUsers() {
  try {
    const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = usersResponse.data;

    for (let user of users) {
      const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { userId: user.id,_limit: 5 }
       
      });

      const posts = postsResponse.data.map(post =>`${post.id} - ${post.title}`).join("<br>");

      // Insert row in table
      const tableBody = document.querySelector("#userTable tbody");
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.name}</td>
        <td>${posts}</td>
      `;

      tableBody.appendChild(row);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

// Run when page loads
getUsers();
