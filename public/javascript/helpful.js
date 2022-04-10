async function helpfulClickHandler(event) {
    event.preventDefault();
  

    // functionality to click helful button and mark posts as helpful 
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/posts/helpful', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
      // will not allow user to mark posts as unhelpful multiple times
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.helpful-btn').addEventListener('click', helpfulClickHandler);
  