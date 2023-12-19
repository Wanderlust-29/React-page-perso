import Post from './Post.jsx'

const Posts = (props) => {
    return(
        <>
          <section>
          <h2>Publications</h2>
            <ul>      
                <Post />
            </ul>
          </section>
        </>
    )
}

export default Posts;