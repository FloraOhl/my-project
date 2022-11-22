import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {/* <img src="images/Freedom.jpg" className="chains" alt="" /> */}
            <img src="images/kid.jpg" className="chains" alt="" />
            <h3 style={{ color: "purple" }}> Action to make a difference in people’s lives.</h3>
            <p><h3>We are here for you</h3> Immigration often places people in vulnerable situations both in transit or at
                destination, characteristics as race,age, sex, sexual orientation and
                gender identity, literacy and culture often plays a role in the various forms of exploitation ,abuses, social exclusion and marginalisation
                immigrants face when seeking basic needs.
                Please check out our programs on topics below
            </p>

            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home
