import Feed from './Feed';

const Home = ({ posts }) => {
    return (
        <main className="Home">
            {/* <img src="images/Freedom.jpg" className="chains" alt="" /> */}
            <img src="images/kid.jpg" className="chains" alt="" />
            <h5 style={{ color: "purple" }}>❞𝔹𝕒𝕤𝕚𝕔  𝕟𝕖𝕖𝕕𝕤 𝕠𝕗 𝕒𝕝𝕝 𝕤𝕦𝕣𝕧𝕚𝕧𝕠𝕣𝕤 𝕒𝕟𝕕 𝕧𝕚𝕔𝕥𝕚𝕞𝕤 𝕠𝕗 𝕨𝕒𝕣 𝕤𝕙𝕠𝕦𝕝𝕕 𝕓𝕖 𝕓𝕣𝕠𝕦𝕘𝕙𝕥 𝕥𝕠 𝕥𝕙𝕖 𝕗𝕠𝕣𝕖 𝕨𝕚𝕥𝕙𝕠𝕦𝕥 𝕕𝕚𝕤𝕔𝕣𝕚𝕞𝕚𝕟𝕒𝕥𝕚𝕠𝕟 𝕠𝕣 𝕖𝕩𝕔𝕖𝕡𝕥𝕚𝕠𝕟,❞ᶠˡᵒʳᵃ</h5>
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
