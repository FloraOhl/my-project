const Header = ({ title }) => {
    return (
        <header className="Header" >
            <h1>{title}</h1>
            <p><i>Migrant-friendly services</i></p>
            <svg width="100" height="50" viewBox="0 0 130 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7646 35.5659L30.5174 58.2289C31.5945 60.0684 34.1302 60.5835 35.9702 59.4062C38.1469 58.0081 38.6855 54.8196 37.0922 52.6612L30.8988 43.9787C28.4753 40.8637 28.9017 36.0319 31.8862 33.2849C34.8483 30.5624 39.2914 30.9058 41.8719 34.0698L52.3514 46.971C55.8296 51.4839 57.8491 57.2968 57.8491 63.355V86.3859H72.4126V63.355C72.4126 57.2968 74.4322 51.4839 78.1124 46.971L88.5918 34.0698C91.1724 30.9058 95.6155 30.5624 98.5775 33.2849C101.562 36.0319 101.988 40.8637 99.3629 43.9787L93.3715 52.6612C91.7783 54.8196 92.3168 58.0081 94.4935 59.4062C96.3336 60.5835 98.6673 60.0684 99.9464 58.2289L115.497 35.5659V7.89943C115.497 3.5655 118.706 0.0507812 122.678 0.0507812C126.65 0.0507812 129.859 3.5655 129.859 7.89943V52.5141C129.859 55.9724 128.714 59.3571 126.65 61.9815L107.509 86.3859H108.316C111.301 86.3859 113.702 89.0103 113.702 92.2724C113.702 95.5345 111.301 98.1589 108.316 98.1589H22.1473C19.1628 98.1589 16.7617 95.5345 16.7617 92.2724C16.7617 89.0103 19.1628 86.3859 22.1473 86.3859H22.9551L3.81613 61.9815C1.74268 59.3571 0.60498 55.9724 0.60498 52.5141V7.89943C0.60498 3.5655 3.82062 0.0507812 7.78575 0.0507812C11.7509 0.0507812 14.9665 3.5655 14.9665 7.89943L14.7646 35.5659ZM21.9453 117.78C19.1628 117.78 16.5597 115.156 16.5597 111.894C16.5597 108.632 19.1628 106.008 21.9453 106.008H108.316C111.301 106.008 113.702 108.632 113.702 111.894C113.702 115.156 111.301 117.78 108.316 117.78H101.136V125.629H72.4126V117.78H57.8491V125.629H29.1261V117.78H21.9453Z" fill="black" />
            </svg>
        </header>
    )
}

export default Header
