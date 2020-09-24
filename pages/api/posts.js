
import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: `https://catcarbonell.ghost.io` ,
  key: process.env.NEXT_PUBLIC_CONTENT,
  version: "v3"
});  

export async function getPosts() {
    return await api.posts
      .browse({
        include: "tags",
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }

  export async function getLatestPost() {
    return await api.posts
    .browse({
      limit: 3
    })
    .catch(err => {
      console.error(err);
    });
  }