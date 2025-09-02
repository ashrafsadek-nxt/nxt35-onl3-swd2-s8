(async function() {
  try {
    // Fetch first 3 users
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
      params: { _limit: 3 }
    });
    const users = response.data;
    alert('Fetched ' + users.length + ' users');

    // Create table
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    ['Name', 'Email', 'Posts'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    for (const user of users) {
      const postRes = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { userId: user.id }
      });
      const posts = postRes.data;
      const postTitles = posts
        .map(post => `• ${post.title}`)
        .join('<br>');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${postTitles}</td>
      `;
      table.appendChild(row);
    }
    document.getElementById('table-container').appendChild(table);
  } catch (error) {
    const errorElem = document.getElementById('error');
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message, error.response?.status);
      errorElem.textContent = 'Connection error: ' + (error.response?.status ?? 'Unknown');
    } else {
      console.error('Unknown error:', error);
      errorElem.textContent = 'Unexpected error occurred.';
    }
  }
})();
