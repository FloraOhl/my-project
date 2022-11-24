import { useParams, Link } from "react-router-dom";
// import { FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css'

const PostPage = ({ posts, }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <main className="PostPage">

            <article className="post">

                {post &&

                    <>
                        <h2>{post.title}</h2>

                        <p className="postBody">{post.body}</p>



                        {/* <button><Link to='javascript:void(0)'
                            onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                            Request Support
                        </Link></button> */}



                        {/* <button onClick={() => handleDelete(post.id)}>

                        </button> */}
                        <br></br>
                        <br></br>
                        <ul>
                            <li>☏ call 0800-200-200</li>
                            <li>☏<Link to='javascript:void(0)'
                                onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                                Email
                            </Link></li>
                            <li>☏ visit our office ǀ  FREEDOMǀ  Valeska-Gert-Straße 5,ǀ 10243 Berlin! </li>
                        </ul>

                        <br></br>

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