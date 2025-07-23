import { paginationData } from './post-page-pagin.js';
import { getPost } from './post-page-api.js';
import { renderPosts } from './post-page-render.js';

async function loadAndRenderPosts() {
  const posts = await getPost(
    paginationData.currentPage,
    paginationData.perPage
  );
  renderPosts(posts);
}
loadAndRenderPosts();
