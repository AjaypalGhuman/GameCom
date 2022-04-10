async function newFormHandler(event) {
    event.preventDefault();

    // function to creeate and add a post to a users feed
  
    const title = document.querySelector('input[name="post-title"]').value;
    const game_name = document.querySelector('input[name="game-name"]').value;
    const description = document.querySelector('input[name="description"]').value;

  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        game_name,
        description

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/account');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  