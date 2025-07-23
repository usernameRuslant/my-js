import { refs } from './post-page-refs.js';

export function renderPosts(posts) {
  refs.postsList.innerHTML = posts
    .map(
      post => `
        <li class="post-item">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-content">${post.body}</p>
        </li>
      `
    )
    .join('');
}
