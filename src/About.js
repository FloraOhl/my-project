import { Link } from 'react-router-dom';
const About = () => {
    return (
        <main className='About'><Link to='/'>Back to Homepage</Link>
            <br></br>
            <br></br>


            <h2>What we do</h2>

            <img src="images/hope.jpg" className="chains" alt="" />

            <p style={{ marginTop: "1rem" }}>Freedom was established in 2022 it is a replication of my compass course solo project back in March 2022.
                This is  an information and service platform aiming to provide undocumented survivers of war and human trafficking unbiased access to basic services.This
                organization offers support for users to access the different basic needs breaking the gaps of discrimination and marginalization
                between service provides and users. Information is the one of the most powerful and useful possessions one can have.This platform helps users how to realize safe and inclusive access to services.

            </p >
            <h2>Find Help</h2>
            <img src="images/chains.jpg" className="chains" alt="" />
            <br></br>
            <p>WHY FREEDOM.</p>
            <p style={{ marginTop: "1rem" }}>Most programs offered to immigrants emphasis on local
                and grassroots level, but not on the legal, physical, financial, information and
                discrimination barriers experienced by migrants while exercising their human rights
                to access basic services. </p >
            <p>ππ’π π‘πππ ππ ππ₯ππππ‘π  ππ π»ππππ‘β, πΏππππ ,π»ππ’π πππ πππ πππ’ππ ππππππ ππ  βπππ π‘π βπππ π¦ππ’ πππππ π  π πππ£ππππ  π€ππ‘βππ’π‘ ππππππππ .</p>
            <p>Contact US</p>
            <ul>
                <li>β 0800-200-200</li>
                <br></br>
                <li>β<Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                    Email
                </Link></li>
                <br></br>
                <li>μ visit our office Η  FREEDOMΗ  FullStack-MobileApp-StraΓe 5,Η 10243 Berlin! </li>
            </ul>

            <br></br>

            <p>

                <center><Link to='/'>Back to Homepage</Link></center>
            </p>
        </main >

    )
}

export default About