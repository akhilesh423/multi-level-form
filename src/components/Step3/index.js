import React from "react";

import "./index.css"

const Step3 = ({ formData, handleInputChange, prevStep, nextStep }) => {
    return (
        <div>
            <h2>User Details</h2>
            <input className="input"
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                placeholder="occupation"
            />

            <input className="input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
            />
            <div className="buttons-container">
                <button className="btn" onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>

        </div>
    );
};

export default Step3;
