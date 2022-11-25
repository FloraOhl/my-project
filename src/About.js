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
            <p>𝑂𝑢𝑟 𝑡𝑒𝑎𝑚 𝑜𝑓 𝑒𝑥𝑝𝑒𝑟𝑡𝑠 𝑖𝑛 𝐻𝑒𝑎𝑙𝑡ℎ, 𝐿𝑒𝑔𝑎𝑙 ,𝐻𝑜𝑢𝑠𝑖𝑛𝑔 𝑎𝑛𝑑 𝑐𝑜𝑢𝑛𝑠𝑒𝑙𝑙𝑖𝑛𝑔 𝑖𝑠 ℎ𝑒𝑟𝑒 𝑡𝑜 ℎ𝑒𝑙𝑝 𝑦𝑜𝑢 𝑎𝑐𝑐𝑒𝑠𝑠 𝑠𝑒𝑟𝑣𝑖𝑐𝑒𝑠 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑏𝑎𝑟𝑟𝑖𝑒𝑟𝑠.</p>
            <p>Contact US</p>
            <ul>
                <li>☏ 0800-200-200</li>
                <br></br>
                <li>✉<Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                    Email
                </Link></li>
                <br></br>
                <li>웃 visit our office ǀ  FREEDOMǀ  FullStack-MobileApp-Straße 5,ǀ 10243 Berlin! </li>
            </ul>

            <br></br>

            <p>

                <center><Link to='/'>Back to Homepage</Link></center>
            </p>
        </main >

    )
}

export default About