import Post from './Post.jsx'
import {posts} from './data.js';

const Posts = (props) => {
    const {title} = props;
    return(
        <>
          <section>
          <h2>{title}</h2>
            <ul>      
                <Post posts={posts}/>
            </ul>
          </section>
        </>
    )
}

export default Posts;