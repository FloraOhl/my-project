import React from 'react'

const NewRequest = ({
    handleSubmit, requestTitle, setRequestTitle, requestBody, setRequestBody
}) => {
    return (
        <main className="NewRequest">
            <h2>New Request</h2>
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
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewRequest
