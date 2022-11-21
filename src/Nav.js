import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Request Support</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="signup">Signup</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search </label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

        </nav>
    )
}

export default Nav

