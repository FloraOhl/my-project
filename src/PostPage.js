import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, }) => {
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

                        {/* <button onClick={() => handleDelete(post.id)}>

                        </button> */}
                        <p>

                            <Link to='/'>Back to Homepage</Link>
                        </p>

                    </>

                }

                {!post &&
                    <>
                        <h2>Page Not Found(404)Error</h2>
                        <p>We Apologize for the inconvenience.</p>
                        <p> Please call our advisory services toll free on </p>
                        <h3 style={{ color: "blue" }}>0800-700-200</h3>
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