import React from 'react'
// import { Link } from 'react-router-dom';

const NewRequest = ({
    handleSubmit, fullName, setFullName, requestTitle, setRequestTitle, requestBody, setRequestBody
}) => {
    return (
        <main className="NewRequest">
            <h2>Request support</h2>
            <form className="newRequestForm" onSubmit={handleSubmit}>
                <label htmlFor="requestTitle">Request Title:</label>
                <input
                    id="requestTitle"
                    type="text"
                    required
                    value={requestTitle}
                    onChange={(e) => setRequestTitle(e.target.value)}
                />
                <label htmlFor="requestBody">Request Description:</label>
                <textarea
                    id="requestBody"
                    required
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                />

                <center><button type="submit">Submit</button></center>
                <br></br>
                <center><h5>OR</h5></center>
                <center><button onClick={() => window.location = 'mailto:yourmail@domain.com'}>Click to email REQUEST</button></center>
                {/* <Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:yourmail@domain.com'}>
                    Contact US
                </Link> */}
                <img src="images/Donate.jpg" className="donate" alt="" />

            </form>
        </main>
    )
}

export default NewRequest
