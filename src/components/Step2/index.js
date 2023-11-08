
import React from "react";
import "./index.css"

const Step2 = ({ formData, handleInputChange, nextStep }) => {
    return (
        <div>
            <h2>User Details</h2>
            <input className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
            />

            <input className="input"
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
            />
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step2;
