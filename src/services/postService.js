// import { createPostService } from '../services/postService.js';
const createPostService = async (createPostObj) => {
  try {
    const caption = createPostObj.caption?.trim();
    const image = createPostObj.image;
    const post = await createPostObj(caption, image);
    return post;
  } catch (err) {
    console.log(err);
  }
};

export default createPostService;