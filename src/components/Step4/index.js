
import React from "react";
import { useState } from "react";
import "./index.css"

const Step4 = ({ formData, handleInputChange, prevStep }) => {
    const [summary, setSummary] = useState("")
    const [showSummary, setShowSummary] = useState(false)
    return (
        <div>
            <h2>User details</h2>
            <input className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
            />
            <input className="input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
            />
            <div className="buttons-container">
                <button className="btn" onClick={prevStep}>Previous</button>
                <button className="btn" onClick={handleConfirm}>Confirm</button>
            </div>

            {
                showSummary && (
                    <div>
                        <h3>Summary</h3>
                        <pre>{summary}</pre>
                    </div>
                )
            }



        </div>
    );

    // Function to handle the "Confirm" button click
    function handleConfirm() {
        const summary = `
              Name: ${formData.name}
              Email: ${formData.email}
              Password: ${formData.password}`;

        // You can display the summary to the user or perform other actions with it
        setSummary(summary);
        setShowSummary(true);


    }


}


export default Step4;
