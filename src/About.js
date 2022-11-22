import { Link } from 'react-router-dom';
const About = () => {
    return (
        <main className='About'><Link to='/'>Back to Homepage</Link>
            <br></br>
            <br></br>


            <h2>What we do</h2>
            <img src="images/hope.jpg" className="chains" alt="" />

            <p style={{ marginTop: "1rem" }}>Information is the one of the most powerful and useful possessions one can have.
                standing on how to realize safe and inclusive access to services for migrants.

            </p >
            <h2>Find Help</h2>
            <img src="images/chains.jpg" className="chains" alt="" />
            <p style={{ marginTop: "1rem" }}>Most programs offered to immigrants emphasis on local
                and grassroots level, but not on the legal, physical, financial, information and
                discrimination barriers experienced by migrants in exercising their human rights
                through safe access to basic services. We will help you overcome barriers to access to services for migrants.</p >

        </main >
    )
}

export default About