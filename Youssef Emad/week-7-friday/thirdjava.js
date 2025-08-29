
    async function showUsersPosts() {
    try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = usersResponse.data;
        let tableHTML = `
        <table border="1" cellpadding="10">
            <thead>
            <tr>
                <th>User</th>
                <th>Posts</th>
            </tr>
            </thead>
            <tbody>
        `;
        for (let user of users) {
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = postsResponse.data;
        let postsHTML = "<ul>";
        for (let post of posts) {
            postsHTML += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
        }
        postsHTML += "</ul>";
        tableHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${postsHTML}</td>
            </tr>
        `;
        }
        tableHTML += `</tbody></table>`;
        document.getElementById("output").innerHTML = tableHTML;
    } catch (err) {
        console.error("Error loading posts", err);
    }
    }
    showUsersPosts();