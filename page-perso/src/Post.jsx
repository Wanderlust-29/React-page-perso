import { skills, posts } from './data.js';

const Post = (props) => {
    return(
        <>
          {posts.map((post, i) => (
            <li key={i}>
              <article>
                <img src={post.image}/>
                <h3 >{post.title}</h3>
                <p >{post.excerpt}</p>
              </article>
            </li>
          ))}
        </>
    )
}

export default Post;