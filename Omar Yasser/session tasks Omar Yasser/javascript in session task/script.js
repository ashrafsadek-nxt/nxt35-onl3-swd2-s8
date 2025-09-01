async function getUsers() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
      params: { _limit: 3 }
    });
    return response.data;
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return [];
  }
}


async function getPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    return [];
  }
}
async function displayUsersAndPosts() {
  const users = await getUsers();
  const posts = await getPosts();
  const outputDiv = document.getElementById("output");

  users.forEach(user => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h2>${user.name} (${user.email})</h2>
      <ul id="posts-${user.id}"></ul>
    `;
    outputDiv.appendChild(userDiv);

    const userPosts = posts.filter(post => post.userId === user.id).slice(0, 3);
    const postList = document.getElementById(`posts-${user.id}`);
    userPosts.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postList.appendChild(li);
    });
  });
}

displayUsersAndPosts();
