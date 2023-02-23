function loadPosts(){
 fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>res.json())
.then(data => displayPosts(data))
}
loadPosts();
function displayPosts(posts){
    const postsContainer = document.getElementById('posts-container');
for(post of posts){
   const postDiv = document.createElement('div');
   postDiv.classList.add('post')
   postDiv.innerHTML=`
   <h4>User-${post.userId}</h4>
   <h5>Post: ${post.title}</h5>
   <p>Post Description: ${post.body} </p>
   `;
   postsContainer.appendChild(postDiv);
}
}
loadPosts();
function deleteAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
function patchAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

