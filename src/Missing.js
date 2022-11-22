import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Found(404)Error</h2>
            <p>We Apologize for the inconvenience.</p>
            <p> Please call our advisory services toll free on </p>
            <h3 style={{ color: "blue" }}>0800-700-200</h3>
            <p>
                <Link to='/'>Learn more, on Homepage</Link>
            </p>
        </main>
    )
}

export default Missing
