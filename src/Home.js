import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {/* <img src="images/Freedom.jpg" className="chains" alt="" /> */}
            <img src="images/kid.jpg" className="chains" alt="" />
            <h5 style={{ color: "purple" }}>โ๐น๐๐ค๐๐  ๐๐๐๐๐ค ๐ ๐ ๐๐๐ ๐ค๐ฆ๐ฃ๐ง๐๐ง๐ ๐ฃ๐ค ๐๐๐ ๐ง๐๐๐ฅ๐๐๐ค ๐ ๐ ๐จ๐๐ฃ ๐ค๐๐ ๐ฆ๐๐ ๐๐ ๐๐ฃ๐ ๐ฆ๐๐๐ฅ ๐ฅ๐  ๐ฅ๐๐ ๐๐ ๐ฃ๐ ๐จ๐๐ฅ๐๐ ๐ฆ๐ฅ ๐๐๐ค๐๐ฃ๐๐๐๐๐๐ฅ๐๐ ๐ ๐ ๐ฃ ๐๐ฉ๐๐๐ก๐ฅ๐๐ ๐,โแถ หกแตสณแต</h5>
            <p><h3>We are here for you</h3> Immigration often places people in vulnerable situations both in transit or at
                destination.Natural characteristics as race,age, sex, sexual orientation and
                gender identity religion and culture often plays a role in the various forms of exploitation ,abuses, social exclusion for
                immigrants seeking basic needs.
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
