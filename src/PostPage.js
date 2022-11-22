import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <main className="PostPage">

            <article className="post">
                <img src="images/Freedom.jpg" className="chains" alt="" />
                {post &&

                    <>
                        <h2>{post.title}</h2>

                        <p className="postBody">{post.body}</p>

                        <button onClick={() => handleDelete(post.id)}>

                        </button>
                        <p>

                            <Link to='/'>Back to Homepage</Link>
                        </p>

                    </>

                }

                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage
