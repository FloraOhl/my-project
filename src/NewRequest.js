import React from 'react'

const NewRequest = ({
    handleSubmit, fullName, setFullName, requestTitle, setRequestTitle, requestBody, setRequestBody
}) => {
    return (
        <main className="NewRequest">
            <h2>New Request</h2>
            <form className="newRequestForm" onSubmit={handleSubmit}>
                <label htmlFor="fullname">Fullname:</label>
                <input
                    id="fullName"
                    type="text"
                    required
                    value={requestTitle}
                    onChange={(e) => setFullName(e.target.value)}
                />
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
                <button type="submit request">Submit</button>
            </form>
        </main>
    )
}

export default NewRequest
