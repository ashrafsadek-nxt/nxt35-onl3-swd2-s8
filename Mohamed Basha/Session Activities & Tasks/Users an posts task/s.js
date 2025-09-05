async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      { params: { _limit: 3 } }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function displayUsersWithPosts() {
  const users = await getUsers();
  const posts = await getPosts();

  const tableBody = document.getElementById("tableBody");
  let html = "";

  users.forEach((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);

    let postsList = "<ul>";
    userPosts.forEach((p) => {
      postsList += `<li>${p.title}</li>`;
    });
    postsList += "</ul>";

    html += `
      <tr>
        <td>${user.name}</td>
        <td>${postsList}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

displayUsersWithPosts();
