async function unhelpfulClickHandler(event) {
  event.preventDefault();

  // function to mark posts as unhelpful by clicking on the unhelpful button

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch('/api/posts/unhelpful', {
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

    // if button already clicked, will not allow the user to mark a post as unhelpful multiple times
  } else {
    alert(response.statusText);
  }
}
  
document.querySelector('.unhelpful-btn').addEventListener('click', unhelpfulClickHandler);
  