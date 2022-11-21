import { Link } from 'react-router-dom';
const About = () => {
    return (
        <main className='About'>
            <h2>About</h2>
            <img src="images/hope.jpg" className="chains" alt="" />
            <p style={{ marginTop: "1rem" }}>Most programs offered to immigrants emphasis on local and grassroots level, but not on the legal, physical, financial, information and discrimination barriers experienced by migrants in exercising their human rights through safe access to basic services. Information is the one of the most powerful and useful possessions one can have.
                This app is a solution to overcome constraints, and help to advance a common understanding on how to realize safe and inclusive access to services for migrants.
                This freedom app is a project to collect and share inspirational stories.
                <Link to='/'>Back to Homepage</Link>
            </p >
            <img src="images/chains.jpg" className="chains" alt="" />
        </main >
    )
}

export default About